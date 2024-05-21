import { NextRequest, NextResponse } from "next/server";
import prisma2 from "@/lib/prisma-second";

async function getAllUsersSupport(req: NextRequest) {
  const users = await prisma2.m_user.findMany({
    where: {
      id_rol: 5,
    },
    include: {
      cliente: {
        select: {
          nombre_cliente: true,
          apellidos_cliente: true,
        },
      },
      duenonegocio: {
        select: {
          nombre_dueneg: true,
          apellidos_dueneg: true,
        },
      },
    },
  });

  const usersObjectConverted = users.map((user) => {
    return {
      id: user.id,
      nombre:
        user.cliente?.nombre_cliente ?? user.duenonegocio?.nombre_dueneg ?? "",
      apellidos:
        user.cliente?.apellidos_cliente ??
        user.duenonegocio?.apellidos_dueneg ??
        "",
      email: user.email,
    };
  });

  return NextResponse.json(usersObjectConverted, { status: 200 });
}

export { getAllUsersSupport as GET };
