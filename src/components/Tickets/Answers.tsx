'use client';

import React from 'react';
import { useSession } from 'next-auth/react';

import { ITicketRespuesta } from '@/interfaces';

interface Props {
  answer: ITicketRespuesta;
}

export const TicketAnswers = ({ answer }: Props) => {
  const { data: session } = useSession();

  return (
    <>
      <div>
        <div className="flex flex-col mb-4">
          {session?.user.id === answer.id_user ? (
            <p className="text-blue-500">Tú</p>
          ) : (
            <h3>
              {answer.user.duenonegocio?.nombre_dueneg ??
                answer.user.cliente?.nombre_cliente ??
                answer.user.email}
            </h3>
          )}
          <p className="text-xs">
            {new Date(answer.fecha.toString()).toLocaleDateString('es-MX', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </p>
        </div>
        {answer.respuesta.split(/(?:\r\n|\r|\n)/g).map((item) => (
          <>
            {item}
            <br />
          </>
        ))}
      </div>
    </>
  );
};
