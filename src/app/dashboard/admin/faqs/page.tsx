import { getQuestions } from '@/actions/questions';
import { Faq, AdminDashboardCard } from '@/components';
import { FaTicket } from 'react-icons/fa6';

const AdminFaqPage = async () => {
  const questions = await getQuestions();

  if (!questions)
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

  return (
    <>
      <Faq questions={questions} />
    </>
  );
};

export default AdminFaqPage;
