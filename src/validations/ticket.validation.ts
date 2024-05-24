import { z } from "zod";
import {
  Tipo,
  TipoPregunta as Area,
  EstadoTicket,
  Prioridad,
} from "@/interfaces";

export const updateTicketSchema = z.object({
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
  prioridad: z.nativeEnum(Prioridad, {
    errorMap: (issue, ctx) => {
      if (issue.code === "invalid_enum_value") {
        return {
          message: "El tipo de no es valido o esta vacio",
        };
      }
      return { message: issue.message ?? "" };
    },
  }),
  area: z.nativeEnum(Area, {
    errorMap: (issue, ctx) => {
      if (issue.code === "invalid_enum_value") {
        return {
          message: "El tipo de no es valido o esta vacio",
        };
      }
      return { message: issue.message ?? "" };
    },
  }),
  estado: z.nativeEnum(EstadoTicket, {
    errorMap: (issue, ctx) => {
      if (issue.code === "invalid_enum_value") {
        return {
          message: "El tipo de no es valido o esta vacio",
        };
      }
      return { message: issue.message ?? "" };
    },
  }),
  fecha_inicio: z.date({
    required_error: "La fecha de inicio es requerida",
    invalid_type_error: "La fecha de inicio no es valida",
  }),
  fecha_cierre: z.date().optional(),
  motivo: z
    .string({ required_error: "El motivo es requerido" })
    .min(5, { message: "El motivo debe tener al menos 5 caracteres" })
    .max(100, { message: "El motivo debe tener maximo 100 caracteres" }),
  descripcion: z
    .string({ required_error: "La descripcion es requerida" })
    .min(10, { message: "La descripcion debe tener al menos 10 caracteres" })
    .max(400, { message: "La descripcion debe tener maximo 400 caracteres" }),
});
