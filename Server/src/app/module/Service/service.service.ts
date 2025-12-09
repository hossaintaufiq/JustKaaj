/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { prisma } from '../../utils/prisma';

const createServiceIntodb = async (req: Request) => {
  const { category, availabilities, ...serviceData } = req.body;
  const user = (req as any).user;

  //Find the provider by email
  const providerData = await prisma.service_Provider.findUniqueOrThrow({
    where: { email: user.email },
  });

  // Wrap everything in a single transaction
  const result = await prisma.$transaction(async (trns) => {
    // Create the main service
    const createdService = await trns.service.create({
      data: {
        ...serviceData,
        availabilities: {
          create: availabilities.map((a: any) => ({
            day: a.day,
            startTime: a.isAvailable ? a.startTime : null,
            endTime: a.isAvailable ? a.endTime : null,
            isAvailable: a.isAvailable,
          })),
        },
      },
    });

    // Link provider to the service
    await trns.providerServices.create({
      data: {
        providerId: providerData.id,
        serviceId: createdService.id,
      },
    });

    // Link service to multiple categories using intermediate table
    if (Array.isArray(category) && category.length > 0) {
      await trns.serviceOnCategory.createMany({
        data: category.map((catId: string) => ({
          serviceId: createdService.id,
          categoryId: catId,
        })),
        skipDuplicates: true,
      });
    }

    return createdService;
  });

  return result;
};

const getAllServicesFromDb = async () => {
  const result = await prisma.service.findMany({
    include: {
      providerServices: {
        include: {
          service_provider: {
            include: { user: true },
          },
        },
      },
      serviceOnCategory: {
        include: {
          category: {
            include: {
              parent_category: true,
            },
          },
        },
      },
      availabilities: true,
      orders: true,
    },
  });

  return result;
};

const getMyServices = async (req: Request) => {
  const providerEmail = (req as any).user.email;
  const provider = await prisma.service_Provider.findUniqueOrThrow({
    where: { email: providerEmail },
  });
  const result = await prisma.service.findMany({
    where: {
      providerServices: {
        some: {
          providerId: provider.id,
        },
      },
    },
    include: {
      serviceOnCategory: {
        include: {
          category: {
            include: {
              parent_category: true,
            },
          },
        },
      },
      providerServices: {
        include: {
          service_provider: {
            include: { user: true },
          },
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return result;
};

const getServiceByIdFromDb = async (serviceId: string) => {
  const result = await prisma.service.findUnique({
    where: { id: serviceId },
    include: {
      providerServices: {
        include: {
          service_provider: {
            include: { user: true },
          },
        },
      },
      serviceOnCategory: {
        include: {
          category: {
            include: {
              parent_category: true,
            },
          },
        },
      },
      availabilities: true,
      orders: true,
    },
  });
  return result;
};

const deleteService = async (req: Request) => {
  const providerEmail = (req as any).user.email;

  const provider = await prisma.service_Provider.findUniqueOrThrow({
    where: { email: providerEmail },
  });

  const { id } = req.params;

  // Ensure the service belongs to this provider
  const service = await prisma.service.findFirst({
    where: {
      id,
      providerServices: {
        some: { providerId: provider.id },
      },
    },
    select: {
      id: true,
      title: true,
    },
  });

  if (!service) {
    return { success: false, message: 'Service not found or unauthorized' };
  }

  // Perform all deletions in a single transaction
  await prisma.$transaction([
    prisma.serviceOnCategory.deleteMany({
      where: { serviceId: id },
    }),
    prisma.providerServices.deleteMany({
      where: { serviceId: id },
    }),
    prisma.service.delete({
      where: { id },
    }),
  ]);

  return {
    serviceId: service.id,
    title: service.title,
  };
};

const updateService = async (req: Request) => {
  const { id } = req.params;
  const { category, availabilities, ...updateData } = req.body;
  const user = (req as any).user;

  // Find provider by email
  const provider = await prisma.service_Provider.findUniqueOrThrow({
    where: { email: user.email },
  });

  const result = await prisma.$transaction(async (trns) => {
    // ✅ Ensure service belongs to this provider
    const serviceExists = await trns.service.findFirst({
      where: {
        id,
        providerServices: {
          some: { providerId: provider.id },
        },
      },
    });

    if (!serviceExists) {
      throw new Error('Service not found or unauthorized');
    }

    // ✅ Update main service info
    const updatedService = await trns.service.update({
      where: { id },
      data: {
        ...updateData,
        updatedAt: new Date(),
      },
    });

    // ✅ Update availabilities if provided
    if (Array.isArray(availabilities)) {
      // Remove old availabilities
      await trns.serviceAvailability.deleteMany({
        where: { serviceId: id },
      });

      // Add new availabilities
      if (availabilities.length > 0) {
        await trns.serviceAvailability.createMany({
          data: availabilities.map((a: any) => ({
            serviceId: id,
            day: a.day,
            startTime: a.isAvailable ? a.startTime : null,
            endTime: a.isAvailable ? a.endTime : null,
            isAvailable: a.isAvailable,
          })),
        });
      }
    }

    // ✅ Update category relations if provided
    if (Array.isArray(category)) {
      // Remove existing category relations
      await trns.serviceOnCategory.deleteMany({
        where: { serviceId: id },
      });

      // Add new category relations
      if (category.length > 0) {
        await trns.serviceOnCategory.createMany({
          data: category.map((catId: string) => ({
            serviceId: id,
            categoryId: catId,
          })),
          skipDuplicates: true,
        });
      }
    }

    return updatedService;
  });

  return result;
};

export const ServiceOfService = {
  createServiceIntodb,
  getAllServicesFromDb,
  getServiceByIdFromDb,
  getMyServices,
  deleteService,
  updateService,
};
