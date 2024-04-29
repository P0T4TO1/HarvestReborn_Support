"use client";

import { FC, useContext } from "react";
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
import { FaBoxOpen, FaRegUserCircle } from "react-icons/fa";
import {
  MdOutlineDashboard,
  MdOutlineInventory2,
  MdOutlineLogin,
  MdOutlineLogout,
  MdOutlinePersonAdd,
  MdOutlineSettings,
} from "react-icons/md";

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
        <DropdownMenu>
          <DropdownSection>
            {session ? (
              <>
                <DropdownItem startContent={<MdOutlineDashboard />}>
                  <a href="/dashboard">Dashboard</a>
                </DropdownItem>
                <DropdownItem startContent={<MdOutlineInventory2 />}>
                  <a href="/inventory">Inventory</a>
                </DropdownItem>
                <DropdownItem startContent={<MdOutlineSettings />}>
                  <a href="/settings">Settings</a>
                </DropdownItem>
                <DropdownItem
                  startContent={<MdOutlineLogout />}
                  onClick={async () => {
                    await signOut();
                    showToast("Signed out successfully", SUCCESS_TOAST);
                  }}
                >
                  Sign Out
                </DropdownItem>
              </>
            ) : (
              <>
                <DropdownItem startContent={<MdOutlineLogin />}>
                  <a href="/auth/login">Sign In</a>
                </DropdownItem>
                <DropdownItem startContent={<MdOutlinePersonAdd />}>
                  <a href="/auth/register">Register</a>
                </DropdownItem>
              </>
            )}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
