import { AdminDashboardCard } from "@/components";
import { getAllTickets } from "@/actions/tickets";
import { FaTicket } from "react-icons/fa6";

export default async function DashboardPage() {
  const tickets = await getAllTickets();

  if (!tickets) {
    return (
      <div className="container mx-auto">
        <div className="mt-8">Home</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <AdminDashboardCard
            title="Tickets"
            tickets={0}
            icon={<FaTicket size={21} className="text-white" />}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="mt-8">Home</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <AdminDashboardCard
          title="Tickets"
          tickets={tickets.length}
          icon={<FaTicket size={21} className="text-white" />}
        />
      </div>
    </div>
  );
}
