'use client';

import { useState } from 'react';

import { toast } from 'sonner';
import { Button, Textarea } from '@nextui-org/react';
import { SUCCESS_TOAST, DANGER_TOAST } from '@/components';

import { ITicket } from '@/interfaces';
import { useSession } from 'next-auth/react';
import { postFinalAnswer } from '@/actions/tickets';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  ticket: ITicket;
}

export const AnswerTextArea = ({ ticket }: Props) => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{ answer: string }>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<{ answer: string }> = async (data) => {
    setIsLoading(true);
    if (!data.answer) {
      setError('answer', { message: 'Respuesta requerida' });
      return setIsLoading(false);
    }
    if (!session?.user.id) {
      setError('answer', { message: 'Usuario no encontrado' });
      return setIsLoading(false);
    }
    const response = await postFinalAnswer(
      ticket.id_ticket,
      data.answer,
      session.user.id
    );
    if (response === 'Error al crear respuesta') {
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
          {...register('answer')}
        />
        {errors.answer && (
          <p className="text-red-500 text-sm">{errors.answer.message}</p>
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
