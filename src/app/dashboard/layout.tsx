import { SidebarWrapper, NavbarWrapper } from "@/components";
import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions";

export default async function SupportLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect(`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`);
    
  return (
    <div className="flex">
      <SidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </div>
  );
}
