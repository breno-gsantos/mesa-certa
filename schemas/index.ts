import {z} from 'zod';

export const registerSchema = z.object({
    name: z.string().min(2, "Nome muito curto"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

  export type RegisterInput = z.infer<typeof registerSchema>