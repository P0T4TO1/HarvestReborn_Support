"use client";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { UsersSupport } from "@/components";

import { IUser } from "@/interfaces";

interface Props {
  users: IUser[];
  useDisclosure: { isOpen: boolean; onClose: () => void };
  id_ticket: string;
}

export const TableModal = ({
  users,
  useDisclosure: { isOpen, onClose },
  id_ticket,
}: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="4xl"
      scrollBehavior="outside"
    >
      <ModalContent>
        <ModalHeader>Asignar usuario soporte</ModalHeader>
        <ModalBody>
          <UsersSupport users={users} id_ticket={id_ticket} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
