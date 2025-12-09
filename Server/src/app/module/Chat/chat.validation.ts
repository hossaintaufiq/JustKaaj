import { z } from 'zod';

const sendMessage = z.object({
  body: z.object({
    message: z.string({ required_error: 'Message is required' }),
  }),
});

export const ChatValidation = {
  sendMessage,
};
