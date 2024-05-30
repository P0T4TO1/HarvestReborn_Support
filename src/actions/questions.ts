import prisma from "@/lib/prisma";
import { IPreguntas } from "@/interfaces";

export const getQuestions = async ()=> {
  try {
    const questions = (await prisma.preguntasFrecuentes.findMany({
      include: {
        respuestas: true,
      },
    })) as unknown as IPreguntas[];

    return questions;
  } catch (error) {
    console.error(error);
    return;
  }
};
