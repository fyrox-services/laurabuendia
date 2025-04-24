import { z } from 'zod';

export const mainFormSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  email: z.string().email('Email no válido'),
  phone: z
    .string()
    .min(6, 'El teléfono es demasiado corto')
    .regex(/^[\d\s+\-().]{7,}$/, 'El teléfono contiene caracteres inválidos'),
  subject: z.string().min(1, 'Elige un asunto'),
  msg: z.string().min(10, 'El mensaje es demasiado corto'),
  legal: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }),
  }),
});

export type MainForm = z.infer<typeof mainFormSchema>;
