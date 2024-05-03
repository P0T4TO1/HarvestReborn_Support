import { MyTickets } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { notFound } from "next/navigation";
import { getTicketsByIdUser } from "@/actions/tickets";

const MyTicketsPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user.id) return notFound();

  const tickets = await getTicketsByIdUser(session?.user?.id);

  if (!tickets) return notFound();

  return <MyTickets tickets={tickets} />;
};

export default MyTicketsPage;
