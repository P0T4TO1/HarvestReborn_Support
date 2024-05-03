"use client";

import React, { useState, useCallback, useMemo } from "react";

import { ITicket, EstadoTicket } from "@/interfaces";

import {
  Card,
  CardFooter,
  CardBody,
  CardHeader,
  Link,
  Button,
  Chip,
  ChipProps,
  Divider,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

const statusColorMap = {
  ABIERTO: "success",
  CERRADO: "danger",
  EN_PROCESO: "primary",
};

interface OrdersClienteProps {
  tickets: ITicket[];
}

export const MyTickets = ({ tickets }: OrdersClienteProps) => {
  const [filterValue, setFilterValue] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const hasSearchFilter = Boolean(searchValue);

  const filteredItems = useMemo(() => {
    let filteredOrders = [...tickets];

    if (hasSearchFilter) {
      filteredOrders = filteredOrders.filter((ticket) =>
        ticket.id_ticket
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      );
    }
    // if (filterValue !== "all") {
    //   filteredOrders = filteredOrders.filter(
    //     (ticket) =>
    //         ticket.estado_orden === (filterValue.toUpperCase() as EstadoOrden)
    //   );
    // }

    return filteredOrders;
  }, [tickets, searchValue, hasSearchFilter]);

  const itemsToDisplay = useMemo(() => {
    return filteredItems;
  }, [filteredItems]);

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setSearchValue(value);
    } else {
      setSearchValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setSearchValue("");
  }, []);

  return (
    <section className="w-full flex flex-col gap-5 pt-16 md:flex-row min-h-screen">
      <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 m-auto">
        <div className="w-full pb-8 mt-8 sm:rounded-lg">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-black flex flex-col leading-none dark:text-green-600 text-green-900">
              Mis tickets
            </h1>
            <div className="flex items-center justify-between">
              <Input
                isClearable
                area-label="Buscar productos"
                className="w-full"
                placeholder="Buscar por id ticket..."
                startContent={<FaSearch size={20} />}
                value={searchValue}
                onClear={() => onClear()}
                onValueChange={onSearchChange}
              />
            </div>
          </div>

          <div className="mt-6">
            {itemsToDisplay.map((ticket) => (
              <Card
                key={ticket.id_ticket}
                className="p-4 mt-6"
                aria-label="card-order-cliente"
              >
                <CardHeader className="flex justify-between">
                  <div className="flex items-center justify-center">
                    <Chip variant="flat" size="lg">
                      Ticket:{" "}
                      <span className="text-blue-600">#{ticket.id_ticket}</span>
                    </Chip>
                    <p className="ml-2 hidden lg:block">
                      Fecha:{" "}
                      {new Date(ticket.fecha_inicio).toLocaleDateString(
                        "es-ES",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Link href={`/tickets/${ticket.id_ticket}`}>
                      <Button color="success" variant="ghost">
                        Ver ticket
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className="block lg:hidden">
                    Fecha:{" "}
                    {new Date(ticket.fecha_inicio).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <div className="flex flex-col gap-4">
                    <p className="mt-4">
                      <strong>Area:</strong> {ticket.area}
                    </p>
                    <p>
                      <strong>Motivo:</strong> {ticket.motivo}
                    </p>
                    <p>
                      <strong>Descripcion:</strong> {ticket.descripcion}
                    </p>
                  </div>
                </CardBody>
                <Divider />
                <CardFooter className="flex justify-between">
                  <Chip
                    variant="flat"
                    color={
                      statusColorMap[
                        ticket.estado as keyof typeof statusColorMap
                      ] as ChipProps["color"]
                    }
                  >
                    {ticket.estado}
                  </Chip>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
