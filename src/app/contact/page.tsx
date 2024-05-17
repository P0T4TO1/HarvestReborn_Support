import { ContactForm, NavbarComponent, Footer } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { Button, Link } from "@nextui-org/react";

export default async function Contact() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <>
        <NavbarComponent />
        <section className="min-h-screen flex items-center">
          <div className="container max-w-xl mx-auto">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Contacta al soporte</h1>
              <p>
                Si tienes una cuenta, inicia sesión primero. Solo podemos
                ofrecer asistencia a la cuenta en la que has iniciado sesión.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Button
                as={Link}
                href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`}
                color="primary"
                className="w-full"
                size="lg"
              >
                Iniciar sesión
              </Button>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href={"/contact/guest"}
                showAnchorIcon
                color="foreground"
                underline="hover"
              >
                No puedo iniciar sesión o no tengo una cuenta
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavbarComponent />
      <section className="min-h-screen flex items-center">
        <div className="container max-w-xl mx-auto">
          <div className="text-center my-6">
            <h1 className="text-2xl font-bold mb-4">Contacta al soporte</h1>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
