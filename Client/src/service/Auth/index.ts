// "use server";

// import { IUser, RegisterUser, TLoginUser } from "@/types";
// import { jwtDecode } from "jwt-decode";
// import { cookies } from "next/headers";

// export const Register = async (userdata: RegisterUser) => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/create-user`, { 
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userdata),
//     });

//     const result = await res.json();
//     if (result.success) {
//       (await cookies()).set("accessToken", result.data.accessToken);
//     }
//     return result;
//   } catch (error) {
//     console.error("Error during registration:", error);
//     throw new Error("Registration failed");
//   }
// };

// export const LoginUser = async (userdata: TLoginUser) => {
//   try {

//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`, {

//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userdata),
//     });
//     const result = await res.json();
//     if (result.success) {
//       (await cookies()).set("accessToken", result.data.accessToken);
//     }
//     return result;
//   } catch (error) {
//     console.error("Error during login:", error);
//     throw new Error("Login failed");
//   }
// };

// export const logout = async () => {
//   try {
//     (await cookies()).delete("accessToken");
//   } catch (error) {
//     console.error("Error during logout:", error);
//     throw new Error("Logout failed");
//   }
// };

// export const getCurrentUser = async (): Promise<IUser | null> => {
//   const accessToken = (await cookies()).get("accessToken")?.value;

//   let decoded;
//   if (accessToken) {
//     decoded = jwtDecode<IUser>(accessToken);
//     return decoded;
//   } else {
//     return null;
//   }
// };

// export const myProfile = async () => {
//   const accessToken = (await cookies()).get("accessToken")?.value;

//   if (!accessToken) {
//     throw new Error("Access token is missing");
//   }

//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/my-profile`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: accessToken,
//       },
//       cache: "no-store",
//     });
//     const result = await res.json();
//     return result;
//   } catch (error) {
//     console.error("Error fetching profile:", error);
//     throw new Error("Failed to fetch profile");
//   }
// };


// // const res = await fetch("http://localhost:5000/api/user/create-user", { ... });
// // const res = await fetch("http://147.79.68.37:5000/api/auth/login", { ... });
// // const res = await fetch("api/auth/my-profile", { ... });



// new code 
// solving the address and others 
"use client"; // Now runs in browser for token storage

import { IUser, RegisterUser, TLoginUser } from "@/types";
import { jwtDecode } from "jwt-decode";

// Store token in localStorage
const setToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

// Get token from localStorage
const getToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

// Remove token
const removeToken = () => {
  localStorage.removeItem("accessToken");
};

// ---------------- REGISTER ----------------
export const Register = async (userdata: RegisterUser) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userdata),
      credentials: "include",
    });

    const result = await res.json();
    if (result.success && result.data?.accessToken) {
      setToken(result.data.accessToken);
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userdata),
      credentials: "include",
    });

    const result = await res.json();
    if (result.success && result.data?.accessToken) {
      setToken(result.data.accessToken);
    }
    return result;
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Login failed");
  }
};

// ---------------- LOGOUT ----------------
export const logout = () => {
  removeToken();
};

// ---------------- GET CURRENT USER ----------------
export const getCurrentUser = (): IUser | null => {
  const token = getToken();
  if (!token) return null;
  try {
    return jwtDecode<IUser>(token);
  } catch {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/my-profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // FIXED
      },
      credentials: "include",
    });

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw new Error("Failed to fetch profile");
  }
};
