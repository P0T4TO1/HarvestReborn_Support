"use client";

import { FC } from "react";
import { useSession, signOut } from "next-auth/react";
import { SUCCESS_TOAST, showToast } from "@/components/ui/toast";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
} from "@nextui-org/react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLogout, MdOutlineSettings } from "react-icons/md";

export const DropdownComponent: FC = () => {
  const { data: session } = useSession();

  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button variant="light" isIconOnly color="default">
            <FaRegUserCircle size={20} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="flat">
          <DropdownSection>
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Inicio sesión como:</p>
              <p className="font-semibold">{session?.user.email}</p>
            </DropdownItem>
            <DropdownItem
              href={`${process.env.NEXT_PUBLIC_APP_URL}/user/profile/${session?.user.id}`}
              key="settings"
              startContent={<MdOutlineSettings size={20} />}
            >
              Cuenta
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={() => {
                signOut().then(async () => {
                  showToast("Logout Successful", SUCCESS_TOAST);
                });
              }}
              startContent={<MdOutlineLogout size={20} />}
            >
              Cerrar sesión
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
