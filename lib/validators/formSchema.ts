import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50),
  type: z
    .string()
    .min(0, {
      message: "",
    })
    .max(50),
  description: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(500),
  value: z.string().min(0, {
    message: "",
  }),
});

export type formSchemaReq = z.infer<typeof formSchema>;
