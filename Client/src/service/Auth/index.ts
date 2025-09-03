"use client";

import { IUser, TRegisterUser, TLoginUser } from "@/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

<<<<<<< HEAD
export const RegisterUser = async (userdata: TRegisterUser) => {
=======
// Store token in localStorage
const setToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("accessToken", token);
  }
};

// Get token from localStorage
const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("accessToken");
  }
  return null;
};

// Remove token
const removeToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem("accessToken");
  }
};

// ---------------- REGISTER ---------------- 
export const Register = async (userdata: RegisterUser) => {
>>>>>>> origin/main
  try {


    console.log("Attempting registration with data:", userdata);
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/create-user`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(userdata),
      credentials: "include",
    });

    console.log("Registration response status:", res.status);
    
    if (!res.ok) {
      const errorData = await res.json();
      console.error("Registration failed:", errorData);
      throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
    }

    const result = await res.json();
    console.log("Registration result:", result);
    
    if (result.success && result.data?.accessToken) {
      setToken(result.data.accessToken);
    }
    return result;
  } catch (error) {
    console.error("Error during registration:", error);
    throw new Error(error instanceof Error ? error.message : "Registration failed");
  }
};
export const RegisterProvider = async (userdata: TRegisterUser) => {
  try {
    const res = await fetch(`http://localhost:5000/api/user/create-provider`, {
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

// ---------------- LOGIN ---------------- 
export const LoginUser = async (userdata: TLoginUser) => {
  try {
// <<<<<<< HEAD
    console.log("Attempting login with data:", userdata);
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(userdata),
      credentials: "include",
    });

    console.log("Login response status:", res.status);
    
    if (!res.ok) {
      const errorData = await res.json();
      console.error("Login failed:", errorData);
      throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
    }

    const result = await res.json();
    console.log("Login result:", result);
    
    if (result.success && result.data?.accessToken) {
      setToken(result.data.accessToken);
    }
    return result;
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error(error instanceof Error ? error.message : "Login failed");
  }
};

// ---------------- LOGOUT ---------------- 
export const logout = () => {
  removeToken();
};

// ---------------- GET CURRENT USER ---------------- 
// export const getCurrentUser = (): IUser | null => {
//   const token = getToken();
//   if (!token) return null;
//   try {
//     return jwtDecode<IUser>(token);
//   } catch {

//     (await cookies()).delete("accessToken");
//   } catch (error) {
//     console.error("Error during logout:", error);
//     throw new Error("Logout failed");
//   }
// };

export const getCurrentUser = async (): Promise<IUser | null> => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decodedData = null;

  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    return decodedData;
  } else {
    return null;
  }
};

// ---------------- MY PROFILE ---------------- 
export const myProfile = async () => {
  const token = getToken();
  if (!token) {
    throw new Error("Access token is missing");
  }

  try {
    const res = await fetch("http://localhost:5000/api/user/getMe", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw new Error(error instanceof Error ? error.message : "Failed to fetch profile");
  }
};

// const res = await fetch("http://localhost:5000/api/user/create-user", { ... });
// const res = await fetch("http://147.79.68.37:5000/api/auth/login", { ... });
// const res = await fetch("api/auth/my-profile", { ... });

