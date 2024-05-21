import { IUser, TipoPregunta } from "@/interfaces";

export interface ITicket {
  id_ticket: string;
  tipo: Tipo;
  area: TipoPregunta;
  estado: EstadoTicket;
  prioridad: Prioridad;

  email?: string;

  motivo: string;
  descripcion: string;
  fecha_inicio: Date;
  fecha_cierre?: Date;

  respuesta?: string;

  comentarios?: ITicketComentario[];

  id_user?: string;
  user?: IUser;
  id_user_soporte?: string;
  user_soporte?: IUser;
}

export enum Tipo {
  INCIDENCIA = "INCIDENCIA",
  PETICION = "PETICION",
  QUEJA = "QUEJA",
  RECLAMACION = "RECLAMACION",
}

export enum EstadoTicket {
  ABIERTO = "ABIERTO",
  CERRADO = "CERRADO",
  EN_PROCESO = "EN_PROCESO",
}

export enum Prioridad {
  BAJA = "BAJA",
  MEDIA = "MEDIA",
  ALTA = "ALTA",
  INMEDIATA = "INMEDIATA",
}

export interface ITicketComentario {
  id_comentario: string;

  id_ticket: string;
  ticket: ITicket;

  comentario: string;
  fecha: Date;
}
