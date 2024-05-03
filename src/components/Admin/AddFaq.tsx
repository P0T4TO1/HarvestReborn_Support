"use client";

import React, { useState } from "react";

import { Input, Button, Select, SelectItem } from "@nextui-org/react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { faqSchema } from "@/validations/faq.validations";

import { TipoPregunta } from "@/interfaces";

interface IFormData {
  pregunta: string;
  respuesta: string;
  tipo: TipoPregunta;
}

export const AddFaq = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: zodResolver(faqSchema),
  });

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    setLoading(true);
    console.log(data);
    setLoading(false);
  };

  return (
    <div>
      <h1>Agregar FAQ</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Pregunta"
          {...register("pregunta")}
          isInvalid={!!errors.pregunta}
          errorMessage={errors.pregunta?.message?.toString()}
        />
        <Input
          label="Respuesta"
          {...register("respuesta")}
          isInvalid={!!errors.respuesta}
          errorMessage={errors.respuesta?.message?.toString()}
        />
        <Select
          label="Tipo"
          isInvalid={!!errors.tipo}
          errorMessage={errors.tipo?.message?.toString()}
          {...register("tipo")}
        >
          {Object.values(TipoPregunta).map((tipo) => (
            <SelectItem key={tipo} value={tipo}>
              {tipo}
            </SelectItem>
          ))}
        </Select>
        <Button isLoading={loading} type="submit">
          Guardar
        </Button>
      </form>
    </div>
  );
};
