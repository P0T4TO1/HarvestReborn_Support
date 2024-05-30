'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import { toast } from 'sonner';
import { SUCCESS_TOAST, DANGER_TOAST } from '@/components';

import { deleteTicket } from '@/actions/tickets';

interface Props {
  useDisclosure: { isOpen: boolean; onClose: () => void };
  id_ticket: string;
}

export const DeleteTicketModal = ({
  useDisclosure: { isOpen, onClose },
  id_ticket,
}: Props) => {
  const onDeleteTicket = async () => {
    try {
      const res = await deleteTicket(id_ticket);
      if (res === 'Error al eliminar ticket') {
        toast('No se pudo eliminar el ticket', DANGER_TOAST);
        return;
      }
      toast('Ticket eliminado con éxito', SUCCESS_TOAST);
      onClose();
    } catch (error) {
      console.error(error);
      toast('No se pudo eliminar el ticket', DANGER_TOAST);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Eliminar ticket</ModalHeader>
        <ModalBody>
          ¿Estás seguro de que deseas eliminar este ticket? Esta acción no se
          puede deshacer.
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="bordered" onPress={onClose}>
            Cancelar
          </Button>
          <Button
            color="danger"
            onPress={() => {
              onDeleteTicket();
              onClose();
            }}
          >
            Eliminar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
