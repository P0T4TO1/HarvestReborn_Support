"use client";

import React, { useContext, useState } from "react";
import { DropdownComponent, DarkModeSwitch } from "@/components";
import { useSession } from "next-auth/react";
import { UiContext } from "@/context/ui";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Badge,
  Image,
  Button,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { FaShoppingBag } from "react-icons/fa";

export const NavbarComponent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const { toggleSideMenu } = useContext(UiContext);
  const { resolvedTheme } = useNextTheme();

  return (
    <>
      <Navbar
        onMenuOpenChange={setMobileMenuOpen}
        isBordered
        className="fixed"
        maxWidth="xl"
      >
        <NavbarContent>
          <NavbarItem>
            <NavbarMenuToggle />
          </NavbarItem>
          <NavbarBrand>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={40}
                loading="lazy"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>
      </Navbar>
    </>
  );
};
