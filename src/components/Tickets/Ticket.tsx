"use client";

import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Divider,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import {
  TicketAnswer,
  TicketAnswers,
  SUCCESS_TOAST,
  DANGER_TOAST,
} from "@/components";
import { hrSupportApi } from "@/api";
import { toast } from "sonner";

import { ITicket, EstadoTicket } from "@/interfaces";

interface Props {
  ticket: ITicket;
}

export const Ticket = ({ ticket }: Props) => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(false);

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

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h1>¿Estás seguro de cerrar el ticket?</h1>
                <p>Una vez cerrado no se podrá volver a abrir</p>
                <div className="flex gap-4 mt-4">
                  <Button
                    size="sm"
                    color="danger"
                    onPress={() => {
                      onChangeStatus(EstadoTicket.CERRADO);
                    }}
                    isLoading={isLoading}
                  >
                    Cerrar ticket
                  </Button>
                  <Button
                    size="sm"
                    variant="light"
                    onPress={() => {
                      onClose();
                    }}
                    isDisabled={isLoading}
                  >
                    Cancelar
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <section className="container mx-auto mt-8 w-full">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl">{ticket.motivo}</h1>
            <div className="flex gap-4">
              <p>Ticket #{ticket.id_ticket} - </p>
              <p>Estado: {ticket.estado} - </p>
              <p>
                Creado el:{" "}
                {new Date(ticket.fecha_inicio.toString()).toLocaleDateString(
                  "es-MX",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  }
                )}
              </p>
            </div>
          </div>
          <Button
            size="md"
            variant="bordered"
            radius="sm"
            onPress={() => onOpen()}
            isLoading={isLoading}
          >
            Cerrar ticket
          </Button>
        </div>

        <div className="mt-4">
          <Card
            className="p-4"
            shadow="none"
            classNames={{
              base: "border dark:border-gray-600 border-gray-300",
            }}
          >
            <CardHeader>Respuesta</CardHeader>
            <Divider />
            <CardBody>
              <div className="w-full md:w-1/2 lg:w-1/4">
                <TicketAnswer ticket={ticket} />
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="mt-4">
          <Card
            className="p-4"
            shadow="none"
            classNames={{
              base: "border dark:border-gray-600 border-gray-300",
            }}
          >
            <CardHeader>Historial</CardHeader>
            <Divider />
            <CardBody>
              <>
                {!ticket.respuestas ? (
                  <p>No hay respuestas</p>
                ) : (
                  ticket.respuestas.map((answer) => (
                    <div key={answer.id_respuesta} className="w-full">
                      <TicketAnswers answer={answer} />
                      <Divider className="my-4" />
                    </div>
                  ))
                )}
              </>
            </CardBody>
          </Card>
        </div>
      </section>{" "}
    </>
  );
};
