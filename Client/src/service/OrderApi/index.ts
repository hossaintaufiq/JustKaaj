"use server";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const createOrder = async (orderData: FieldValues) => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  if (!accessToken) {
    throw new Error("Access token is missing");
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify(orderData),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error creating Order:", error);
    throw new Error("Order creation failed");
  }
};

export const getAllUsersOrder = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  if (!accessToken) {
    throw new Error("Access token is missing");
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders");
  }
};

export const getOrderById = async (id: string) => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  if (!accessToken) {
    throw new Error("Access token is missing");
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw new Error("Failed to fetch order");
  }
};

export const getProviderServicesHistory = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  if (!accessToken) {
    throw new Error("Access token is missing");
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/order/provider`,
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
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders");
  }
};

export const updateOrderStatus = async (id: string, status: string) => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  if (!accessToken) {
    throw new Error("Access token is missing");
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/order/update-status/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        body: JSON.stringify({ status }),
      }
    );

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error updating Order status:", error);
    throw new Error("Order status updating failed");
  }
};
