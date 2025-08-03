/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const Register = async (userdata: any) => {
  try {
    const res = await fetch("http://localhost:3000/api/auth/register", {
      method: "POSOT",
      headers: {
        "CONTENT-TYPE": "application/json",
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
    const res = await fetch("", {
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
