"use client";

import React from "react";
import { Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

interface HeroSectionProps {
  name?: string;
}

export const HeroSection = ({ name }: HeroSectionProps) => {
  return (
    <section className="h-96 flex items-center pt-16">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold tracking-wide uppercase">
            Hola {name} 👋, bienvenido al soporte de Harvest Reborn
          </h2>
          <p className="mt-4 text-2xl font-bold">
            ¿En qué podemos ayudarte hoy?
          </p>
          <Input
            aria-label="Buscar"
            placeholder="Escribe aquí tu pregunta"
            startContent={<FaSearch size={24} />}
            className="mt-6"
          />
        </div>
      </div>
    </section>
  );
};
