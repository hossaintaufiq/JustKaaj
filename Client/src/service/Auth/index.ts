/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { RegisterUser } from "@/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const Register = async (userdata: RegisterUser) => {
  try {
    const res = await fetch("http://localhost:5000/api/user/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    });

    const result = await res.json();
    if (result.success) {
      (await cookies()).set("accessToken", result.data.accessToken);
    }
    return result;
  } catch (error) {
    console.error("Error during registration:", error);
    throw new Error("Registration failed");
  }
};

export const Login = async (userdata: any) => {
  try {
    const res = await fetch("http://147.79.68.37:5000/api/auth/login", {
      method: "POST",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
      body: JSON.stringify(userdata),
    });
    const result = await res.json();
    if (result.success) {
      (await cookies()).set("accessToken", result.data.accessToken);
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Login failed");
  }
};

export const logout = async () => {
  try {
    (await cookies()).delete("accessToken");
  } catch (error) {
    console.error("Error during logout:", error);
    throw new Error("Logout failed");
  }
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  let decoded;
  if (accessToken) {
    decoded = jwtDecode(accessToken);
    return decoded;
  } else {
    return null;
  }
};
