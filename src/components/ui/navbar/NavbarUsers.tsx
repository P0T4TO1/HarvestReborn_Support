"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  Image,
} from "@nextui-org/react";
import { DropdownComponent, DarkModeSwitch } from "@/components";

export const NavbarComponent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <Navbar
        onMenuOpenChange={setMobileMenuOpen}
        isBordered
        className="fixed"
        maxWidth="xl"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand
            onClick={() => {
              router.push("/");
            }}
            className="cursor-pointer flex items-center gap-2"
          >
            <Image
              src="/images/logo.png"
              alt="Harvest Reborn"
              width={40}
              height={40}
            />
            <p>
              Harvest Reborn <strong>Asistencia</strong>
            </p>
          </NavbarBrand>
        </NavbarContent>
        {session ? (
          <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <NavbarItem>
              <Link href="/my-tickets" color="foreground">
                Mis Tickets
              </Link>
            </NavbarItem>
            <NavbarItem>
              <DarkModeSwitch />
            </NavbarItem>
            <NavbarItem>
              <DropdownComponent />
            </NavbarItem>
          </NavbarContent>
        ) : (
          <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <NavbarItem>
              <DarkModeSwitch />
            </NavbarItem>
            <NavbarItem>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`}
                color="foreground"
              >
                Iniciar sesión
              </Link>
            </NavbarItem>
          </NavbarContent>
        )}
      </Navbar>
    </>
  );
};
