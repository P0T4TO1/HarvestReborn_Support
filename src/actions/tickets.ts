import prisma from '@/lib/prisma';
import axios, { AxiosError } from 'axios';

import { ITicket, IUser, ITicketRespuesta } from '@/interfaces';
import { error } from 'console';

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

    let prioridad = '';

    if (tipo === 'INCIDENCIA') {
      prioridad = 'INMEDIATA';
    } else if (tipo === 'PETICION') {
      prioridad = 'BAJA';
    } else if (tipo === 'QUEJA') {
      prioridad = 'MEDIA';
    } else if (tipo === 'RECLAMACION') {
      prioridad = 'ALTA';
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
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/ticket/${id_ticket}`
    );

    return data as unknown as ITicket;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const getTicketByIdForAdmin = async (id_ticket: string) => {
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

export const getAllTickets = async () => {
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

export const getUsersSupport = async () => {
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

export const getTicketsByUserSupport = async (
  id_user: string
): Promise<ITicket[] | undefined> => {
  if (!id_user) {
    return;
  }

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/tickets/${id_user}`
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

export const postAnswer = async (
  id_ticket: string,
  respuesta: string,
  id_user: string
) => {
  try {
    const { data, status } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/ticket/answer/${id_ticket}`,
      {
        respuesta,
        id_user,
      }
    );

    if (status !== 200) {
      return 'Error al crear respuesta';
    }

    return data as unknown as ITicketRespuesta;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
      return;
    }
    console.error(error);
    return;
  }
};

export const postComment = async (
  id_ticket: string,
  comentario: string,
  id_user: string
) => {
  try {
    const { data, status } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/ticket/comment/${id_ticket}`,
      {
        comentario,
        id_user,
      }
    );

    if (status !== 200) {
      return 'Error al crear comentario';
    }

    return data as unknown as ITicketRespuesta;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
      return;
    }
    console.error(error);
    return;
  }
};

export const postFinalAnswer = async (
  id_ticket: string,
  respuesta: string,
  id_user: string
) => {
  try {
    const { data, status } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/ticket/answer/final/${id_ticket}`,
      {
        respuesta,
        id_user,
      }
    );

    if (status !== 200) {
      return 'Error al crear respuesta';
    }

    return data as unknown as ITicketRespuesta;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
      return;
    }
    console.error(error);
    return;
  }
};

export const deleteTicket = async (id_ticket: string) => {
  try {
    const { status } = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/ticket/${id_ticket}`
    );

    if (status !== 200) {
      return 'Error al eliminar ticket';
    }

    return 'Ticket eliminado correctamente';
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
      return;
    }
    console.error(error);
    return;
  }
};
