"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaQuestion } from "react-icons/fa";
import { IPreguntas } from "@/interfaces";

interface Props {
  preguntas: IPreguntas[];
}

export const Questions: React.FC<Props> = ({ preguntas }) => {
  return (
    <section className="mt-10 min-h-screen">
      <h2 className="text-2xl font-bold text-center">Preguntas frecuentes</h2>
      <div className="m-auto max-w-2xl mt-10">
        <Accordion>
          {preguntas.map((pregunta) => (
            <AccordionItem
              key={pregunta.id_prefrec}
              title={pregunta.pregunta}
              startContent={<FaQuestion size={21} />}
            >
              {pregunta.respuestas.map((res, index) => (
                <p key={index} className="text-default-600">
                  {res.respuesta}
                </p>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
