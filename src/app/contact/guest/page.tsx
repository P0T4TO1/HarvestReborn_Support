import { NavbarComponent, Footer, ContactGuestForm } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import { FaExclamation } from "react-icons/fa";

export default async function ContactGuest() {
  const session = await getServerSession(authOptions);
  if (session?.user.id_rol === 4)
    redirect(`${process.env.NEXT_PUBLIC_APP_URL}/auth/register?oauth=true`);
  if (session) redirect("/contact");

  return (
    <>
      <NavbarComponent />
      <section className="min-h-screen flex items-center">
        <div className="container max-w-xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold">Contactar como invitado</h1>
            <div className="flex items-center justify-center gap-2 my-8">
              <FaExclamation size={20} className="text-red-500" />
              <p>
                Este formulario es solo para asuntos realacionados con problemas
                sobre el acceso a tu cuenta.
              </p>
            </div>
            <ContactGuestForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
