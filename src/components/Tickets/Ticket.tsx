import React from "react";
import { ITicket } from "@/interfaces";

interface Props {
  ticket: ITicket;
}

export const Ticket = ({ ticket }: Props) => {
  return (
    <div>
      <h1>{ticket.motivo}</h1>
      <p>Descripción: {ticket.descripcion}</p>
      <p>Estado: {ticket.estado}</p>
      <p>
        Fecha:{" "}
        {ticket.fecha_inicio.toLocaleDateString("es-MX", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p>
        Encargado de soporte:{" "}
        {ticket.user_soporte ? ticket.user_soporte.nombre : "No asignado"}
      </p>
    </div>
  );
};
