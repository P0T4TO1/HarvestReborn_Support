"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import {
  Button,
  Input,
  Textarea,
  DatePicker,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { toast } from "sonner";
import { SUCCESS_TOAST, DANGER_TOAST } from "../toast";

import { updateTicketSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { hrSupportApi } from "@/api";
import { getLocalTimeZone, parseDate } from "@internationalized/date";

import {
  ITicket,
  Tipo,
  TipoPregunta as Area,
  EstadoTicket,
  Prioridad,
} from "@/interfaces";

interface Props {
  ticket: ITicket;
  children?: React.ReactNode;
}

interface IFormData {
  tipo: string;
  prioridad: string;
  area: string;
  estado: string;
  fecha_inicio: Date;
  fecha_cierre?: Date;
  motivo: string;
  descripcion: string;
}

export const SettingsTicketForm = ({ ticket, children }: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: zodResolver(updateTicketSchema),
    defaultValues: {
      tipo: ticket.tipo,
      prioridad: ticket.prioridad,
      area: ticket.area,
      estado: ticket.estado,
      fecha_inicio: new Date(ticket.fecha_inicio.toString()),
      fecha_cierre: ticket.fecha_cierre
        ? new Date(ticket.fecha_cierre.toString())
        : undefined,
      motivo: ticket.motivo,
      descripcion: ticket.descripcion,
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setIsLoading(true);
    hrSupportApi
      .put(`/ticket/admin/${ticket.id_ticket}`, data)
      .then(() => {
        setIsLoading(false);
        toast("Ticket actualizado", SUCCESS_TOAST);
        window.location.reload();
      })
      .catch(() => {
        toast("Ocurrió un error al actualizar el ticket", DANGER_TOAST);
        setIsLoading(false);
      });
  };

  const onChangeStatus = (value: string) => {
    setIsLoading(true);
    hrSupportApi
      .put(`/ticket/admin/status/${ticket.id_ticket}`, {
        estado: value,
      })
      .then(() => {
        setIsLoading(false);
        toast("Estado actualizado", SUCCESS_TOAST);
        window.location.reload();
      })
      .catch(() => {
        toast("Ocurrió un error al actualizar el estado", DANGER_TOAST);
        setIsLoading(false);
      });
  };

  const onDelete = () => {
    setIsLoading(true);
    hrSupportApi
      .delete(`/ticket/admin/${ticket.id_ticket}`)
      .then(() => {
        setIsLoading(false);
        toast("Ticket eliminado", SUCCESS_TOAST);
        if (session?.user.id_rol === 1 || session?.user.id_rol === 6) {
          return router.push("dashboard/admin/tickets");
        }
        return router.push("/dashboard/tickets");
      })
      .catch(() => {
        toast("Ocurrió un error al eliminar el ticket", DANGER_TOAST);
        setIsLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="container mx-auto flex justify-between items-center">
          <h1>Ticket: {ticket.id_ticket}</h1>
          <div className="flex gap-4">
            <Button
              size="md"
              variant="bordered"
              radius="sm"
              type="submit"
              isLoading={isLoading}
            >
              Actualizar
            </Button>
            {ticket.estado === EstadoTicket.CERRADO ? (
              <Button
                size="md"
                variant="bordered"
                radius="sm"
                onPress={() => onChangeStatus(EstadoTicket.ABIERTO)}
                isLoading={isLoading}
              >
                Reabrir
              </Button>
            ) : (
              <Button
                size="md"
                variant="bordered"
                radius="sm"
                onPress={() => onChangeStatus(EstadoTicket.CERRADO)}
                isLoading={isLoading}
              >
                Resuelto
              </Button>
            )}
            <Button
              size="md"
              variant="bordered"
              radius="sm"
              isLoading={isLoading}
              onPress={() => onDelete()}
            >
              Eliminar
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto mt-6">
          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <div className="w-4/5 pr-10 flex items-center justify-end">
                <label>ID</label>
              </div>
              <Input
                aria-label="ID"
                isDisabled
                defaultValue={ticket.id_ticket}
              />
            </div>

            <div className="flex gap-6">
              <div className="w-4/5 pr-10 flex items-center justify-end">
                <label>Tipo</label>
              </div>
              <div className="w-full">
                <Select
                  defaultSelectedKeys={[ticket.tipo]}
                  {...register("tipo")}
                >
                  {Object.values(Tipo).map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>
                      {tipo}
                    </SelectItem>
                  ))}
                </Select>
                {errors.tipo && (
                  <span className="text-red-500">{errors.tipo.message}</span>
                )}
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-4/5 pr-10 flex items-center justify-end">
                <label>Prioridad</label>
              </div>
              <div className="w-full">
                <Select
                  defaultSelectedKeys={[ticket.prioridad]}
                  {...register("prioridad")}
                >
                  {Object.values(Prioridad).map((prioridad) => (
                    <SelectItem key={prioridad} value={prioridad}>
                      {prioridad}
                    </SelectItem>
                  ))}
                </Select>
                {errors.prioridad && (
                  <span className="text-red-500">
                    {errors.prioridad.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-4/5 pr-10 flex items-center justify-end">
                <label>Área</label>
              </div>
              <div className="w-full">
                <Select
                  defaultSelectedKeys={[ticket.area]}
                  {...register("area")}
                >
                  {Object.values(Area).map((area) => (
                    <SelectItem key={area} value={area}>
                      {area}
                    </SelectItem>
                  ))}
                </Select>
                {errors.area && (
                  <span className="text-red-500">{errors.area.message}</span>
                )}
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-4/5 pr-10 flex items-center justify-end">
                <label>Estado</label>
              </div>
              <div className="w-full">
                <Select
                  defaultSelectedKeys={[ticket.estado]}
                  {...register("estado")}
                >
                  {Object.values(EstadoTicket).map((estado) => (
                    <SelectItem key={estado} value={estado}>
                      {estado}
                    </SelectItem>
                  ))}
                </Select>
                {errors.estado && (
                  <span className="text-red-500">{errors.estado.message}</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <div className="w-4/5 pr-10 flex items-center justify-end">
                <label>Fecha de apertura</label>
              </div>
              <div className="w-full">
                <DatePicker
                  defaultValue={parseDate(
                    ticket.fecha_inicio.toString().split("T")[0]
                  )}
                  showMonthAndYearPickers
                  onChange={(date) => {
                    setValue("fecha_inicio", date.toDate(getLocalTimeZone()));
                  }}
                />
                {errors.fecha_inicio && (
                  <span className="text-red-500">
                    {errors.fecha_inicio.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-4/5 pr-10 flex items-center justify-end">
                <label>Fecha de cierre</label>
              </div>
              <div className="w-full">
                <DatePicker
                  defaultValue={
                    ticket.fecha_cierre
                      ? parseDate(ticket.fecha_cierre.toString().split("T")[0])
                      : null
                  }
                  showMonthAndYearPickers
                  onChange={(date) => {
                    setValue("fecha_cierre", date.toDate(getLocalTimeZone()));
                  }}
                />
                {errors.fecha_cierre && (
                  <span className="text-red-500">
                    {errors.fecha_cierre.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-4/5 pr-10 flex items-center justify-end">
                <label>Usuario</label>
              </div>
              {ticket.user ? (
                <Input
                  aria-label="Usuario"
                  isDisabled
                  defaultValue={ticket.user.nombre}
                />
              ) : (
                <Input
                  aria-label="Usuario"
                  isDisabled
                  defaultValue={ticket.email}
                />
              )}
            </div>

            <div className="flex gap-6">
              <div className="w-4/5 pr-10 flex items-center justify-end">
                <label>Email del usuario</label>
              </div>
              {ticket.user ? (
                <Input
                  aria-label="Email del usuario"
                  isDisabled
                  defaultValue={ticket.user.email}
                />
              ) : (
                <Input
                  aria-label="Email"
                  isDisabled
                  defaultValue={ticket.email}
                />
              )}
            </div>

            {children}
          </div>
        </div>
        <div className="container mx-auto mt-8 flex flex-col gap-4">
          <div className="flex gap-6">
            <div className="w-1/5 pr-10 flex items-center justify-end">
              <label>Motivo</label>
            </div>
            <div className="w-full">
              <Input
                aria-label="Motivo"
                defaultValue={ticket.motivo}
                {...register("motivo")}
              />
              {errors.motivo && (
                <span className="text-red-500">{errors.motivo.message}</span>
              )}
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-1/5 pr-10 flex items-center justify-end">
              <label>Descripción</label>
            </div>
            <div className="w-full">
              <Textarea
                aria-label="Descripción"
                defaultValue={ticket.descripcion}
                rows={5}
                {...register("descripcion")}
              />
              {errors.descripcion && (
                <span className="text-red-500">
                  {errors.descripcion.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
