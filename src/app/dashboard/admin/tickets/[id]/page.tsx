import { getTicketByIdForAdmin, getUsersSupport } from "@/actions/tickets";
import { TicketSettings } from "@/components";

interface TicketAdminPageProps {
  params: {
    id: string;
  };
}

export default async function TicketAdminPage({
  params,
}: TicketAdminPageProps) {
  const { id } = params;
  const ticket = await getTicketByIdForAdmin(id);
  const users = await getUsersSupport();

  if (!ticket) {
    return (
      <div className="container mx-auto">
        <h3 className="text-xl font-semibold mt-8">Ticket</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          No ticket found
        </div>
      </div>
    );
  }

  if (!users) {
    return <TicketSettings ticket={ticket} users={[]} />;
  }

  return <TicketSettings ticket={ticket} users={users} />;
}
