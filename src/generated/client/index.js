
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.13.0
 * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
 */
Prisma.prismaVersion = {
  client: "5.13.0",
  engine: "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.M_userScalarFieldEnum = {
  id: 'id',
  password: 'password',
  email: 'email',
  estado: 'estado',
  oAuthId: 'oAuthId',
  emailVerified: 'emailVerified',
  emailVerificationToken: 'emailVerificationToken',
  resetPasswordToken: 'resetPasswordToken',
  resetPasswordExpires: 'resetPasswordExpires',
  id_rol: 'id_rol'
};

exports.Prisma.C_rolScalarFieldEnum = {
  id_rol: 'id_rol',
  nombre_rol: 'nombre_rol'
};

exports.Prisma.D_clienteScalarFieldEnum = {
  id_cliente: 'id_cliente',
  nombre_cliente: 'nombre_cliente',
  apellidos_cliente: 'apellidos_cliente',
  telefono_cliente: 'telefono_cliente',
  fecha_nacimiento: 'fecha_nacimiento',
  nombre_negocio: 'nombre_negocio',
  direccion_negocio: 'direccion_negocio',
  id_user: 'id_user'
};

exports.Prisma.D_duenonegocioScalarFieldEnum = {
  id_dueneg: 'id_dueneg',
  nombre_dueneg: 'nombre_dueneg',
  apellidos_dueneg: 'apellidos_dueneg',
  fecha_nacimiento: 'fecha_nacimiento',
  id_user: 'id_user'
};

