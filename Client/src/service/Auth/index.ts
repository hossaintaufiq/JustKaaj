"use server";

import { IUser, TRegisterUser, TLoginUser } from "@/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const RegisterUser = async (userdata: TRegisterUser) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/create-user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      }
    );

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
export const RegisterProvider = async (userdata: TRegisterUser) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/create-provider`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      }
    );

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

export const LoginUser = async (userdata: TLoginUser) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
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

export const myProfile = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  if (!accessToken) {
    throw new Error("Access token is missing");
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getMe`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      cache: "no-store",
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw new Error("Failed to fetch profile");
  }
};

//update profileImage;
export const updateProfileImg = async (url: string) => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  if (!accessToken) {
    throw new Error("Access token is missing");
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/update-profileImg`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        body: JSON.stringify({ profileImage: url }),
      }
    );
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error updating profile Image:", error);
    throw new Error("Failed to update profile Image");
  }
};

export const uploadToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
  );

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Cloudinary upload failed: ${res.status} ${errText}`);
  }

  const data = await res.json();
  return data.secure_url;
};
