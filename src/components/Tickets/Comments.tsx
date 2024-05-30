'use client';

import React from 'react';

import { ITicketComentario } from '@/interfaces';

interface Props {
  comment: ITicketComentario;
}

export const TicketComments = ({ comment }: Props) => {
  return (
    <>
      <div>
        <div className="flex flex-col mb-4">
          <p className="text-xs">
            {new Date(comment.fecha.toString()).toLocaleDateString('es-MX', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </p>
        </div>
        {comment.comentario.split(/(?:\r\n|\r|\n)/g).map((item) => (
          <>
            {item}
            <br />
          </>
        ))}
      </div>
    </>
  );
};
