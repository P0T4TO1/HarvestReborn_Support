import prisma from "@/lib/prisma";
import axios, { AxiosError } from "axios";

import { ITicket, IUser } from "@/interfaces";

export const revalidate = 3600;

export const getTicketsByIdUser = async (
  id_user: string
): Promise<ITicket[] | undefined> => {
  if (!id_user) {
    return;
  }

  try {
    const tickets = (await prisma.ticket.findMany({
      where: {
        id_user,
      },
    })) as unknown as ITicket[];

    return tickets;
  } catch (error) {
    console.error(error);
    return;
  }
};

interface ITicketData {
  tipo: string;
  area: string;
  motivo: string;
  descripcion: string;
  id_user: string;
}

export const createTicket = async (
  data: ITicketData
): Promise<ITicket | undefined> => {
  const { tipo, motivo, area, descripcion, id_user } = data;

  try {
    const user = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/${id_user}`
    );

    if (!user) {
      return;
    }

    let prioridad = "";

    if (tipo === "INCIDENCIA") {
      prioridad = "INMEDIATA";
    } else if (tipo === "PETICION") {
      prioridad = "BAJA";
    } else if (tipo === "QUEJA") {
      prioridad = "MEDIA";
    } else if (tipo === "RECLAMACION") {
      prioridad = "ALTA";
    }

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/tickets`,
      {
        tipo,
        area,
        motivo,
        descripcion,
        prioridad,
        id_user,
      }
    );

    return data as unknown as ITicket;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const getTicketById = async (
  id_ticket: string
): Promise<ITicket | undefined> => {
  if (!id_ticket) {
    return;
  }

  try {
    const ticket = await prisma.ticket.findUnique({
      where: {
        id_ticket,
      },
    });

    return ticket as unknown as ITicket;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const getTicketByIdForAdmin = async (
  id_ticket: string
): Promise<ITicket | undefined> => {
  if (!id_ticket) {
    return;
  }

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/ticket/admin/${id_ticket}`
    );

    return data as unknown as ITicket;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const getAllTickets = async (): Promise<ITicket[] | undefined> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/ticket`
    );
    return data as unknown as ITicket[];
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
      return;
    }
    console.error(error);
    return;
  }
};

export const getUsersSupport = async (): Promise<IUser[] | undefined> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/users`
    );
    return data as unknown as IUser[];
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
      return;
    }
    console.error(error);
    return;
  }
};
