import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { notFound, redirect } from "next/navigation";
import { getTicketsByUserSupport } from "@/actions/tickets";
import { TableTickets } from "@/components";

export default async function TicketsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return notFound();
  if (session.user.id_rol === 1 || session.user.id_rol === 6) {
    return redirect("/dashboard/admin");
  }

  const tickets = await getTicketsByUserSupport(session?.user.id);

  if (!tickets) {
    return (
      <div className="container mx-auto">
        <h3 className="text-xl font-semibold mt-8">Todos los tickets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          No tickets found
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h3 className="text-xl font-semibold mt-8">
        Todos los tickets asignados
      </h3>
      <TableTickets tickets={tickets} id_role={session?.user.id_rol} />
    </div>
  );
}
