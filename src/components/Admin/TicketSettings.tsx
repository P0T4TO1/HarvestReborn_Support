'use client';

import { useSession } from 'next-auth/react';

import {
  Button,
  Tab,
  Tabs,
  useDisclosure,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from '@nextui-org/react';

import {
  TicketAnswer,
  TicketAnswers,
  SettingsTicketForm,
  TicketComments,
  CommentTextArea,
  TableModal,
} from '@/components';
import { FaSearch } from 'react-icons/fa';

import { ITicket, IUser } from '@/interfaces';

interface Props {
  ticket: ITicket;
  users: IUser[];
}

export const TicketSettings = ({ ticket, users }: Props) => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { data: session } = useSession();

  return (
    <>
      <TableModal
        useDisclosure={{ isOpen, onClose }}
        id_ticket={ticket.id_ticket}
        users={users}
      />

      <div className="container mx-auto mt-8">
        <SettingsTicketForm ticket={ticket}>
          <div className="flex gap-6">
            <div className="w-4/5 pr-10 flex items-center justify-end">
              <label>Soporte asignado</label>
            </div>
            {session?.user.id_rol === 1 || session?.user.id_rol === 6 ? (
              <Input
                aria-label="Soporte"
                defaultValue={
                  ticket.user_soporte
                    ? ticket.user_soporte.nombre
                    : 'No asignado'
                }
                endContent={
                  <Button
                    size="sm"
                    variant="light"
                    isIconOnly
                    onPress={() => onOpen()}
                  >
                    <FaSearch size={21} />
                  </Button>
                }
              />
            ) : (
              <Input
                aria-label="Soporte"
                defaultValue={
                  ticket.user_soporte
                    ? ticket.user_soporte.nombre
                    : 'No asignado'
                }
                readOnly
                isDisabled
              />
            )}
          </div>
        </SettingsTicketForm>
      </div>

      <div className="container mx-auto mt-8">
        <Tabs color="primary">
          <Tab title="Historial">
            <Card>
              <CardHeader>Historial</CardHeader>
              <CardBody>
                <>
                  <div className="w-full md:w-1/2 lg:w-1/4">
                    <TicketAnswer ticket={ticket} />
                  </div>
                  {!ticket.respuestas ? (
                    <div>
                      <h2>No hay respuestas</h2>
                    </div>
                  ) : (
                    <div>
                      {ticket.respuestas.map((answer) => (
                        <div key={answer.id_respuesta} className="w-full">
                          <TicketAnswers answer={answer} />
                          <Divider className="my-4" />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              </CardBody>
            </Card>
          </Tab>
          <Tab title="Comentarios">
            <Card>
              <CardHeader>Comentarios</CardHeader>
              <CardBody>
                <>
                  <div className="w-full md:w-1/2 lg:w-1/4">
                    <CommentTextArea ticket={ticket} />
                  </div>
                  {!ticket.comentarios ? (
                    <div>
                      <h2>No hay comentarios</h2>
                    </div>
                  ) : (
                    <div>
                      {ticket.comentarios.map((comment) => (
                        <div key={comment.id_comentario} className="w-full">
                          <TicketComments comment={comment} />
                          <Divider className="my-4" />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              </CardBody>
            </Card>
          </Tab>
          <Tab title="Archivos">
            <div>
              <h2>Archivos</h2>
            </div>
          </Tab>
          <Tab title="Solución">
            <Card>
              <CardHeader>Solución</CardHeader>
              <CardBody>
                <div className="w-full md:w-1/2 lg:w-1/4">
                  <CommentTextArea ticket={ticket} />
                </div>
                {ticket.respuesta ? (
                  <div>
                    <TicketAnswers answer={ticket.respuesta} />
                  </div>
                ) : (
                  <div>
                    <h2>No hay respuesta final</h2>
                  </div>
                )}
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
