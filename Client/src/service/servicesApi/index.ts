"use server";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

//get all parent Category;
export const getAllParentCategory = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pcategory`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const result = await res.json();
  return result;
};

//get all service Category;
export const getAllServiceCategory = async (pcategoryId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/scategory/${pcategoryId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const createService = async (serviceData: FieldValues) => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  if (!accessToken) {
    throw new Error("Access token is missing");
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/service/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        body: JSON.stringify(serviceData),
      }
    );
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error creating service:", error);
    throw new Error("Service creation failed");
  }
};

export const getAllservices = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // ensures fresh data each time
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw new Error("Failed to fetch services");
  }
};

export const getMyservices = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  if (!accessToken) {
    throw new Error("Access token is missing");
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/service/my-services`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw new Error("Failed to fetch services");
  }
};

export const getServiceByID = async (serviceId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/service/${serviceId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw new Error("Failed to fetch services");
  }
};
