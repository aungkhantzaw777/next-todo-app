import { z } from "zod";

export const todoSchema = z.object({
  textTodo: z.string(),
});