exports.Prisma.M_negocioScalarFieldEnum = {
  id_negocio: 'id_negocio',
  nombre_negocio: 'nombre_negocio',
  direccion_negocio: 'direccion_negocio',
  telefono_negocio: 'telefono_negocio',
  email_negocio: 'email_negocio',
  images_negocio: 'images_negocio',
  descripcion_negocio: 'descripcion_negocio',
  estado_negocio: 'estado_negocio',
  id_dueneg: 'id_dueneg',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.C_inventarioScalarFieldEnum = {
  id_inventario: 'id_inventario',
  id_negocio: 'id_negocio'
};

exports.Prisma.M_loteScalarFieldEnum = {
  id_lote: 'id_lote',
  cantidad_producto: 'cantidad_producto',
  last_cantidad: 'last_cantidad',
  fecha_entrada: 'fecha_entrada',
  fecha_vencimiento: 'fecha_vencimiento',
  precio_kg: 'precio_kg',
  last_precio_kg: 'last_precio_kg',
  monto_total: 'monto_total',
  last_monto_total: 'last_monto_total',
  dias_aviso: 'dias_aviso',
  disponibilidad: 'disponibilidad',
  estado_lote: 'estado_lote',
  tipo_almacenaje: 'tipo_almacenaje',
  id_inventario: 'id_inventario',
  id_producto: 'id_producto',
  id_proveedor: 'id_proveedor',
  id_publicacion: 'id_publicacion'
};

exports.Prisma.M_productoScalarFieldEnum = {
  id_producto: 'id_producto',
  nombre_producto: 'nombre_producto',
  imagen_producto: 'imagen_producto',
  descripcion: 'descripcion',
  enTemporada: 'enTemporada',
  categoria: 'categoria'
};

exports.Prisma.C_proveedorScalarFieldEnum = {
  id_proveedor: 'id_proveedor',
  nombre_proveedor: 'nombre_proveedor',
  telefono_proveedor: 'telefono_proveedor',
  email_proveedor: 'email_proveedor'
};

exports.Prisma.M_prodcutoOrdenScalarFieldEnum = {
  id_productoOrden: 'id_productoOrden',
  cantidad_orden: 'cantidad_orden',
  monto: 'monto',
  id_orden: 'id_orden',
  id_producto: 'id_producto',
  id_lote: 'id_lote',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.D_ordenScalarFieldEnum = {
  id_orden: 'id_orden',
  fecha_orden: 'fecha_orden',
  hora_orden: 'hora_orden',
  monto_total: 'monto_total',
  estado_orden: 'estado_orden',
  id_cliente: 'id_cliente',
  id_historial: 'id_historial',
  id_negocio: 'id_negocio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.C_historialScalarFieldEnum = {
  id_historial: 'id_historial',
  id_cliente: 'id_cliente',
  id_negocio: 'id_negocio'
};

exports.Prisma.M_ticketSoporteScalarFieldEnum = {
  id_ticket: 'id_ticket',
  nombre_usuario: 'nombre_usuario',
  descripcion: 'descripcion',
  images: 'images',
  fecha_creacion: 'fecha_creacion',
  fecha_cierre: 'fecha_cierre',
  estado_ticket: 'estado_ticket',
  id_user: 'id_user'
};

exports.Prisma.D_faqRespuestasScalarFieldEnum = {
  id_faqRespuesta: 'id_faqRespuesta',
  id_prefrec: 'id_prefrec',
  respuesta: 'respuesta'
};

exports.Prisma.C_preguntasFrecuentesScalarFieldEnum = {
  id_prefrec: 'id_prefrec',
  pregunta: 'pregunta',
  tipo: 'tipo'
};

exports.Prisma.D_participantesScalarFieldEnum = {
  id_participantes: 'id_participantes',
  id_user: 'id_user',
  id_chat: 'id_chat'
};

exports.Prisma.M_chatScalarFieldEnum = {
  id_chat: 'id_chat',
  nombre_chat: 'nombre_chat',
  fecha_creacion: 'fecha_creacion',
  id_user_creator: 'id_user_creator'
};

exports.Prisma.D_mensajesScalarFieldEnum = {
  id_mensaje: 'id_mensaje',
  cuerpo_mensaje: 'cuerpo_mensaje',
  tipo_mensaje: 'tipo_mensaje',
  leido: 'leido',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  id_chat: 'id_chat',
  id_user: 'id_user'
};

exports.Prisma.M_publicacionesScalarFieldEnum = {
  id_publicacion: 'id_publicacion',
  id_negocio: 'id_negocio',
  titulo_publicacion: 'titulo_publicacion',
  descripcion_publicacion: 'descripcion_publicacion',
  precio_publicacion: 'precio_publicacion',
  images_publicacion: 'images_publicacion',
  disponibilidad: 'disponibilidad',
  estado_publicacion: 'estado_publicacion',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Estado = exports.$Enums.Estado = {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO',
  PENDIENTE: 'PENDIENTE'
};

exports.Disponibilidad = exports.$Enums.Disponibilidad = {
  EN_VENTA: 'EN_VENTA',
  DONACION: 'DONACION',
  VENDIDO: 'VENDIDO',
  DONADO: 'DONADO'
};

exports.EstadoLote = exports.$Enums.EstadoLote = {
  ACTIVO: 'ACTIVO',
  VENDIDO: 'VENDIDO',
  VENCIDO: 'VENCIDO',
  TERMINADO: 'TERMINADO'
};

exports.TipoAlmacenaje = exports.$Enums.TipoAlmacenaje = {
  HUACAL: 'HUACAL',
  BOLSA: 'BOLSA',
  CAJA: 'CAJA',
  CANASTA: 'CANASTA',
  OTRO: 'OTRO'
};

exports.Categoria = exports.$Enums.Categoria = {
  FRUTA: 'FRUTA',
  VERDURA: 'VERDURA'
};

exports.EstadoOrden = exports.$Enums.EstadoOrden = {
  PENDIENTE: 'PENDIENTE',
  EN_PROCESO: 'EN_PROCESO',
  RECHAZADO: 'RECHAZADO',
  FINALIZADO: 'FINALIZADO',
  CANCELADO: 'CANCELADO'
};

exports.EstadoTicket = exports.$Enums.EstadoTicket = {
  PENDIENTE: 'PENDIENTE',
  ACTIVO: 'ACTIVO',
  CERRADO: 'CERRADO'
};

exports.TipoPregunta = exports.$Enums.TipoPregunta = {
  GENERAL: 'GENERAL',
  CUENTA: 'CUENTA',
  NEGOCIO: 'NEGOCIO',
  CLIENTE: 'CLIENTE',
  DUENONEGOCIO: 'DUENONEGOCIO',
  ORDEN: 'ORDEN',
  PRODUCTOS: 'PRODUCTOS',
  INVENTARIO: 'INVENTARIO',
  CHAT: 'CHAT'
};

exports.tipo_mensaje = exports.$Enums.tipo_mensaje = {
  TEXTO: 'TEXTO',
  IMAGEN: 'IMAGEN',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  DOCUMENTO: 'DOCUMENTO'
};

exports.DisponibilidadPublicacion = exports.$Enums.DisponibilidadPublicacion = {
  EN_VENTA: 'EN_VENTA',
  DONACION: 'DONACION'
};

exports.EstadoPublicacion = exports.$Enums.EstadoPublicacion = {
  PENDIENTE: 'PENDIENTE',
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO',
  RECHAZADO: 'RECHAZADO',
  ELIMINADO: 'ELIMINADO',
  VENDIDO: 'VENDIDO',
  DONADO: 'DONADO'
};

exports.Prisma.ModelName = {
  m_user: 'm_user',
  c_rol: 'c_rol',
  d_cliente: 'd_cliente',
  d_duenonegocio: 'd_duenonegocio',
  m_negocio: 'm_negocio',
  c_inventario: 'c_inventario',
  m_lote: 'm_lote',
  m_producto: 'm_producto',
  c_proveedor: 'c_proveedor',
  m_prodcutoOrden: 'm_prodcutoOrden',
  d_orden: 'd_orden',
  c_historial: 'c_historial',
  m_ticketSoporte: 'm_ticketSoporte',
  d_faqRespuestas: 'd_faqRespuestas',
  c_preguntasFrecuentes: 'c_preguntasFrecuentes',
  d_participantes: 'd_participantes',
  m_chat: 'm_chat',
  d_mensajes: 'd_mensajes',
  m_publicaciones: 'm_publicaciones'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\angel\\Harvest\\HarvestReborn_Support\\src\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma-second",
  "clientVersion": "5.13.0",
  "engineVersion": "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "AZURE_POSTGRES_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\r\n  provider = \"prisma-client-js\"\r\n  output   = \"../src/generated/client\"\r\n}\r\n\r\ndatasource db {\r\n  provider     = \"postgresql\"\r\n  url          = env(\"AZURE_POSTGRES_URL\")\r\n  relationMode = \"prisma\"\r\n}\r\n\r\nmodel m_user {\r\n  id       String @id @default(uuid())\r\n  password String\r\n  email    String @unique\r\n  estado   Estado @default(ACTIVO)\r\n\r\n  oAuthId String?\r\n\r\n  emailVerified          Boolean @default(false)\r\n  emailVerificationToken String? @unique\r\n\r\n  resetPasswordToken   String?   @unique\r\n  resetPasswordExpires DateTime?\r\n\r\n  id_rol Int\r\n  rol    c_rol @relation(fields: [id_rol], references: [id_rol])\r\n\r\n  cliente       d_cliente?\r\n  duenonegocio  d_duenonegocio?\r\n  ticketSoporte m_ticketSoporte[]\r\n  participantes d_participantes[]\r\n  chat          m_chat[]\r\n  mensajes      d_mensajes[]\r\n\r\n  @@index([id_rol])\r\n}\r\n\r\nenum Estado {\r\n  ACTIVO\r\n  INACTIVO\r\n  PENDIENTE\r\n}\r\n\r\nmodel c_rol {\r\n  id_rol     Int    @id @default(autoincrement())\r\n  nombre_rol String\r\n\r\n  user m_user[]\r\n}\r\n\r\nmodel d_cliente {\r\n  id_cliente        Int      @id @default(autoincrement())\r\n  nombre_cliente    String\r\n  apellidos_cliente String\r\n  telefono_cliente  String\r\n  fecha_nacimiento  DateTime\r\n  nombre_negocio    String?\r\n  direccion_negocio String?\r\n\r\n  id_user   String       @unique\r\n  user      m_user       @relation(fields: [id_user], references: [id], onDelete: Cascade)\r\n  orden     d_orden[]\r\n  historial c_historial?\r\n\r\n  @@index([id_user])\r\n}\r\n\r\nmodel d_duenonegocio {\r\n  id_dueneg        Int      @id @default(autoincrement())\r\n  nombre_dueneg    String\r\n  apellidos_dueneg String\r\n  fecha_nacimiento DateTime\r\n\r\n  id_user String @unique\r\n  user    m_user @relation(fields: [id_user], references: [id], onDelete: Cascade)\r\n\r\n  negocio m_negocio?\r\n\r\n  @@index([id_user])\r\n}\r\n\r\n// // mysql\r\n// model Images {\r\n//   id      Int    @id @default(autoincrement())\r\n//   url     String\r\n//   altText String\r\n\r\n//   id_negocio Int\r\n//   negocio    m_negocio @relation(fields: [id_negocio], references: [id_negocio], onDelete: Cascade)\r\n\r\n//   @@index([id_negocio])\r\n// }\r\n\r\nmodel m_negocio {\r\n  id_negocio          Int      @id @default(autoincrement())\r\n  nombre_negocio      String\r\n  direccion_negocio   String\r\n  telefono_negocio    String\r\n  email_negocio       String?\r\n  // images_negocio      Images[]\r\n  images_negocio      String[] @default([])\r\n  descripcion_negocio String?\r\n  estado_negocio      Estado   @default(PENDIENTE)\r\n\r\n  id_dueneg Int            @unique\r\n  dueneg    d_duenonegocio @relation(fields: [id_dueneg], references: [id_dueneg], onDelete: Cascade)\r\n\r\n  historial     c_historial?\r\n  inventario    c_inventario?\r\n  ordenes       d_orden[]\r\n  publicaciones m_publicaciones[]\r\n\r\n  createdAt DateTime  @default(now())\r\n  updatedAt DateTime  @updatedAt\r\n  deletedAt DateTime?\r\n\r\n  @@index([id_dueneg])\r\n}\r\n\r\nmodel c_inventario {\r\n  id_inventario Int @id @default(autoincrement())\r\n\r\n  id_negocio Int       @unique\r\n  negocio    m_negocio @relation(fields: [id_negocio], references: [id_negocio], onDelete: Cascade)\r\n\r\n  lote m_lote[]\r\n}\r\n\r\nmodel m_lote {\r\n  id_lote           Int      @id @default(autoincrement())\r\n  cantidad_producto Int\r\n  last_cantidad     Int?     @default(0)\r\n  fecha_entrada     DateTime\r\n  fecha_vencimiento DateTime\r\n  precio_kg         Float\r\n  last_precio_kg    Float?   @default(0)\r\n  monto_total       Float\r\n  last_monto_total  Float?   @default(0)\r\n  dias_aviso        Int      @default(0)\r\n\r\n  disponibilidad  Disponibilidad @default(EN_VENTA)\r\n  estado_lote     EstadoLote     @default(ACTIVO)\r\n  tipo_almacenaje TipoAlmacenaje @default(OTRO)\r\n\r\n  id_inventario Int\r\n  inventario    c_inventario @relation(fields: [id_inventario], references: [id_inventario], onDelete: Cascade)\r\n\r\n  id_producto Int\r\n  producto    m_producto @relation(fields: [id_producto], references: [id_producto], onDelete: Cascade)\r\n\r\n  id_proveedor Int?\r\n  proveedor    c_proveedor? @relation(fields: [id_proveedor], references: [id_proveedor])\r\n\r\n  id_publicacion Int?\r\n  publicacion    m_publicaciones? @relation(fields: [id_publicacion], references: [id_publicacion])\r\n\r\n  productoOrden m_prodcutoOrden[]\r\n\r\n  @@index([id_inventario])\r\n  @@index([id_producto])\r\n  @@index([id_proveedor])\r\n  @@index([id_publicacion])\r\n}\r\n\r\nenum EstadoLote {\r\n  ACTIVO\r\n  VENDIDO\r\n  VENCIDO\r\n  TERMINADO\r\n}\r\n\r\nenum Disponibilidad {\r\n  EN_VENTA\r\n  DONACION\r\n  VENDIDO\r\n  DONADO\r\n}\r\n\r\nenum TipoAlmacenaje {\r\n  HUACAL\r\n  BOLSA\r\n  CAJA\r\n  CANASTA\r\n  OTRO\r\n}\r\n\r\nmodel m_producto {\r\n  id_producto     Int       @id @default(autoincrement())\r\n  nombre_producto String\r\n  imagen_producto String\r\n  descripcion     String?\r\n  enTemporada     Boolean\r\n  categoria       Categoria @default(VERDURA)\r\n\r\n  lote          m_lote[]\r\n  prodcutoOrden m_prodcutoOrden[]\r\n}\r\n\r\nenum Categoria {\r\n  FRUTA\r\n  VERDURA\r\n}\r\n\r\nmodel c_proveedor {\r\n  id_proveedor       Int    @id @default(autoincrement())\r\n  nombre_proveedor   String\r\n  telefono_proveedor String\r\n  email_proveedor    String\r\n\r\n  lote m_lote[]\r\n}\r\n\r\nmodel m_prodcutoOrden {\r\n  id_productoOrden Int   @id @default(autoincrement())\r\n  cantidad_orden   Int\r\n  monto            Float\r\n\r\n  id_orden String?\r\n  orden    d_orden? @relation(fields: [id_orden], references: [id_orden])\r\n\r\n  id_producto Int\r\n  producto    m_producto @relation(fields: [id_producto], references: [id_producto], onDelete: Cascade)\r\n\r\n  id_lote Int\r\n  lote    m_lote @relation(fields: [id_lote], references: [id_lote], onDelete: Cascade)\r\n\r\n  createdAt DateTime  @default(now())\r\n  updatedAt DateTime  @updatedAt\r\n  deletedAt DateTime?\r\n\r\n  @@index([id_orden])\r\n  @@index([id_producto])\r\n  @@index([id_lote])\r\n}\r\n\r\nenum EstadoOrden {\r\n  PENDIENTE\r\n  EN_PROCESO\r\n  RECHAZADO\r\n  FINALIZADO\r\n  CANCELADO\r\n}\r\n\r\nmodel d_orden {\r\n  id_orden     String      @id @default(uuid())\r\n  fecha_orden  DateTime\r\n  hora_orden   DateTime\r\n  monto_total  Float\r\n  estado_orden EstadoOrden @default(PENDIENTE)\r\n\r\n  id_cliente Int\r\n  cliente    d_cliente @relation(fields: [id_cliente], references: [id_cliente])\r\n\r\n  id_historial Int?\r\n  historial    c_historial? @relation(fields: [id_historial], references: [id_historial])\r\n\r\n  id_negocio Int\r\n  negocio    m_negocio @relation(fields: [id_negocio], references: [id_negocio])\r\n\r\n  productoOrden m_prodcutoOrden[]\r\n\r\n  createdAt DateTime  @default(now())\r\n  updatedAt DateTime  @updatedAt\r\n  deletedAt DateTime?\r\n\r\n  @@index([id_cliente])\r\n  @@index([id_historial])\r\n  @@index([id_negocio])\r\n}\r\n\r\nmodel c_historial {\r\n  id_historial Int @id @default(autoincrement())\r\n\r\n  id_cliente Int?       @unique\r\n  cliente    d_cliente? @relation(fields: [id_cliente], references: [id_cliente], onDelete: Cascade)\r\n\r\n  id_negocio Int?       @unique\r\n  negocio    m_negocio? @relation(fields: [id_negocio], references: [id_negocio], onDelete: Cascade)\r\n\r\n  orden d_orden[]\r\n}\r\n\r\nenum EstadoTicket {\r\n  PENDIENTE\r\n  ACTIVO\r\n  CERRADO\r\n}\r\n\r\nmodel m_ticketSoporte {\r\n  id_ticket      Int          @id @default(autoincrement())\r\n  nombre_usuario String\r\n  descripcion    String\r\n  images         String[]\r\n  fecha_creacion DateTime\r\n  fecha_cierre   DateTime\r\n  estado_ticket  EstadoTicket @default(PENDIENTE)\r\n\r\n  id_user String\r\n  user    m_user @relation(fields: [id_user], references: [id], onDelete: Cascade)\r\n\r\n  @@index([id_user])\r\n}\r\n\r\nmodel d_faqRespuestas {\r\n  id_faqRespuesta Int @id @default(autoincrement())\r\n\r\n  id_prefrec Int\r\n  pregunta   c_preguntasFrecuentes @relation(fields: [id_prefrec], references: [id_prefrec])\r\n\r\n  respuesta String\r\n\r\n  @@index([id_prefrec])\r\n}\r\n\r\nmodel c_preguntasFrecuentes {\r\n  id_prefrec Int @id @default(autoincrement())\r\n\r\n  pregunta String\r\n\r\n  respuestas d_faqRespuestas[]\r\n  tipo       TipoPregunta      @default(GENERAL)\r\n}\r\n\r\nenum TipoPregunta {\r\n  GENERAL\r\n  CUENTA\r\n  NEGOCIO\r\n  CLIENTE\r\n  DUENONEGOCIO\r\n  ORDEN\r\n  PRODUCTOS\r\n  INVENTARIO\r\n  CHAT\r\n}\r\n\r\nmodel d_participantes {\r\n  id_participantes Int @id @default(autoincrement())\r\n\r\n  id_user String\r\n  user    m_user? @relation(fields: [id_user], references: [id], onDelete: Cascade)\r\n\r\n  id_chat String\r\n  chat    m_chat @relation(fields: [id_chat], references: [id_chat])\r\n\r\n  @@index([id_user])\r\n  @@index([id_chat])\r\n}\r\n\r\nmodel m_chat {\r\n  id_chat        String   @id @default(uuid())\r\n  nombre_chat    String\r\n  fecha_creacion DateTime\r\n\r\n  id_user_creator String\r\n  user            m_user? @relation(fields: [id_user_creator], references: [id], onDelete: Cascade)\r\n\r\n  participantes d_participantes[]\r\n  mensajes      d_mensajes[]\r\n\r\n  @@index([id_user_creator])\r\n}\r\n\r\nmodel d_mensajes {\r\n  id_mensaje     String       @id @default(uuid())\r\n  cuerpo_mensaje String       @db.VarChar(400)\r\n  tipo_mensaje   tipo_mensaje @default(TEXTO)\r\n  leido          Boolean      @default(false)\r\n  createdAt      DateTime     @default(now())\r\n  deletedAt      DateTime?\r\n\r\n  id_chat String\r\n  chat    m_chat? @relation(fields: [id_chat], references: [id_chat])\r\n\r\n  id_user String\r\n  user    m_user? @relation(fields: [id_user], references: [id], onDelete: Cascade)\r\n\r\n  @@index([id_chat])\r\n  @@index([id_user])\r\n}\r\n\r\nenum tipo_mensaje {\r\n  TEXTO\r\n  IMAGEN\r\n  VIDEO\r\n  AUDIO\r\n  DOCUMENTO\r\n}\r\n\r\nmodel m_publicaciones {\r\n  id_publicacion Int @id @default(autoincrement())\r\n\r\n  id_negocio Int\r\n  negocio    m_negocio @relation(fields: [id_negocio], references: [id_negocio], onDelete: Cascade)\r\n\r\n  titulo_publicacion      String\r\n  descripcion_publicacion String                    @db.VarChar(400)\r\n  precio_publicacion      Float?\r\n  images_publicacion      String[]                  @default([])\r\n  disponibilidad          DisponibilidadPublicacion @default(EN_VENTA)\r\n  estado_publicacion      EstadoPublicacion         @default(PENDIENTE)\r\n\r\n  lotes m_lote[]\r\n\r\n  createdAt DateTime  @default(now())\r\n  updatedAt DateTime  @updatedAt\r\n  deletedAt DateTime?\r\n\r\n  @@index([id_negocio])\r\n}\r\n\r\nenum EstadoPublicacion {\r\n  PENDIENTE\r\n  ACTIVO\r\n  INACTIVO\r\n  RECHAZADO\r\n  ELIMINADO\r\n  VENDIDO\r\n  DONADO\r\n}\r\n\r\nenum DisponibilidadPublicacion {\r\n  EN_VENTA\r\n  DONACION\r\n}\r\n",
  "inlineSchemaHash": "bf9eff717086d6cddaf50dfe7f0031b88fd6b018a54514231ea3dbb7b0822e62",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"m_user\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Estado\",\"default\":\"ACTIVO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oAuthId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailVerificationToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resetPasswordToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resetPasswordExpires\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_rol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rol\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"c_rol\",\"relationName\":\"c_rolTom_user\",\"relationFromFields\":[\"id_rol\"],\"relationToFields\":[\"id_rol\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_cliente\",\"relationName\":\"d_clienteTom_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duenonegocio\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_duenonegocio\",\"relationName\":\"d_duenonegocioTom_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticketSoporte\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_ticketSoporte\",\"relationName\":\"m_ticketSoporteTom_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"participantes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_participantes\",\"relationName\":\"d_participantesTom_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chat\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_chat\",\"relationName\":\"m_chatTom_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensajes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_mensajes\",\"relationName\":\"d_mensajesTom_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"c_rol\":{\"dbName\":null,\"fields\":[{\"name\":\"id_rol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre_rol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_user\",\"relationName\":\"c_rolTom_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"d_cliente\":{\"dbName\":null,\"fields\":[{\"name\":\"id_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apellidos_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_nacimiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre_negocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"direccion_negocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_user\",\"relationName\":\"d_clienteTom_user\",\"relationFromFields\":[\"id_user\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orden\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_orden\",\"relationName\":\"d_clienteTod_orden\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"historial\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"c_historial\",\"relationName\":\"c_historialTod_cliente\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"d_duenonegocio\":{\"dbName\":null,\"fields\":[{\"name\":\"id_dueneg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre_dueneg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apellidos_dueneg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_nacimiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_user\",\"relationName\":\"d_duenonegocioTom_user\",\"relationFromFields\":[\"id_user\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"negocio\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_negocio\",\"relationName\":\"d_duenonegocioTom_negocio\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"m_negocio\":{\"dbName\":null,\"fields\":[{\"name\":\"id_negocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre_negocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"direccion_negocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono_negocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_negocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images_negocio\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion_negocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado_negocio\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Estado\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_dueneg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dueneg\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_duenonegocio\",\"relationName\":\"d_duenonegocioTom_negocio\",\"relationFromFields\":[\"id_dueneg\"],\"relationToFields\":[\"id_dueneg\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"historial\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"c_historial\",\"relationName\":\"c_historialTom_negocio\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"c_inventario\",\"relationName\":\"c_inventarioTom_negocio\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordenes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_orden\",\"relationName\":\"d_ordenTom_negocio\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicaciones\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_publicaciones\",\"relationName\":\"m_negocioTom_publicaciones\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"c_inventario\":{\"dbName\":null,\"fields\":[{\"name\":\"id_inventario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_negocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"negocio\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_negocio\",\"relationName\":\"c_inventarioTom_negocio\",\"relationFromFields\":[\"id_negocio\"],\"relationToFields\":[\"id_negocio\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_lote\",\"relationName\":\"c_inventarioTom_lote\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"m_lote\":{\"dbName\":null,\"fields\":[{\"name\":\"id_lote\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cantidad_producto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_cantidad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_entrada\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_vencimiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precio_kg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_precio_kg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monto_total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_monto_total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dias_aviso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disponibilidad\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Disponibilidad\",\"default\":\"EN_VENTA\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado_lote\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoLote\",\"default\":\"ACTIVO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_almacenaje\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TipoAlmacenaje\",\"default\":\"OTRO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_inventario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"c_inventario\",\"relationName\":\"c_inventarioTom_lote\",\"relationFromFields\":[\"id_inventario\"],\"relationToFields\":[\"id_inventario\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_producto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"producto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_producto\",\"relationName\":\"m_loteTom_producto\",\"relationFromFields\":[\"id_producto\"],\"relationToFields\":[\"id_producto\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_proveedor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proveedor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"c_proveedor\",\"relationName\":\"c_proveedorTom_lote\",\"relationFromFields\":[\"id_proveedor\"],\"relationToFields\":[\"id_proveedor\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_publicacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicacion\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_publicaciones\",\"relationName\":\"m_loteTom_publicaciones\",\"relationFromFields\":[\"id_publicacion\"],\"relationToFields\":[\"id_publicacion\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productoOrden\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_prodcutoOrden\",\"relationName\":\"m_loteTom_prodcutoOrden\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"m_producto\":{\"dbName\":null,\"fields\":[{\"name\":\"id_producto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre_producto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imagen_producto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enTemporada\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoria\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Categoria\",\"default\":\"VERDURA\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_lote\",\"relationName\":\"m_loteTom_producto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prodcutoOrden\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_prodcutoOrden\",\"relationName\":\"m_prodcutoOrdenTom_producto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"c_proveedor\":{\"dbName\":null,\"fields\":[{\"name\":\"id_proveedor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre_proveedor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono_proveedor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_proveedor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_lote\",\"relationName\":\"c_proveedorTom_lote\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"m_prodcutoOrden\":{\"dbName\":null,\"fields\":[{\"name\":\"id_productoOrden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cantidad_orden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_orden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orden\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_orden\",\"relationName\":\"d_ordenTom_prodcutoOrden\",\"relationFromFields\":[\"id_orden\"],\"relationToFields\":[\"id_orden\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_producto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"producto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_producto\",\"relationName\":\"m_prodcutoOrdenTom_producto\",\"relationFromFields\":[\"id_producto\"],\"relationToFields\":[\"id_producto\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_lote\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lote\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_lote\",\"relationName\":\"m_loteTom_prodcutoOrden\",\"relationFromFields\":[\"id_lote\"],\"relationToFields\":[\"id_lote\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"d_orden\":{\"dbName\":null,\"fields\":[{\"name\":\"id_orden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_orden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hora_orden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monto_total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado_orden\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoOrden\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_cliente\",\"relationName\":\"d_clienteTod_orden\",\"relationFromFields\":[\"id_cliente\"],\"relationToFields\":[\"id_cliente\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_historial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"historial\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"c_historial\",\"relationName\":\"c_historialTod_orden\",\"relationFromFields\":[\"id_historial\"],\"relationToFields\":[\"id_historial\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_negocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"negocio\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_negocio\",\"relationName\":\"d_ordenTom_negocio\",\"relationFromFields\":[\"id_negocio\"],\"relationToFields\":[\"id_negocio\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productoOrden\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_prodcutoOrden\",\"relationName\":\"d_ordenTom_prodcutoOrden\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"c_historial\":{\"dbName\":null,\"fields\":[{\"name\":\"id_historial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_cliente\",\"relationName\":\"c_historialTod_cliente\",\"relationFromFields\":[\"id_cliente\"],\"relationToFields\":[\"id_cliente\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_negocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"negocio\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_negocio\",\"relationName\":\"c_historialTom_negocio\",\"relationFromFields\":[\"id_negocio\"],\"relationToFields\":[\"id_negocio\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orden\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_orden\",\"relationName\":\"c_historialTod_orden\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"m_ticketSoporte\":{\"dbName\":null,\"fields\":[{\"name\":\"id_ticket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_creacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_cierre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado_ticket\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoTicket\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_user\",\"relationName\":\"m_ticketSoporteTom_user\",\"relationFromFields\":[\"id_user\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"d_faqRespuestas\":{\"dbName\":null,\"fields\":[{\"name\":\"id_faqRespuesta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_prefrec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pregunta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"c_preguntasFrecuentes\",\"relationName\":\"c_preguntasFrecuentesTod_faqRespuestas\",\"relationFromFields\":[\"id_prefrec\"],\"relationToFields\":[\"id_prefrec\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"respuesta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"c_preguntasFrecuentes\":{\"dbName\":null,\"fields\":[{\"name\":\"id_prefrec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pregunta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"respuestas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_faqRespuestas\",\"relationName\":\"c_preguntasFrecuentesTod_faqRespuestas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TipoPregunta\",\"default\":\"GENERAL\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"d_participantes\":{\"dbName\":null,\"fields\":[{\"name\":\"id_participantes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_user\",\"relationName\":\"d_participantesTom_user\",\"relationFromFields\":[\"id_user\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_chat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chat\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_chat\",\"relationName\":\"d_participantesTom_chat\",\"relationFromFields\":[\"id_chat\"],\"relationToFields\":[\"id_chat\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"m_chat\":{\"dbName\":null,\"fields\":[{\"name\":\"id_chat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre_chat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_creacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_user_creator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_user\",\"relationName\":\"m_chatTom_user\",\"relationFromFields\":[\"id_user_creator\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"participantes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_participantes\",\"relationName\":\"d_participantesTom_chat\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensajes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"d_mensajes\",\"relationName\":\"d_mensajesTom_chat\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"d_mensajes\":{\"dbName\":null,\"fields\":[{\"name\":\"id_mensaje\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cuerpo_mensaje\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_mensaje\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"tipo_mensaje\",\"default\":\"TEXTO\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_chat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chat\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_chat\",\"relationName\":\"d_mensajesTom_chat\",\"relationFromFields\":[\"id_chat\"],\"relationToFields\":[\"id_chat\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_user\",\"relationName\":\"d_mensajesTom_user\",\"relationFromFields\":[\"id_user\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"m_publicaciones\":{\"dbName\":null,\"fields\":[{\"name\":\"id_publicacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_negocio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"negocio\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_negocio\",\"relationName\":\"m_negocioTom_publicaciones\",\"relationFromFields\":[\"id_negocio\"],\"relationToFields\":[\"id_negocio\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo_publicacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion_publicacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precio_publicacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images_publicacion\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disponibilidad\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DisponibilidadPublicacion\",\"default\":\"EN_VENTA\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado_publicacion\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EstadoPublicacion\",\"default\":\"PENDIENTE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lotes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"m_lote\",\"relationName\":\"m_loteTom_publicaciones\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Estado\":{\"values\":[{\"name\":\"ACTIVO\",\"dbName\":null},{\"name\":\"INACTIVO\",\"dbName\":null},{\"name\":\"PENDIENTE\",\"dbName\":null}],\"dbName\":null},\"EstadoLote\":{\"values\":[{\"name\":\"ACTIVO\",\"dbName\":null},{\"name\":\"VENDIDO\",\"dbName\":null},{\"name\":\"VENCIDO\",\"dbName\":null},{\"name\":\"TERMINADO\",\"dbName\":null}],\"dbName\":null},\"Disponibilidad\":{\"values\":[{\"name\":\"EN_VENTA\",\"dbName\":null},{\"name\":\"DONACION\",\"dbName\":null},{\"name\":\"VENDIDO\",\"dbName\":null},{\"name\":\"DONADO\",\"dbName\":null}],\"dbName\":null},\"TipoAlmacenaje\":{\"values\":[{\"name\":\"HUACAL\",\"dbName\":null},{\"name\":\"BOLSA\",\"dbName\":null},{\"name\":\"CAJA\",\"dbName\":null},{\"name\":\"CANASTA\",\"dbName\":null},{\"name\":\"OTRO\",\"dbName\":null}],\"dbName\":null},\"Categoria\":{\"values\":[{\"name\":\"FRUTA\",\"dbName\":null},{\"name\":\"VERDURA\",\"dbName\":null}],\"dbName\":null},\"EstadoOrden\":{\"values\":[{\"name\":\"PENDIENTE\",\"dbName\":null},{\"name\":\"EN_PROCESO\",\"dbName\":null},{\"name\":\"RECHAZADO\",\"dbName\":null},{\"name\":\"FINALIZADO\",\"dbName\":null},{\"name\":\"CANCELADO\",\"dbName\":null}],\"dbName\":null},\"EstadoTicket\":{\"values\":[{\"name\":\"PENDIENTE\",\"dbName\":null},{\"name\":\"ACTIVO\",\"dbName\":null},{\"name\":\"CERRADO\",\"dbName\":null}],\"dbName\":null},\"TipoPregunta\":{\"values\":[{\"name\":\"GENERAL\",\"dbName\":null},{\"name\":\"CUENTA\",\"dbName\":null},{\"name\":\"NEGOCIO\",\"dbName\":null},{\"name\":\"CLIENTE\",\"dbName\":null},{\"name\":\"DUENONEGOCIO\",\"dbName\":null},{\"name\":\"ORDEN\",\"dbName\":null},{\"name\":\"PRODUCTOS\",\"dbName\":null},{\"name\":\"INVENTARIO\",\"dbName\":null},{\"name\":\"CHAT\",\"dbName\":null}],\"dbName\":null},\"tipo_mensaje\":{\"values\":[{\"name\":\"TEXTO\",\"dbName\":null},{\"name\":\"IMAGEN\",\"dbName\":null},{\"name\":\"VIDEO\",\"dbName\":null},{\"name\":\"AUDIO\",\"dbName\":null},{\"name\":\"DOCUMENTO\",\"dbName\":null}],\"dbName\":null},\"EstadoPublicacion\":{\"values\":[{\"name\":\"PENDIENTE\",\"dbName\":null},{\"name\":\"ACTIVO\",\"dbName\":null},{\"name\":\"INACTIVO\",\"dbName\":null},{\"name\":\"RECHAZADO\",\"dbName\":null},{\"name\":\"ELIMINADO\",\"dbName\":null},{\"name\":\"VENDIDO\",\"dbName\":null},{\"name\":\"DONADO\",\"dbName\":null}],\"dbName\":null},\"DisponibilidadPublicacion\":{\"values\":[{\"name\":\"EN_VENTA\",\"dbName\":null},{\"name\":\"DONACION\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/client/schema.prisma")
