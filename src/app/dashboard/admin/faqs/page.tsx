import { getQuestions } from "@/actions/questions";
import { Faq } from "@/components";

const AdminFaqPage = async () => {
  const questions = await getQuestions();

  return (
    <>
      <Faq questions={questions} />
    </>
  );
};

export default AdminFaqPage;
