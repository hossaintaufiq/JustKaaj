"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                {...register("email", { required: "Email is required" })}
                className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-green-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
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
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors font-medium"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Don&apos;t have an account?{" "}
            <Link href="/registration" className="text-green-500 hover:underline">
              Sign Up
            </Link>
          </p>
          <p className="text-xs text-gray-500 mt-2 text-center">
            By logging in, you agree to our{" "}
            <Link href="/privacy-policy-terms" className="text-green-500 hover:underline">
              Privacy Policy & Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-green-500 hover:underline">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
