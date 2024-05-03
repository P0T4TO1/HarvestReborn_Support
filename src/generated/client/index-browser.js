
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
