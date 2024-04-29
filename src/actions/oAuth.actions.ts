"use server";

import bcrypt from "bcrypt";
import { client } from "@/database";

export const oAuthToDb = async (
  oAuthEmail: string,
  oAuthName?: string,
  oAuthProviderAccountId?: string,
  oAuthGivenName?: string,
  oAuthFamilyName?: string
) => {
  await client.connect();
  const user = await client.query(
    "SELECT * FROM m_user WHERE email = $1 INNER JOIN duenonegocio ON m_user.id = duenonegocio.id_user INNER JOIN negocio ON duenonegocio.id_negocio = negocio.id INNER JOIN inventario ON negocio.id = inventario.id_negocio INNER JOIN cliente ON m_user.id = cliente.id_user INNER JOIN historial ON cliente.id = historial.id_cliente",
    [oAuthEmail]
  );
  await client.end();

  const [name, lastName] = oAuthName?.split(" ") || ["", ""];

  if (user) {
    const userId = user.rows[0].id;
    const row = user.rows[0];

    await client.connect();
    await client.query(
      "UPDATE m_user SET email = $1, emailVerified = $2, oAuthId = $3 WHERE id = $4",
      [oAuthEmail, true, oAuthProviderAccountId, userId]
    );
    await client.end();

    const {
      id,
      email,
      id_rol,
      estado,
      password,
      oAuthId,
      duenonegocio,
      cliente,
    } = row;
    if (id_rol === 4) {
      return {
        id,
        email,
        id_rol,
        estado,
        nombre: oAuthGivenName || name,
        apellidos: oAuthFamilyName || lastName,
        password,
        oAuthId,
      };
    }
    return {
      id,
      email,
      id_rol,
      estado,
      password,
      oAuthId,
      duenonegocio,
      cliente,
    };
  }

  const role =
    oAuthEmail === "jaretgarciagomez@gmail.com" ||
    oAuthEmail === "saulchanona@yahoo.com" ||
    oAuthEmail === "elbonixd5@gmail.com"
      ? 1
      : 2 || 3;

  const password = Math.random().toString(36).slice(-8);
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt) as string;

  await client.connect();
  const newUser = await client.query(
    "INSERT INTO m_user(email, password, emailVerified, oAuthId, id_rol) VALUES($1, $2, $3, $4, $5) RETURNING *",
    [oAuthEmail, hash, true, oAuthProviderAccountId, role === 1 ? 1 : 4]
  );
  await client.end();

  const { email, id_rol, id, oAuthId } = newUser.rows[0];
  return {
    id,
    email,
    nombre: oAuthGivenName || name,
    apellidos: oAuthFamilyName || lastName,
    id_rol,
    password: hash,
    oAuthId,
  };
};
