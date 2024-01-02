import { z } from "zod";
 
 
 //schema for input fields using zod
 export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters long" }),
  });

  export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;