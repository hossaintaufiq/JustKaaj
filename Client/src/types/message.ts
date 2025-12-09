export interface ChatUser {
  user_id: string;
  fullName: string;
  profileImage?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: string;
  sender: { user_id: string; fullName: string };
}
