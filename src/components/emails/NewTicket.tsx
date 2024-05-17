import { ITicket } from "@/interfaces";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface Props {
  email: string;
  userName: string;
  ticket: ITicket;
}

const baseUrl =
  process.env.NEXT_PUBLIC_SUPPORT_APP_URL ?? "http://localhost:4000";

export const NewTicketNotification = ({ email, userName, ticket }: Props) => (
  <Html>
    <Head />
    <Preview>Nuevo ticket creado</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://res.cloudinary.com/dejx7jbmx/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711170409/logo_po1cqc.jpg?_s=public-apps"
          width="80"
          height="80"
          alt="HRLogo"
          style={logo}
        />
        <Text style={paragraph}>Hola {userName.split(" ")[0]},</Text>
        <Text style={paragraph}>
          Gracias por ponerse en contacto con el servicio de asistencia de
          Harvest Reborn. A continuación se muestran los detalles de su caso.
        </Text>
        <Section>
          <Text style={paragraph}>Nombre: {userName}</Text>
          <Text style={paragraph}>Correo: {email}</Text>
          <Text style={paragraph}>No. de ticket: {ticket.id_ticket}</Text>
          <Text style={paragraph}>Descripcion: {ticket.descripcion}</Text>
        </Section>
        {userName.includes("@") ? null : (
          <Section style={btnContainer}>
            <Button
              href={`${baseUrl}/tickets/${ticket.id_ticket}`}
              style={button}
            >
              Ver ticket
            </Button>
          </Section>
        )}
        <Text style={paragraph}>
          Si tiene alguna pregunta o necesita más información, no dude en
          responder a este correo electrónico.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Harvest Reborn Asistencia | {new Date().getFullYear()}
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#16A34A",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
