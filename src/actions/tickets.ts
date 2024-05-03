import prisma from "@/lib/prisma";

import { ITicket } from "@/interfaces";

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
