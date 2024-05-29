'use client';

import { useState } from 'react';

import { toast } from 'sonner';
import { Button, Textarea } from '@nextui-org/react';
import { SUCCESS_TOAST, DANGER_TOAST } from '@/components';

import { ITicket } from '@/interfaces';
import { useSession } from 'next-auth/react';
import { postComment } from '@/actions/tickets';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  ticket: ITicket;
}

export const CommentTextArea = ({ ticket }: Props) => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{ comment: string }>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<{ comment: string }> = async (data) => {
    setIsLoading(true);
    if (!data.comment) {
      setError('comment', { message: 'Respuesta requerida' });
      return setIsLoading(false);
    }
    if (!session?.user.id) {
      setError('comment', { message: 'Usuario no encontrado' });
      return setIsLoading(false);
    }
    const response = await postComment(
      ticket.id_ticket,
      data.comment,
      session.user.id
    );
    if (response === 'Error al crear comentario') {
      toast('Error al crear comentario', DANGER_TOAST);
      return setIsLoading(false);
    }
    toast('Respuesta creada', SUCCESS_TOAST);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container mx-auto">
        <Textarea
          aria-label="comentario"
          label="Tu mensaje"
          labelPlacement="outside"
          rows={5}
          {...register('comment')}
        />
        {errors.comment && (
          <p className="text-red-500 text-sm">{errors.comment.message}</p>
        )}
      </div>
      <div className="container mx-auto mt-8 flex justify-end">
        <Button
          size="md"
          variant="light"
          type="submit"
          color="secondary"
          isLoading={isLoading}
        >
          Enviar
        </Button>
      </div>
    </form>
  );
};
