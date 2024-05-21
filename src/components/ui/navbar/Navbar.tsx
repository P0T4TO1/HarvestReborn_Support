"use client";

import React, { useContext } from "react";
import { DropdownComponent, DarkModeSwitch } from "@/components";
import { UiContext } from "@/context/ui";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const { toggleSideMenu } = useContext(UiContext);

  return (
    <div className="relative flex flex-col flex-1 overflow-y-hidden overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <button onClick={toggleSideMenu} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </NavbarContent>
        <NavbarContent className="w-full max-md:hidden">
          <NavbarItem>
            <Link href={"/"} color="foreground">
              Inicio
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
        >
          <DarkModeSwitch />
          <NavbarContent>
            <DropdownComponent />
          </NavbarContent>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
