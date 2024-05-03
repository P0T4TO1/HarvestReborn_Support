import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions";
import { NavbarComponent, Footer } from "@/components";

export default async function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const session = await getServerSession(authOptions);
  if (!session) redirect(`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`);
  if (session.user.id_rol === 5) redirect("/dashboard");
  if (session.user.id_rol === 1) redirect("/dashboard/admin");

  return (
    <>
      <NavbarComponent />
      {children}
      <Footer />
    </>
  );
}
