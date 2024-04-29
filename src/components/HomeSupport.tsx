"use client";

import React, { useState, useEffect } from "react";
import { CircularProgress } from "@nextui-org/react";
import { FaHome } from "react-icons/fa";

export const HomeDashboard = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="my-10 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
          <FaHome size={25} />
          <span>Home</span>
        </li>
      </ul>
    </div>
  );
};
