"use server";
import { cookies } from "next/headers";

export const SendMessage = async (message: string, receiverId: string) => {
  const accessToken = (await cookies()).get("accessToken")?.value || "";
  if (!accessToken) throw new Error("You must be logged in to send messages");

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/chat/send/${receiverId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        body: JSON.stringify({ message }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to send message");
    }

    const result = await res.json();
    return result;
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Failed to send message"
    );
  }
};

export const GetAllMessagesFromASender = async (receiverId: string) => {
  const accessToken = (await cookies()).get("accessToken")?.value || "";
  if (!accessToken) throw new Error("You must be logged in to view messages");

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/chat/received/${receiverId}`,
      {
        method: "GET",
        headers: {
          Authorization: accessToken,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to load messages");
    }

    const result = await res.json();
    return result;
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Failed to load messages"
    );
  }
};

export const GetAllChatUsers = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value || "";
  if (!accessToken) throw new Error("You must be logged in to view chat users");

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat/users`, {
      method: "GET",
      headers: {
        Authorization: accessToken,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to load chat users");
    }

    const result = await res.json();
    return result;
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Failed to load chat users"
    );
  }
};
export const getUnreadMessagesCount = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value || "";
  if (!accessToken) throw new Error("You must be logged in to view chat users");

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/chat/unread-count`,
      {
        method: "GET",
        headers: {
          Authorization: accessToken,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to load chat users");
    }

    const result = await res.json();
    return result;
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Failed to load chat users"
    );
  }
};
