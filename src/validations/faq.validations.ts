import { z } from "zod";
import { TipoPregunta } from "@/interfaces";

export const faqSchema = z.object({
  pregunta: z.string({ required_error: "La pregunta es requerida" }),
  respuesta: z.string({ required_error: "La respuesta es requerida" }),
  tipo: z.nativeEnum(TipoPregunta, {
    errorMap: (issue, ctx) => {
      if (issue.code === "invalid_enum_value") {
        return {
          message: "El tipo de disponibilidad no es valido o esta vacio",
        };
      }
      return { message: issue.message ?? "" };
    },
  }),
});
