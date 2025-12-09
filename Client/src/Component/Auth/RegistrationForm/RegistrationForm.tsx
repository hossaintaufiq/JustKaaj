/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUser } from "@/context/UserContext";
import { RegisterUser, RegisterProvider } from "@/service/Auth";
import { TRegisterUser } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const RegistrationForm = ({ activeTab }: any) => {
  const { setIsLoading, isLoading } = useUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<TRegisterUser>();

  const router = useRouter();

  const onSubmit = async (data: TRegisterUser) => {
    try {
      setIsLoading(true);
      let res;

      if (activeTab === "provider") {
        const payload = {
          ...data,
          ...data.provider,
        };
        delete payload.provider;
        res = await RegisterProvider(payload);
      } else {
        res = await RegisterUser(data);
      }

      if (res?.success) {
        toast.success("Registration successful!");
        router.push("/login");
      } else {
        toast.error("Something went wrong. Please try again.");
      }

      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Your name"
          {...register("fullName", { required: "Full name is required" })}
          className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
            errors.fullName ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-green-500`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="your@email.com"
          {...register("email", { required: "Email is required" })}
          className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-green-500`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="01XXXXXXXXX"
          {...register("phone", { required: "Phone number is required" })}
          className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-green-500`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          {...register("password", { required: "Password is required" })}
          className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
            errors.password ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-green-500`}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Address */}
      {/* Area Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Area Name
          </label>
          <input
            type="text"
            placeholder="Banani, Gulshan, etc."
            {...register("address.area_name", {
              required: "Area name is required",
            })}
            className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
              errors.address?.area_name ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-green-500`}
          />
          {errors.address?.area_name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.address.area_name.message}
            </p>
          )}
        </div>
        {/* Street Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Street Address
          </label>
          <input
            type="text"
            placeholder="123 Main St"
            {...register("address.street_address", {
              required: "Street address is required",
            })}
            className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
              errors.address?.street_address
                ? "border-red-500"
                : "border-gray-300"
            } focus:outline-none focus:border-green-500`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            placeholder="Dhaka"
            {...register("address.city", { required: "City is required" })}
            className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
              errors.address?.city ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-green-500`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <input
            type="text"
            placeholder="Dhaka Division"
            {...register("address.state", { required: "State is required" })}
            className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
              errors.address?.state ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-green-500`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Postal Code
          </label>
          <input
            type="number"
            placeholder="1205"
            {...register("address.postal_code", {
              required: "Postal code is required",
              valueAsNumber: true,
            })}
            className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
              errors.address?.postal_code ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-green-500`}
          />
        </div>
      </div>

      {/* Provider Fields */}
      {activeTab === "provider" && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business / Company Name
            </label>
            <input
              type="text"
              placeholder="Business or Company"
              {...register("provider.business_name", {
                required: "Business name is required",
              })}
              className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                errors.provider?.business_name
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:outline-none focus:border-green-500`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business License No.
              </label>
              <input
                type="text"
                placeholder="123456"
                {...register("provider.business_license", {
                  required: "Business license number is required",
                })}
                className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                  errors.provider?.business_license
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-green-500`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                NID Number
              </label>
              <input
                type="text"
                placeholder="1234567890"
                {...register("provider.nid_number", {
                  required: "NID number is required",
                })}
                className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                  errors.provider?.nid_number
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-green-500`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Govt. ID / TIN
              </label>
              <input
                type="text"
                placeholder="123456789"
                {...register("provider.govt_id_or_tin", {
                  required: "Govt. ID or TIN is required",
                })}
                className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                  errors.provider?.govt_id_or_tin
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-green-500`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <input
                type="text"
                placeholder="Plumbing, Electrical, etc."
                {...register("provider.category", {
                  required: "Category is required",
                })}
                className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                  errors.provider?.category
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-green-500`}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Facebook Profile
            </label>
            <input
              type="url"
              placeholder="https://facebook.com/yourprofile"
              {...register("provider.facebook_profile")}
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website Link
            </label>
            <input
              type="url"
              placeholder="https://yourwebsite.com"
              {...register("provider.website_link")}
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-500"
            />
          </div>
        </>
      )}

      {/* Terms & Conditions */}
      <div className="flex items-start">
        <input
          type="checkbox"
          {...register("agree" as const, {
            required: "You must agree to the Privacy Policy and Terms of Use",
          })}
          className="mt-1 mr-2"
        />
        <label className="text-sm text-gray-700">
          I have read and agree to the{" "}
          <Link
            href="/privacy-policy-terms"
            className="text-green-500 hover:underline"
          >
            Privacy Policy & Terms of Use
          </Link>
          .
        </label>
      </div>
      {errors.agree && (
        <p className="text-red-500 text-xs mt-1">{errors.agree.message}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading || !watch("agree")}
        className={`w-full py-2 rounded-md font-medium transition-colors 
    ${
      isLoading || !watch("agree")
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-green-500 hover:bg-green-600 text-white"
    }`}
      >
        {isLoading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegistrationForm;
