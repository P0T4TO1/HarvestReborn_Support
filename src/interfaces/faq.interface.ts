export interface IRespuestas {
  id_faqRespuesta: number;

  id_prefec: number;
  pregunta: IPreguntas;

  respuesta: string;
}

export interface IPreguntas {
  id_prefec: number;
  
  pregunta: string;

  respuestas: IRespuestas[];
  tipo: TipoPregunta;
}


export enum TipoPregunta {
  GENERAL = "GENERAL",
  CUENTA = "CUENTA",
  NEGOCIO = "NEGOCIO",
  CLIENTE = "CLIENTE",
  DUENONEGOCIO = "DUENONEGOCIO",
  ORDENES = "ORDENES",
  PRODUCTOS = "PRODUCTOS",
  INVENTARIO = "INVENTARIO",
  CHAT = "CHAT",
  PUBLICACIONES = "PUBLICACIONES",
  TECNICO = "TECNICO",
}
