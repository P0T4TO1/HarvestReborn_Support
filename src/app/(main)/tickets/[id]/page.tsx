import { Ticket } from "@/components";
import { getTicketById } from "@/actions/tickets";

interface Props {
  params: {
    id: string;
  };
}

const TicketPage = async ({ params }: Props) => {
  const { id } = params;

  const ticket = await getTicketById(id);

  if (!ticket) {
    return <div>El ticket no existe</div>;
  }

  return (
    <section className="w-full flex flex-col gap-5 pt-16 md:flex-row min-h-screen">
      <Ticket ticket={ticket} />
    </section>
  );
};

export default TicketPage;