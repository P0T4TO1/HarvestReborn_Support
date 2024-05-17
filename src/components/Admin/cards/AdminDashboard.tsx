"use client";

import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";

interface AdminDashboardCardProps {
  tickets: number;
  title: string;
  icon: React.ReactNode;
}

export const AdminDashboardCard = ({ tickets, title, icon }: AdminDashboardCardProps) => {
  return (
    <Card className="xl:max-w-sm bg-primary rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          {icon}
          <div className="flex flex-col">
            <span className="text-white">{title}</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">{tickets}</span>
        </div>
      </CardBody>
    </Card>
  );
};
