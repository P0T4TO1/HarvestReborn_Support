"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Input, Textarea, Select, SelectItem, Button } from "@nextui-org/react";
import { toast } from "sonner";
import { SUCCESS_TOAST, DANGER_TOAST } from "../ui";

import { Tipo, TipoPregunta } from "@/interfaces";
import { hrSupportApi } from "@/api";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/validations";

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
  tipo: Tipo;
  area: TipoPregunta;
  motivo: string;
  descripcion: string;
}

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setLoading(true);
    console.log(data);
    if (!session?.user?.id) {
      toast("Usuario no encontrado", DANGER_TOAST);
      return;
    }
    try {
      await hrSupportApi
        .post("/ticket", {
          ...data,
          id_user: session.user.id,
        })
        .then(() => {
          toast("Ticket creado", SUCCESS_TOAST);
          router.push("/my-tickets");
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
        <Select label="Area" {...register("area")}>
          {AreaOptions.map((area) => (
            <SelectItem key={area.uid} value={area.uid}>
              {area.name}
            </SelectItem>
          ))}
        </Select>
        {errors.area && (
          <span role="alert" className="text-sm text-red-600">
            {errors.area.message?.toString()}
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

      <Button type="submit" isLoading={loading}>Crear Ticket</Button>
    </form>
  );
};
