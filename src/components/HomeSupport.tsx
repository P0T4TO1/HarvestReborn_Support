"use client";

import React from "react";
import { HeroSection, Questions, ContactCard } from "./Landing";
import { IPreguntas } from "@/interfaces";

interface Props {
  name?: string;
  questions: IPreguntas[];
}

export const HomeSupport = ({ name, questions }: Props) => {
  return (
    <>
      <HeroSection name={name} />
      <Questions preguntas={questions} />
      <ContactCard />
    </>
  );
};
