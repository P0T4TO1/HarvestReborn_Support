"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { UiProvider } from "@/context/ui";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class">
          <UiProvider>{children}</UiProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
};

export default Providers;
