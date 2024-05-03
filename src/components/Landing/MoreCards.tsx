"use client";

import React from "react";
import { Card, CardBody, Chip, Link } from "@nextui-org/react";
import { FaRegQuestionCircle } from "react-icons/fa";

export const ContactCard = () => {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-center">¿Aún necesitas ayuda?</h2>
      <div className="flex justify-center mt-4 max-w-72 m-auto">
        <Link href="/contact">
          <Card
            aria-label="Negocio"
            shadow="none"
            className="p-4 w-full"
            classNames={{
              base: "border border-gray-300",
            }}
          >
            <CardBody className="overflow-visible px-5 pb-2">
              <div className="flex flex-col items-center justify-between">
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold">
                    Contacta con nosotros
                  </h3>
                  <Chip
                    color="primary"
                    variant="flat"
                    classNames={{
                      base: "h-11 w-11 flex items-center justify-center",
                    }}
                  >
                    <FaRegQuestionCircle size={20} />
                  </Chip>
                </div>
                <p className="text-sm text-default-500">
                  Si tienes alguna duda o problema, no dudes en contactarnos.
                </p>
              </div>
            </CardBody>
          </Card>
        </Link>
      </div>
    </section>
  );
};
