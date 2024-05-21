"use client";

import {
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  DatePicker,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { TableModal } from "./TableModal";
import { parseDate, getLocalTimeZone, now } from "@internationalized/date";

import {
  ITicket,
  Tipo,
  TipoPregunta,
  EstadoTicket,
  Prioridad,
  IUser,
} from "@/interfaces";

interface Props {
  ticket: ITicket;
  users: IUser[];
}

export const TicketSettings = ({ ticket, users }: Props) => {
  const { onClose, isOpen, onOpen } = useDisclosure();

  return (
    <>
      <TableModal
        useDisclosure={{ isOpen, onClose }}
        id_ticket={ticket.id_ticket}
        users={users}
      />
      <h1>TicketSettings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto mt-6">
        <div className="flex flex-col gap-4">
          <div className="flex gap-6">
            <div className="w-4/5 pr-10 flex items-center justify-end">
              <label>ID</label>
            </div>
            <Input
              aria-label="Tipo"
              isDisabled
              defaultValue={ticket.id_ticket}
            />
          </div>

          <div className="flex gap-6">
            <div className="w-4/5 pr-10 flex items-center justify-end">
              <label>Tipo</label>
            </div>
            <Select defaultSelectedKeys={[ticket.tipo]}>
              {Object.values(Tipo).map((tipo) => (
                <SelectItem key={tipo} value={tipo}>
                  {tipo}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="flex gap-6">
            <div className="w-4/5 pr-10 flex items-center justify-end">
              <label>Prioridad</label>
            </div>
            <Select defaultSelectedKeys={[ticket.prioridad]}>
              {Object.values(Prioridad).map((prioridad) => (
                <SelectItem key={prioridad} value={prioridad}>
                  {prioridad}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="flex gap-6">
            <div className="w-4/5 pr-10 flex items-center justify-end">
              <label>Área</label>
            </div>
            <Select defaultSelectedKeys={[ticket.area]}>
              {Object.values(TipoPregunta).map((area) => (
                <SelectItem key={area} value={area}>
                  {area}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="flex gap-6">
            <div className="w-4/5 pr-10 flex items-center justify-end">
              <label>Estado</label>
            </div>
            <Select defaultSelectedKeys={[ticket.estado]}>
              {Object.values(EstadoTicket).map((estado) => (
                <SelectItem key={estado} value={estado}>
                  {estado}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-6">
            <div className="w-4/5 pr-10 flex items-center justify-end">
              <label>Fecha de apertura</label>
            </div>
            <DatePicker
              defaultValue={parseDate(
                ticket.fecha_inicio.toString().split("T")[0]
              )}
              showMonthAndYearPickers
            />
          </div>

          <div className="flex gap-6">
            <div className="w-4/5 pr-10 flex items-center justify-end">
              <label>Fecha de cierre</label>
            </div>
            <DatePicker
              defaultValue={
                ticket.fecha_cierre
                  ? parseDate(ticket.fecha_cierre.toString().split("T")[0])
                  : now(getLocalTimeZone())
              }
              showMonthAndYearPickers
            />
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

          <div className="flex gap-6">
            <div className="w-4/5 pr-10 flex items-center justify-end">
              <label>Soporte asignado</label>
            </div>
            {ticket.user_soporte ? (
              <Input
                aria-label="Soporte"
                defaultValue={ticket.user_soporte.nombre}
                endContent={
                  <Button
                    size="sm"
                    variant="light"
                    isIconOnly
                    onPress={() => onOpen()}
                  >
                    <FaSearch size={21} />
                  </Button>
                }
              />
            ) : (
              <Input
                aria-label="Soporte"
                defaultValue="No asignado"
                endContent={
                  <Button
                    size="sm"
                    variant="light"
                    isIconOnly
                    onPress={() => onOpen()}
                  >
                    <FaSearch size={21} />
                  </Button>
                }
              />
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col gap-4">
        <div className="flex gap-6">
          <div className="w-1/5 pr-10 flex items-center justify-end">
            <label>Motivo</label>
          </div>
          <Input aria-label="Motivo" defaultValue={ticket.motivo} />
        </div>

        <div className="flex gap-6">
          <div className="w-1/5 pr-10 flex items-center justify-end">
            <label>Descripción</label>
          </div>
          <Textarea
            aria-label="Descripción"
            defaultValue={ticket.descripcion}
            rows={5}
          />
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <Tabs color="primary">
          <Tab title="Historial">
            <div>
              <h2>Historial</h2>
            </div>
          </Tab>
          <Tab title="Comentarios">
            <div>
              <h2>Comentarios</h2>
            </div>
          </Tab>
          <Tab title="Archivos">
            <div>
              <h2>Archivos</h2>
            </div>
          </Tab>
          <Tab title="Solución">
            <div>
              <h2>Solución</h2>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
