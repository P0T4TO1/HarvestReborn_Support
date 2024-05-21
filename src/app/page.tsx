import { HomeSupport, NavbarComponent, Footer } from "@/components";
import prisma2 from "@/lib/prisma-second";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions";
import { getQuestions } from "@/actions/questions";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const questions = await getQuestions();

  if (session?.user.id_rol === 5) redirect("/dashboard");
  if (session?.user.id_rol === 4)
    redirect(`${process.env.NEXT_PUBLIC_APP_URL}/auth/register?oauth=true`);
  if (session?.user.id_rol === 1 || session?.user.id_rol === 6)
    redirect("/dashboard/admin");
  if (session?.user.id_rol === 2) {
    const dueneg = await prisma2.d_duenonegocio.findUnique({
      where: {
        id_user: session.user.id,
      },
      select: {
        nombre_dueneg: true,
      },
    });

    return (
      <>
        <NavbarComponent />
        <HomeSupport name={dueneg?.nombre_dueneg ?? ""} questions={questions} />
        <Footer />
      </>
    );
  }

  if (session?.user.id_rol === 3) {
    const cliente = await prisma2.d_cliente.findUnique({
      where: {
        id_user: session.user.id,
      },
      select: {
        nombre_cliente: true,
      },
    });

    return (
      <>
        <NavbarComponent />
        <HomeSupport
          name={cliente?.nombre_cliente ?? ""}
          questions={questions}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavbarComponent />
      <HomeSupport questions={questions} />
      <Footer />
    </>
  );
}
