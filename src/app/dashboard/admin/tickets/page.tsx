import { getAllTickets } from "@/actions/tickets";
import { TableTickets } from "@/components";

export default async function TicketsPage() {
  const tickets = await getAllTickets();

  if (!tickets) {
    return (
      <div className="container mx-auto">
        <h3 className="text-xl font-semibold mt-8">Todos los clientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          No tickets found
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h3 className="text-xl font-semibold mt-8">Todos los clientes</h3>
      <TableTickets tickets={tickets} />
    </div>
  );
}
