"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Input, Textarea, Select, SelectItem, Button } from "@nextui-org/react";
import { toast } from "sonner";
import { SUCCESS_TOAST, DANGER_TOAST } from "../ui";

import { Tipo, TipoPregunta } from "@/interfaces";
import { hrSupportApi } from "@/api";

import { useForm, SubmitHandler, set } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactGuestSchema } from "@/validations";

const TipoOptions = [
  { name: "Incidencia", uid: Tipo.INCIDENCIA },
  { name: "Petición", uid: Tipo.PETICION },
  { name: "Queja", uid: Tipo.QUEJA },
  { name: "Reclamación", uid: Tipo.RECLAMACION },
];

const AreaOptions = [
  { name: "Problemas Técnicos", uid: TipoPregunta.TECNICO },
  { name: "Chat", uid: TipoPregunta.CHAT },
  { name: "Cuenta de cliente", uid: TipoPregunta.CLIENTE },
  { name: "Mi negocio", uid: TipoPregunta.NEGOCIO },
  { name: "Cuenta de negocio", uid: TipoPregunta.DUENONEGOCIO },
  { name: "Ordenes", uid: TipoPregunta.ORDENES },
  { name: "Productos", uid: TipoPregunta.PRODUCTOS },
  { name: "Inventario", uid: TipoPregunta.INVENTARIO },
  { name: "Publicaciones", uid: TipoPregunta.PUBLICACIONES },
];

interface ContactFormData {
  email: string;
  tipo: Tipo;
  motivo: string;
  descripcion: string;
}

export const ContactGuestForm = () => {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactGuestSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      await hrSupportApi
        .post("/ticket/guest", {
          ...data,
        })
        .then(() => {
          toast("Ticket creado", SUCCESS_TOAST);
          setLoading(false);
          reset();
          clearErrors();
          setShowMessage(true);
        })
        .catch((error) => {
          console.error(error);
          toast("Error al crear ticket", DANGER_TOAST);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {showMessage && (
        <div
          className="bg-green-400 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
          role="alert"
        >
          <span className="block sm:inline">
            Hemos recibido tu ticket, te enviaremos un correo con la respuesta a
            la brevedad posible
          </span>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <Input label="Email" {...register("email")} />
          {errors.email && (
            <span role="alert" className="text-sm text-red-600">
              {errors.email.message?.toString()}
            </span>
          )}
        </div>
        <div>
          <Select label="Tipo" {...register("tipo")}>
            {TipoOptions.map((tipo) => (
              <SelectItem key={tipo.uid} value={tipo.uid}>
                {tipo.name}
              </SelectItem>
            ))}
          </Select>
          {errors.tipo && (
            <span role="alert" className="text-sm text-red-600">
              {errors.tipo.message?.toString()}
            </span>
          )}
        </div>
        <div>
          <Input label="Motivo" {...register("motivo")} />
          {errors.motivo && (
            <span role="alert" className="text-sm text-red-600">
              {errors.motivo.message?.toString()}
            </span>
          )}
        </div>
        <div>
          <Textarea label="Descripcion" {...register("descripcion")} />
          {errors.descripcion && (
            <span role="alert" className="text-sm text-red-600">
              {errors.descripcion.message?.toString()}
            </span>
          )}
        </div>

        <Button type="submit" isLoading={loading}>
          Crear Ticket
        </Button>
      </form>
    </>
  );
};
