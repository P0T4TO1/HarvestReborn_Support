import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions";
import { ReactNode } from "react";

export default async function AdminSupportLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session?.user.id_rol === 1 || session?.user.id_rol === 6) {
    return <>{children}</>;
  } else {
    return redirect("/");
  }
}
