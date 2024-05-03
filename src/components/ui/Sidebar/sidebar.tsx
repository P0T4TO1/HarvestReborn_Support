"use client";

import React, { useContext } from "react";
import { UiContext } from "@/context/ui";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import { Image } from "@nextui-org/react";
import { SidebarMenu, SidebarItem } from "@/components";
import { Sidebar } from "./sidebar.styles";
import { MdOutlineDashboard, MdOutlineQuiz } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
  const { data: session } = useSession();

  return (
    <aside className="h-screen z-[50] sticky top-0">
      {isMenuOpen ? (
        <div className={Sidebar.Overlay()} onClick={toggleSideMenu} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: isMenuOpen,
        })}
      >
        <div className={Sidebar.Header()}>
          <div className="flex items-center gap-2">
            <Image src={"/images/logo.png"} width={50} height={50} alt="Logo" />
            <h3 className="text-xl font-medium m-0 text-default-900 -mb-4 whitespace-nowrap">
              Dashboard
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<MdOutlineDashboard size={24} />}
              isActive={
                pathname === "/dashboard/admin" || pathname === "/dashboard"
              }
              href={
                session?.user.id_rol === 1 ? "/dashboard/admin" : "/dashboard"
              }
            />
            <SidebarMenu title={"Menu Principal"}>
              <SidebarItem
                title="Tickets"
                icon={<FaTicket size={24} />}
                href={
                  session?.user.id_rol === 1
                    ? "/dashboard/admin/tickets"
                    : "/dashboard/tickets"
                }
              />
              {session?.user.id_rol === 1 && (
                <SidebarItem
                  title="Preguntas Frecuentes"
                  icon={<MdOutlineQuiz size={24} />}
                  href="/dashboard/admin/faqs"
                />
              )}
            </SidebarMenu>
            {session?.user.id_rol === 1 && (
              <SidebarMenu title="App Principal">
                <SidebarItem
                  title="Home"
                  icon={<MdOutlineDashboard size={24} />}
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/admin/dashboard`}
                />
              </SidebarMenu>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
