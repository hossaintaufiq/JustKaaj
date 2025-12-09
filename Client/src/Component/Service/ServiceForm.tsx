"use client";
import {
  createService,
  getAllParentCategory,
  getAllServiceCategory,
} from "@/service/servicesApi";
import { TServiceCategory, TService } from "@/types/service";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function AddService() {
  const [parentCategories, setParentCategories] = useState<TServiceCategory[]>(
    []
  );
  const [selectedParentCategory, setSelectedParentCategory] =
    useState<string>("");
  const [serviceCategories, setServiceCategories] = useState<
    TServiceCategory[]
  >([]);

  const { register, handleSubmit, control, reset, watch } = useForm<TService>({
    defaultValues: {
      title: "",
      description: "",
      area: "",
      price: 0,
      parentCategory: "",
      category: [],
      availabilities: weekDays.map((day) => ({
        day,
        startTime: "09:00",
        endTime: "18:00",
        isAvailable: false,
      })),
    },
  });

  // ✅ 1️⃣ Fetch all parent categories once
  useEffect(() => {
    async function fetchParentCategories() {
      const parent = await getAllParentCategory();
      setParentCategories(parent?.data || []);
    }
    fetchParentCategories();
  }, []);

  // ✅ 2️⃣ Fetch service categories when a parent category is selected
  useEffect(() => {
    async function fetchServiceCategories() {
      if (!selectedParentCategory) return; // prevent undefined call
      const service = await getAllServiceCategory(selectedParentCategory);
      setServiceCategories(service?.data || []);
    }
    fetchServiceCategories();
  }, [selectedParentCategory]);
  const onSubmit = async (data: TService) => {
    await setServiceCategories([]);
    reset();
    try {
      const cleaned = {
        title: data.title,
        description: data.description,
        area: data.area,
        price: Number(data.price),
        availabilities: data.availabilities.map((a) => ({
          ...a,
          startTime: a.isAvailable ? a.startTime : "not available",
          endTime: a.isAvailable ? a.endTime : "not available",
        })),
        category: data.category,
      };
      const res = await createService(cleaned);
      if (res?.success) toast.success(res?.message);
      else toast.error(res?.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full shadow-none grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Title
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="e.g. Home Cleaning"
            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Area
          </label>
          <input
            {...register("area", { required: true })}
            type="text"
            placeholder="e.g. Dhanmondi, Dhaka"
            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price
          </label>
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Enter price"
            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Parent Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Parent Category
          </label>
          <select
            {...register("parentCategory", { required: true })}
            onChange={(e) => setSelectedParentCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select Parent Category</option>
            {parentCategories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        {/* Service Category */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Category
          </label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              const selectedIds: string[] = (
                field.value as TServiceCategory[] | string[]
              ).map((item) => (typeof item === "string" ? item : item.id));

              return (
                <div className="flex flex-wrap gap-2">
                  {serviceCategories.map((cat) => {
                    const isSelected = selectedIds.includes(cat.id);
                    return (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => {
                          if (isSelected) {
                            field.onChange(
                              selectedIds.filter((id) => id !== cat.id)
                            );
                          } else {
                            field.onChange([...selectedIds, cat.id]);
                          }
                        }}
                        className={`px-4 py-1 rounded-full text-sm font-medium border transition ${
                          isSelected
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                        }`}
                      >
                        {cat.name}
                      </button>
                    );
                  })}
                </div>
              );
            }}
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            {...register("description")}
            rows={4}
            placeholder="Describe your service..."
            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Weekly Availability */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Weekly Availability
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {weekDays.map((day, index) => (
              <div
                key={day}
                className="border rounded-xl bg-gray-50 p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{day}</span>
                  <Controller
                    name={`availabilities.${index}.isAvailable`}
                    control={control}
                    render={({ field }) => (
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          className="hidden"
                        />
                        <div
                          className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                            field.value ? "bg-green-500" : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                              field.value ? "translate-x-5" : ""
                            }`}
                          />
                        </div>
                      </label>
                    )}
                  />
                </div>

                <div
                  className={`flex justify-between items-center gap-2 transition-all ${
                    watch(`availabilities.${index}.isAvailable`)
                      ? "opacity-100"
                      : "opacity-50 pointer-events-none"
                  }`}
                >
                  <Controller
                    name={`availabilities.${index}.startTime`}
                    control={control}
                    render={({ field }) => (
                      <input
                        type="time"
                        {...field}
                        className="flex-1 border rounded-lg px-2 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    )}
                  />
                  <span className="text-gray-500">to</span>
                  <Controller
                    name={`availabilities.${index}.endTime`}
                    control={control}
                    render={({ field }) => (
                      <input
                        type="time"
                        {...field}
                        className="flex-1 border rounded-lg px-2 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 mt-6 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium shadow hover:bg-green-700 transition"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
}
