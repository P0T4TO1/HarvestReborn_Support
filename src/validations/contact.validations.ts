import { z } from "zod";
import { Tipo, TipoPregunta } from "@/interfaces";

export const contactGuestSchema = z.object({
  email: z.string({ required_error: "El email es requerido" }).email({
    message: "El email no es valido",
  }),
  tipo: z.nativeEnum(Tipo, {
    errorMap: (issue, ctx) => {
      if (issue.code === "invalid_enum_value") {
        return {
          message: "El tipo de no es valido o esta vacio",
        };
      }
      return { message: issue.message ?? "" };
    },
  }),
  motivo: z
    .string({ required_error: "El motivo es requerido" })
    .min(5, {
      message: "El motivo debe tener al menos 5 caracteres",
    })
    .max(100, {
      message: "El motivo debe tener maximo 100 caracteres",
    }),
  descripcion: z
    .string({ required_error: "La descripcion es requerida" })
    .min(10, {
      message: "La descripcion debe tener al menos 10 caracteres",
    })
    .max(400, {
      message: "La descripcion debe tener maximo 400 caracteres",
    }),
});

export const contactSchema = z.object({
  tipo: z.nativeEnum(Tipo, {
    errorMap: (issue, ctx) => {
      if (issue.code === "invalid_enum_value") {
        return {
          message: "El tipo de no es valido o esta vacio",
        };
      }
      return { message: issue.message ?? "" };
    },
  }),
  area: z.nativeEnum(TipoPregunta, {
    errorMap: (issue, ctx) => {
      if (issue.code === "invalid_enum_value") {
        return {
          message: "El area no es valido o esta vacio",
        };
      }
      return { message: issue.message ?? "" };
    },
  }),
  motivo: z
    .string({ required_error: "El motivo es requerido" })
    .min(5, {
      message: "El motivo debe tener al menos 5 caracteres",
    })
    .max(100, {
      message: "El motivo debe tener maximo 100 caracteres",
    }),
  descripcion: z
    .string({ required_error: "La descripcion es requerida" })
    .min(10, {
      message: "La descripcion debe tener al menos 10 caracteres",
    })
    .max(400, {
      message: "La descripcion debe tener maximo 400 caracteres",
    }),
});
