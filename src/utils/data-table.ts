import React from "react";
import { MdOutlinePriorityHigh } from "react-icons/md";
import { ReactNode } from "react";

export const columnsTableTickets = [
  { name: "ID", uid: "id_ticket", sortable: true },
  { name: "ESTADO", uid: "estado", sortable: true },
  { name: "TIPO", uid: "tipo", sortable: true },
  { name: "PRIORIDAD", uid: "prioridad", sortable: true },
  { name: "FECHA", uid: "fecha_inicio", sortable: true },
  { name: "ACCIONES", uid: "acciones", sortable: false },
];

export const statusOptions = [
  { name: "ABIERTO", uid: "ABIERTO" },
  { name: "CERRADO", uid: "CERRADO" },
  { name: "EN PROCESO", uid: "EN_PROCESO" },
];

export const statusColorMap = {
  ABIERTO: "success",
  CERRADO: "danger",
  EN_PROCESO: "primary",
};

export const priorityOptions = [
  { name: "Baja", uid: "BAJA" },
  { name: "Media", uid: "MEDIA" },
  { name: "Alta", uid: "ALTA" },
  { name: "Inmediata", uid: "INMEDIATA" },
];

export const priorityColorMap = {
  BAJA: "primary",
  MEDIA: "secondary",
  ALTA: "warning",
  INMEDIATA: "danger",
};

export const typeOptions = [
  { name: "Incidencia", uid: "INCIDENCIA" },
  { name: "Petición", uid: "PETICION" },
  { name: "Queja", uid: "QUEJA" },
  { name: "Reclamación", uid: "RECLAMACION" },
];

export const typeColorMap = {
  INCIDENCIA: "danger",
  QUEJA: "secondary",
  PETICION: "warning",
  RECLAMACION: "primary",
};

export const columnsTableUsers = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NOMBRE", uid: "nombre", sortable: true },
  { name: "APELLIDOS", uid: "apellidos", sortable: true },
  { name: "EMAIL", uid: "email", sortable: true },
];
