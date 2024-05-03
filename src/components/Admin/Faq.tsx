"use client";

import { Breadcrumbs, BreadcrumbItem, Link, Button } from "@nextui-org/react";
import { FaHome, FaPlusCircle } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { TableFaq } from "@/components";

import { IPreguntas } from "@/interfaces";

interface FaqProps {
  questions: IPreguntas[];
}

export const Faq = ({ questions }: FaqProps) => {
  return (
    <div className="my-10 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <Breadcrumbs size="lg">
        <BreadcrumbItem
          href={"/dashboard/admin"}
          startContent={<FaHome size={25} />}
        >
          Home
        </BreadcrumbItem>
        <BreadcrumbItem
          href={"/dashboard/admin/faqs"}
          startContent={<FaUserGroup size={25} />}
        >
          Preguntas frecuentes
        </BreadcrumbItem>
        <BreadcrumbItem>Listado</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex flex-row gap-3.5 flex-wrap">
          <Link href={"/dashboard/admin/faqs/add"}>
            <Button
              color="primary"
              variant="faded"
              startContent={<FaPlusCircle size={24} />}
            >
              Agregar pregunta
            </Button>
          </Link>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableFaq questions={questions} />
      </div>
    </div>
  );
};
