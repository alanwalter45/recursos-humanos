define({ "api": [
  {
    "type": "post",
    "url": "/areas/remove",
    "title": "REMOVE",
    "name": "BORRAR_AREA",
    "group": "AREA",
    "description": "<p>Boora un area por su identificador.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador del area.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/areas/areas.js",
    "groupTitle": "AREA"
  },
  {
    "type": "post",
    "url": "/areas/update",
    "title": "UPDATE",
    "name": "MODIFICAR_AREA",
    "group": "AREA",
    "description": "<p>Modifica un area por su identificador.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador del area.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del area.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "direccion",
            "description": "<p>direccion del area.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "telefono",
            "description": "<p>telefono del area.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/areas/areas.js",
    "groupTitle": "AREA"
  },
  {
    "type": "get",
    "url": "/areas/get-all",
    "title": "GET ALL",
    "name": "OBTENER_AREAS",
    "group": "AREA",
    "description": "<p>Obtiene todas las areas registradas en el sistema.</p>",
    "version": "0.0.0",
    "filename": "./routes/areas/areas.js",
    "groupTitle": "AREA"
  },
  {
    "type": "post",
    "url": "/biometricos/add",
    "title": "ADD",
    "name": "ADICIONA_UN_BIOMETRICO",
    "group": "BIOMETRICO",
    "description": "<p>Adiciona un bometrico en el sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>identificador del biometrico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ubicacion",
            "description": "<p>ubicacion fisica del biometrico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "observacion",
            "description": "<p>observacion acerca del biometrico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/biometricos/biometricos.js",
    "groupTitle": "BIOMETRICO"
  },
  {
    "type": "post",
    "url": "/biometricos/remove",
    "title": "REMOVE",
    "name": "BORRA_UN_BIOMETRICO",
    "group": "BIOMETRICO",
    "description": "<p>Borra un bometrico por su identificador.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del biometrico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/biometricos/biometricos.js",
    "groupTitle": "BIOMETRICO"
  },
  {
    "type": "post",
    "url": "/biometricos/scan-red",
    "title": "SCAN RED",
    "name": "ESCANEAR_RED",
    "group": "BIOMETRICO",
    "description": "<p>Escanea la red de los biometrico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "rangoIp",
            "description": "<p>rango de ips a escanear.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/biometricos/biometricos.js",
    "groupTitle": "BIOMETRICO"
  },
  {
    "type": "post",
    "url": "/biometricos/set-enable",
    "title": "ENABLE/DISABLE",
    "name": "HABILITAR_DESHABILITAR_UN_BIOMETRICO",
    "group": "BIOMETRICO",
    "description": "<p>Habilita/Deshabilita un bometrico por su identificador.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del biometrico.</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "estado",
            "description": "<p>del biometrico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/biometricos/biometricos.js",
    "groupTitle": "BIOMETRICO"
  },
  {
    "type": "get",
    "url": "/biometricos/get-all",
    "title": "GET ALL",
    "name": "OBTENER_BIOMETRICOS",
    "group": "BIOMETRICO",
    "description": "<p>Obtiene todos los biometricos registrados en el sistema.</p>",
    "version": "0.0.0",
    "filename": "./routes/biometricos/biometricos.js",
    "groupTitle": "BIOMETRICO"
  },
  {
    "type": "post",
    "url": "/biometricos/update",
    "title": "UPDATE",
    "name": "UPDATE_UN_BIOMETRICO",
    "group": "BIOMETRICO",
    "description": "<p>Modifica un bometrico por su identificador.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del biometrico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>del biometrico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>del biometrico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ubicacion",
            "description": "<p>fisica del biometrico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "observacion",
            "description": "<p>acerca del biometrico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/biometricos/biometricos.js",
    "groupTitle": "BIOMETRICO"
  },
  {
    "type": "post",
    "url": "/calificacion-anhos-servicio/add",
    "title": "ADD",
    "name": "ADICIONAR_CALIFICACION_DE_ANHO_DE_SERVICIOS",
    "group": "CALIFICACION_ANHO_SERVICIO",
    "description": "<p>Adiciona una calificacion de anho de servicio.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "anhos",
            "description": "<p>anhos de servicio.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "meses",
            "description": "<p>meses de servicio.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "dias",
            "description": "<p>dias de servicio.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_ultima_calificacion",
            "description": "<p>fecha de la calificacion de anhos de servicio.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comentario",
            "description": "<p>comentario u oboservacion de la calificacion de anho de servicios.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/calificacion_anhos_servicio/calificacion_anhos_servicio.js",
    "groupTitle": "CALIFICACION_ANHO_SERVICIO"
  },
  {
    "type": "post",
    "url": "/calificacion-anhos-servicio/delete",
    "title": "REMOVE",
    "name": "BORRA_CALIFICACION_DE_ANHO_DE_SERVICIOS",
    "group": "CALIFICACION_ANHO_SERVICIO",
    "description": "<p>Borra una calificacion de anho de servicio.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la calificacion de anho de servicio.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/calificacion_anhos_servicio/calificacion_anhos_servicio.js",
    "groupTitle": "CALIFICACION_ANHO_SERVICIO"
  },
  {
    "type": "post",
    "url": "/calificacion-anhos-servicio/get-all-actual",
    "title": "GET ALL ACTUAL",
    "name": "TODAS_LAS_CALIFICACIONES_DE_ANHO_DE_SERVICIOS",
    "group": "CALIFICACION_ANHO_SERVICIO",
    "description": "<p>Obtiene todas las calificaciones de anho de servicio.</p>",
    "version": "0.0.0",
    "filename": "./routes/calificacion_anhos_servicio/calificacion_anhos_servicio.js",
    "groupTitle": "CALIFICACION_ANHO_SERVICIO"
  },
  {
    "type": "post",
    "url": "/cargos/add",
    "title": "ADD",
    "name": "ADICIONA_UN_CARGO",
    "group": "CARGO",
    "description": "<p>adiciona un cargo en una gestion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del cargo.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion donde se guardara el cargo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/cargos/cargos.js",
    "groupTitle": "CARGO"
  },
  {
    "type": "post",
    "url": "/cargos/remove",
    "title": "REMOVE",
    "name": "BORRA_UN_CARGO",
    "group": "CARGO",
    "description": "<p>Borra un cargo en una gestion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del cargo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/cargos/cargos.js",
    "groupTitle": "CARGO"
  },
  {
    "type": "post",
    "url": "/cargos/update",
    "title": "UPDATE",
    "name": "MODIFICA_UN_CARGO",
    "group": "CARGO",
    "description": "<p>Modifica un cargo en una gestion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del cargo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del cargo.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion donde se guardara el cargo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/cargos/cargos.js",
    "groupTitle": "CARGO"
  },
  {
    "type": "get",
    "url": "/cargos/get-all",
    "title": "GET ALL",
    "name": "OBTENER_CARGOS",
    "group": "CARGO",
    "description": "<p>obtener todos los cargos registrados.</p>",
    "version": "0.0.0",
    "filename": "./routes/cargos/cargos.js",
    "groupTitle": "CARGO"
  },
  {
    "type": "get",
    "url": "/cargos/get-all-gestion-actual",
    "title": "GET ALL GESTION ACTUAL",
    "name": "OBTENER_CARGOS_DE_LA_GESTION_ACTUAL",
    "group": "CARGO",
    "description": "<p>obtener todos los cargos registrados en la gestion actual.</p>",
    "version": "0.0.0",
    "filename": "./routes/cargos/cargos.js",
    "groupTitle": "CARGO"
  },
  {
    "type": "post",
    "url": "/cargos/get-all-gestion",
    "title": "GET ALL GESTION",
    "name": "OBTENER_CARGOS_DE_UNA_GESTION",
    "group": "CARGO",
    "description": "<p>obtener todos los cargos registrados en una gestion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/cargos/cargos.js",
    "groupTitle": "CARGO"
  },
  {
    "type": "post",
    "url": "/categorias-programaticas/add",
    "title": "ADD",
    "name": "ADICIONA_UNA_CATEGORIA_PROGRAMATICA",
    "group": "CATEGORIAS_PROGRAMATICAS",
    "description": "<p>Adiciona una categoria programática del mes en curso.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "codigo",
            "description": "<p>codigo de la categoria programatica.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre de la categoria programatica.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo de la categoria programatica.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "categoria_padre",
            "description": "<p>categoria a la que pertenece la categoria programatica.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "unidad_ejecutora",
            "description": "<p>unidad ejecutora de la categoria programatica.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fuente",
            "description": "<p>fuente de la categoria programatica.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "organismo",
            "description": "<p>organismo de la categoria programatica.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/categorias_programaticas/categorias_programaticas.js",
    "groupTitle": "CATEGORIAS_PROGRAMATICAS"
  },
  {
    "type": "post",
    "url": "/categorias-programaticas/update",
    "title": "UPDATE",
    "name": "MODIFICA_UNA_CATEGORIA_PROGRAMATICA",
    "group": "CATEGORIAS_PROGRAMATICAS",
    "description": "<p>Modifica una categoria programática del sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la categoria programatica.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "codigo",
            "description": "<p>codigo de la categoria programatica.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre de la categoria programatica.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo de la categoria programatica.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "categoria_padre",
            "description": "<p>categoria a la que pertenece la categoria programatica.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "unidad_ejecutora",
            "description": "<p>unidad ejecutora de la categoria programatica.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fuente",
            "description": "<p>fuente de la categoria programatica.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "organismo",
            "description": "<p>organismo de la categoria programatica.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/categorias_programaticas/categorias_programaticas.js",
    "groupTitle": "CATEGORIAS_PROGRAMATICAS"
  },
  {
    "type": "get",
    "url": "/categorias-programaticas/get-all-actual",
    "title": "GET ALL ACTUAL",
    "name": "OBTENER_TODAS_LAS_CATEGORIAS_PROGRAMATICAS",
    "group": "CATEGORIAS_PROGRAMATICAS",
    "description": "<p>obteniendo todas la categorias programática del mes en curso.</p>",
    "version": "0.0.0",
    "filename": "./routes/categorias_programaticas/categorias_programaticas.js",
    "groupTitle": "CATEGORIAS_PROGRAMATICAS"
  },
  {
    "type": "get",
    "url": "/categorias-programaticas/get-all-programas-actual",
    "title": "GET ALL PROGRAMAS ACTUAL",
    "name": "OBTENER_TODOS_LOS_PROGRAMAS_DE_LAS_CATEGORIAS_PROGRAMATICAS",
    "group": "CATEGORIAS_PROGRAMATICAS",
    "description": "<p>obteniendo todos los programas de las categorias programática del mes en curso.</p>",
    "version": "0.0.0",
    "filename": "./routes/categorias_programaticas/categorias_programaticas.js",
    "groupTitle": "CATEGORIAS_PROGRAMATICAS"
  },
  {
    "type": "post",
    "url": "/contrataciones-anteriores/add",
    "title": "ADD",
    "name": "ADICIONA_UNA_CONTRATACION_ANTERIOR",
    "group": "CONTRATACION_ANTERIOR",
    "description": "<p>Adiciona una contratacion anterior de un servidor publico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cargo",
            "description": "<p>cargo del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "area",
            "description": "<p>area en la que trabajo el servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_inicio",
            "description": "<p>fecha de inicio de trabajo.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_conclusion",
            "description": "<p>fecha de conclusion de trabajo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comentario",
            "description": "<p>comentario adicional sobre la contratacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/contrataciones_anteriores/contrataciones_anteriores.js",
    "groupTitle": "CONTRATACION_ANTERIOR"
  },
  {
    "type": "post",
    "url": "/contrataciones-anteriores/delete",
    "title": "REMOVE",
    "name": "BORRAR_LA_CONTRATACION_DE_UN_SERVIDOR_PUBLICO",
    "group": "CONTRATACION_ANTERIOR",
    "description": "<p>Borra una contratacion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la contratacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/contrataciones_anteriores/contrataciones_anteriores.js",
    "groupTitle": "CONTRATACION_ANTERIOR"
  },
  {
    "type": "get",
    "url": "/contrataciones-anteriores/get-all",
    "title": "GET ALL",
    "name": "OBTIENE_TODAS_LAS_CONTRATACIONES",
    "group": "CONTRATACION_ANTERIOR",
    "description": "<p>Obtiene todas las contrataciones anteriores.</p>",
    "version": "0.0.0",
    "filename": "./routes/contrataciones_anteriores/contrataciones_anteriores.js",
    "groupTitle": "CONTRATACION_ANTERIOR"
  },
  {
    "type": "post",
    "url": "/contrataciones-anteriores/get-all-actual",
    "title": "GET ALL ACTUAL",
    "name": "OBTIENE_TODAS_LAS_CONTRATACIONES_DEL_MES_ACTUAL",
    "group": "CONTRATACION_ANTERIOR",
    "description": "<p>Obtiene todas las contrataciones del mes actual.</p>",
    "version": "0.0.0",
    "filename": "./routes/contrataciones_anteriores/contrataciones_anteriores.js",
    "groupTitle": "CONTRATACION_ANTERIOR"
  },
  {
    "type": "post",
    "url": "/contrataciones-anteriores/get-all-servidor-publico",
    "title": "GET ALL CONTRATACIONES",
    "name": "OBTIENE_TODAS_LAS_CONTRATACIONES_DE_UN_SERVIDOR_PUBLICO",
    "group": "CONTRATACION_ANTERIOR",
    "description": "<p>Obtiene todas las contrataciones anteriores de un servidor publico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/contrataciones_anteriores/contrataciones_anteriores.js",
    "groupTitle": "CONTRATACION_ANTERIOR"
  },
  {
    "type": "post",
    "url": "/declaraciones-juradas/add",
    "title": "ADD",
    "name": "ADICIONA_UNA_DECLARACION_JURADA",
    "group": "DECLARACION_JURADA",
    "description": "<p>Adiciona una declaracion jurada.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_inicio",
            "description": "<p>fecha de inicio de la declaracion jurada.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_inicio_gde",
            "description": "<p>fecha de inicio del GDE.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_inicio_rrhh",
            "description": "<p>fecha de inicio de RRHH.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "motivo",
            "description": "<p>motivo de la declaracion jurada.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/declaraciones_juradas/declaraciones_juradas.js",
    "groupTitle": "DECLARACION_JURADA"
  },
  {
    "type": "post",
    "url": "/declaraciones-juradas/delete",
    "title": "DELETE",
    "name": "BORRA_UNA_DECLARACION_JURADA",
    "group": "DECLARACION_JURADA",
    "description": "<p>Borra una declaracion jurada.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la declaracion jurada.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/declaraciones_juradas/declaraciones_juradas.js",
    "groupTitle": "DECLARACION_JURADA"
  },
  {
    "type": "get",
    "url": "/declaraciones-juradas/get-all-actual",
    "title": "GET ALL ACTUAL",
    "name": "OBTIENE_TODAS_LAS_DECLARACIONES_JURADAS",
    "group": "DECLARACION_JURADA",
    "description": "<p>Obtiene todas las declaraciones juradas registradas ordenadas por fecha.</p>",
    "version": "0.0.0",
    "filename": "./routes/declaraciones_juradas/declaraciones_juradas.js",
    "groupTitle": "DECLARACION_JURADA"
  },
  {
    "type": "post",
    "url": "/departamentos/get-for-id",
    "title": "GET",
    "name": "OBTIENE_DEPARTAMENTO",
    "group": "DEPARTAMENTO",
    "description": "<p>obtener un departamento por su identificador.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del departamento.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/departamento/departamento.js",
    "groupTitle": "DEPARTAMENTO"
  },
  {
    "type": "get",
    "url": "/departamentos/get-all",
    "title": "GET ALL",
    "name": "OBTIENE_TODOS_LOS_DEPARTAMENTOS",
    "group": "DEPARTAMENTO",
    "description": "<p>obtener todos los departamentos registrados en el sistema.</p>",
    "version": "0.0.0",
    "filename": "./routes/departamento/departamento.js",
    "groupTitle": "DEPARTAMENTO"
  },
  {
    "type": "post",
    "url": "/dias-festivos/add",
    "title": "ADD",
    "name": "ADICIONA_DIA_FESTIVO",
    "group": "DIA_FESTIVO",
    "description": "<p>Adiciona un dia festivo.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>descripcion del dia festivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_festiva",
            "description": "<p>fecha festiva.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/dias_festivos/dias_festivos.js",
    "groupTitle": "DIA_FESTIVO"
  },
  {
    "type": "post",
    "url": "/dias-festivos/remove",
    "title": "REMOVE",
    "name": "BORRA_UN_DIA_FESTIVO",
    "group": "DIA_FESTIVO",
    "description": "<p>Borra un dia festivo.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "dia_festivo_id",
            "description": "<p>identificador del dia festivo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/dias_festivos/dias_festivos.js",
    "groupTitle": "DIA_FESTIVO"
  },
  {
    "type": "post",
    "url": "/dias-festivos/update",
    "title": "UPDATE",
    "name": "MODIFICA_UN_DIA_FESTIVO",
    "group": "DIA_FESTIVO",
    "description": "<p>Modifica un dia festivo.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del dia festivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>descripcion del dia festivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_festiva",
            "description": "<p>fecha festiva.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/dias_festivos/dias_festivos.js",
    "groupTitle": "DIA_FESTIVO"
  },
  {
    "type": "post",
    "url": "/dias-festivos/get-all",
    "title": "GET ALL",
    "name": "OBTIENE_TODOS_LOS_DIAS_FESTIVOS",
    "group": "DIA_FESTIVO",
    "description": "<p>obteniendo todos los dias festivos de la gestion actual.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/dias_festivos/dias_festivos.js",
    "groupTitle": "DIA_FESTIVO"
  },
  {
    "type": "get",
    "url": "/dias-festivos/get-all-actual",
    "title": "GET ALL ACTUAL",
    "name": "OBTIENE_TODOS_LOS_DIAS_FESTIVOS_DE_LA_GESTI_N_ACTUAL",
    "group": "DIA_FESTIVO",
    "description": "<p>obteniendo todos los dias festivos de la gestion actual.</p>",
    "version": "0.0.0",
    "filename": "./routes/dias_festivos/dias_festivos.js",
    "groupTitle": "DIA_FESTIVO"
  },
  {
    "type": "post",
    "url": "/documentos_presentados/update-image",
    "title": "UPDATE IMAGE",
    "name": "MODIFICA_LA_IMAGEN_DE_UN_DOCUMENTO_REGISTRADO",
    "group": "DOCUMENTOS_PRESENTADOS",
    "description": "<p>Modifica la imagen de un documento presentado.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "image",
            "optional": false,
            "field": "file",
            "description": "<p>archivo del documento presentado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/documentos_presentados/documentos_presentados.js",
    "groupTitle": "DOCUMENTOS_PRESENTADOS"
  },
  {
    "type": "post",
    "url": "/documentos_presentados/set-presentado",
    "title": "SET",
    "name": "MODIFICA_SI_PRESENT__DOCUMENTO",
    "group": "DOCUMENTOS_PRESENTADOS",
    "description": "<p>Modifica si presentó documento.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "tickeado",
            "description": "<p>estado del documento presentado.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "documento_presentado_id",
            "description": "<p>identificador del documento.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/documentos_presentados/documentos_presentados.js",
    "groupTitle": "DOCUMENTOS_PRESENTADOS"
  },
  {
    "type": "post",
    "url": "/documentos_presentados/get-all",
    "title": "GET ALL",
    "name": "OBTIENE_TODOS_LOS_DOCUMENTOS_PRESENTADOS",
    "group": "DOCUMENTOS_PRESENTADOS",
    "description": "<p>Obtiene los documentos presentados.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/documentos_presentados/documentos_presentados.js",
    "groupTitle": "DOCUMENTOS_PRESENTADOS"
  },
  {
    "type": "post",
    "url": "/documentos_presentados/reset",
    "title": "RESET",
    "name": "RESETEAR_QUE_DOCUMENTOS_PRESENTO",
    "group": "DOCUMENTOS_PRESENTADOS",
    "description": "<p>Resetea la presentacion de documentos.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/documentos_presentados/documentos_presentados.js",
    "groupTitle": "DOCUMENTOS_PRESENTADOS"
  },
  {
    "type": "get",
    "url": "/doc",
    "title": "DOC",
    "name": "VISUALIZA_LA_DOCUMENTACION",
    "group": "DOC",
    "description": "<p>Muestra la documentacion de la API.</p>",
    "version": "0.0.0",
    "filename": "./routes/doc/doc.js",
    "groupTitle": "DOC"
  },
  {
    "type": "post",
    "url": "/emails/sendemail",
    "title": "SEND EMAIL",
    "name": "ENVIAR_EMAIL",
    "group": "EMAIL",
    "description": "<p>Envia un email.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remitente",
            "description": "<p>remitente.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "destinatario",
            "description": "<p>destinatario.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "asunto",
            "description": "<p>asunto del email.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contenido",
            "description": "<p>contenido del email.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/email/email.js",
    "groupTitle": "EMAIL"
  },
  {
    "type": "post",
    "url": "/escalas-salariales/add",
    "title": "ADD",
    "name": "ADICIONAR_UNA_ESCALA_SALARIAL",
    "group": "ESCALA_SALARIAL",
    "description": "<p>Adiciona una escala salarial.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "cargo_id",
            "description": "<p>identificador del cargo.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "nivel_salarial_id",
            "description": "<p>identificador del nivel salarial.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/escalas_salariales/escalas_salariales.js",
    "groupTitle": "ESCALA_SALARIAL"
  },
  {
    "type": "post",
    "url": "/escalas-salariales/remove",
    "title": "REMOVE",
    "name": "BOORA_ESCALA_SALARIAL",
    "group": "ESCALA_SALARIAL",
    "description": "<p>Borra una escala salarial.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la escala salarial.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/escalas_salariales/escalas_salariales.js",
    "groupTitle": "ESCALA_SALARIAL"
  },
  {
    "type": "post",
    "url": "/escalas-salariales/update",
    "title": "UPDATE",
    "name": "MODIFICA_UNA_ESCALA_SALARIAL",
    "group": "ESCALA_SALARIAL",
    "description": "<p>Modifica una escala salarial.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la escala salarial.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "cargo_id",
            "description": "<p>identificador del cargo.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "nivel_salarial_id",
            "description": "<p>identificador del nivel salarial.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/escalas_salariales/escalas_salariales.js",
    "groupTitle": "ESCALA_SALARIAL"
  },
  {
    "type": "post",
    "url": "/escalas-salariales/get-all",
    "title": "GET ALL",
    "name": "OBTIENE_TODAS_LAS_ESCALAS_SALARIALES",
    "group": "ESCALA_SALARIAL",
    "description": "<p>Obtiene todas las escalas salariales.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/escalas_salariales/escalas_salariales.js",
    "groupTitle": "ESCALA_SALARIAL"
  },
  {
    "type": "get",
    "url": "/escalas-salariales/get-all-gestion-actual",
    "title": "GET ALL ACTUAL",
    "name": "OBTIENE_TODAS_LAS_ESCALAS_SALARIALES",
    "group": "ESCALA_SALARIAL",
    "description": "<p>Obtiene todas las escalas salariales de la gestion actual.</p>",
    "version": "0.0.0",
    "filename": "./routes/escalas_salariales/escalas_salariales.js",
    "groupTitle": "ESCALA_SALARIAL"
  },
  {
    "type": "post",
    "url": "/estructuras/add/row",
    "title": "ADD ROW",
    "name": "ADICIONA_UNA_FILA_A_LA_ESTRUCTURA",
    "group": "ESTRUCTURA",
    "description": "<p>Adiciona un item a la estructura.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "unidad_id",
            "description": "<p>identificador de la unidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "escala_salarial_id",
            "description": "<p>identificador de la escala salarial.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo_contratacion",
            "description": "<p>tipo de contratacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "numero",
            "description": "<p>numero asignado.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "categoria_programatica_id",
            "description": "<p>identificador de la categoria programatica.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/estructuras/estructuras.js",
    "groupTitle": "ESTRUCTURA"
  },
  {
    "type": "post",
    "url": "/estructuras/remove/row",
    "title": "REMOVE ROW",
    "name": "BORRA_UNA_FILA_A_LA_ESTRUCTURA",
    "group": "ESTRUCTURA",
    "description": "<p>Borra un item a la estructura.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la estructura.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/estructuras/estructuras.js",
    "groupTitle": "ESTRUCTURA"
  },
  {
    "type": "post",
    "url": "/estructuras/update/row",
    "title": "UPDATE ROW",
    "name": "MODIFICA_UNA_FILA_A_LA_ESTRUCTURA",
    "group": "ESTRUCTURA",
    "description": "<p>Modifica un item a la estructura.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la estructura.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "unidad_id",
            "description": "<p>identificador de la unidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "escala_salarial_id",
            "description": "<p>identificador de la escala salarial.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo_contratacion",
            "description": "<p>tipo de contratacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "numero",
            "description": "<p>numero en la estructura.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "categoria_programatica_id",
            "description": "<p>identificador de la categoria programatica.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/estructuras/estructuras.js",
    "groupTitle": "ESTRUCTURA"
  },
  {
    "type": "post",
    "url": "/estructuras/get-all",
    "title": "GET ALL",
    "name": "OBTIENE_TODAS_LAS_ESTRUCTURAS",
    "group": "ESTRUCTURA",
    "description": "<p>Obtiene todas las estructuras.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/estructuras/estructuras.js",
    "groupTitle": "ESTRUCTURA"
  },
  {
    "type": "get",
    "url": "/estructuras/get-all-actual",
    "title": "GET ALL ACTUAL",
    "name": "OBTIENE_TODAS_LAS_ESTRUCTURAS",
    "group": "ESTRUCTURA",
    "description": "<p>Obtiene todas las estructuras de la gestion actual.</p>",
    "version": "0.0.0",
    "filename": "./routes/estructuras/estructuras.js",
    "groupTitle": "ESTRUCTURA"
  },
  {
    "type": "post",
    "url": "/estructuras/get",
    "title": "GET",
    "name": "OBTIENE_UNA_ESTRUCTURA",
    "group": "ESTRUCTURA",
    "description": "<p>Obtiene una estructura.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "estructura_id",
            "description": "<p>identificador de la estructura.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/estructuras/estructuras.js",
    "groupTitle": "ESTRUCTURA"
  },
  {
    "type": "post",
    "url": "/areas/delete-publicacion",
    "title": "REMOVE PUBLICACION",
    "name": "BORRA_UNA_IMAGEN_PUBLICACION",
    "group": "FILE",
    "description": "<p>Borra una imagen de la publicacion al sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body.nombreArchvivo",
            "description": "<p>nombre del archivo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./file.js",
    "groupTitle": "FILE"
  },
  {
    "type": "post",
    "url": "/filescopy-file-hoja-vida",
    "title": "IMPORT FILE HOJA DE VIDA",
    "name": "CARGA_HOJA_DE_VIDA",
    "group": "FILE",
    "description": "<p>sube una imagen al sistema de la hoja de vida.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "archivo",
            "description": "<p>a subir.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body.nombreArchvivo",
            "description": "<p>nombre del archivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body.tipoArchvivo",
            "description": "<p>tipo de archivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body.propietario",
            "description": "<p>nombre o identificador del propietario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./file.js",
    "groupTitle": "FILE"
  },
  {
    "type": "post",
    "url": "/areas/upload",
    "title": "UPLOAD IMAGE",
    "name": "CARGA_UNA_IMAGEN",
    "group": "FILE",
    "description": "<p>sube una imagen al sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "archivo",
            "description": "<p>a subir.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body.nombre_archvivo",
            "description": "<p>nombre del archivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body.propietario",
            "description": "<p>nombre o identificador del propietario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./file.js",
    "groupTitle": "FILE"
  },
  {
    "type": "post",
    "url": "/areas/publicacion",
    "title": "UPLOAD PUBLICACION",
    "name": "CARGA_UNA_IMAGEN_PUBLICACION",
    "group": "FILE",
    "description": "<p>sube una imagen de la publicacion al sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "archivo",
            "description": "<p>a subir.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body.nombre_archvivo",
            "description": "<p>nombre del archivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body.propietario",
            "description": "<p>nombre o identificador del propietario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./file.js",
    "groupTitle": "FILE"
  },
  {
    "type": "post",
    "url": "/filescopy-file-biometrico",
    "title": "IMPORT FILE BIOMETRICO",
    "name": "CARGA_UN_ARCHIVO_A_BIOMETRICO",
    "group": "FILE",
    "description": "<p>sube una imagen al sistema para biometrico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "archivo",
            "description": "<p>a subir.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body.nombreArchvivo",
            "description": "<p>nombre del archivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body.tipoArchvivo",
            "description": "<p>tipo de archivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body.propietario",
            "description": "<p>nombre o identificador del propietario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./file.js",
    "groupTitle": "FILE"
  },
  {
    "type": "post",
    "url": "/areas/create-folder",
    "title": "CREATE FOLDER",
    "name": "CREAR_DIRECTORIO",
    "group": "FILE",
    "description": "<p>petición post que crea un directorio en el sistema</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "propietario",
            "description": "<p>carnet de identidad del creador del directorio.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./file.js",
    "groupTitle": "FILE"
  },
  {
    "type": "post",
    "url": "/gestiones/add-month",
    "title": "ADD MONTH",
    "name": "ADICIONAR_MONTH",
    "group": "GESTION",
    "description": "<p>Adicionar un mes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre de la gestion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mes",
            "description": "<p>mes de la gestion.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_inicio",
            "description": "<p>fecha de inicio de la gestion.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_final",
            "description": "<p>fecha final de la gestion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/gestiones/gestiones.js",
    "groupTitle": "GESTION"
  },
  {
    "type": "post",
    "url": "/gestiones/add-year",
    "title": "ADD YEAR",
    "name": "ADICIONAR_YEAR",
    "group": "GESTION",
    "description": "<p>Adicionar un anho.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "anho",
            "description": "<p>anho.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/gestiones/gestiones.js",
    "groupTitle": "GESTION"
  },
  {
    "type": "post",
    "url": "/gestiones/clear-month",
    "title": "CLEAR MONTH",
    "name": "BORRA_MONTH",
    "group": "GESTION",
    "description": "<p>Borra un mes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del mes.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/gestiones/gestiones.js",
    "groupTitle": "GESTION"
  },
  {
    "type": "post",
    "url": "/gestiones/remove-month",
    "title": "REMOVE MONTH",
    "name": "BORRA_MONTH",
    "group": "GESTION",
    "description": "<p>Borra un mes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del mes.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/gestiones/gestiones.js",
    "groupTitle": "GESTION"
  },
  {
    "type": "get",
    "url": "/gestiones/get-all-actual",
    "title": "GET ALL ACTUAL",
    "name": "MESES_DE_LA_GESTION_ACTUAL",
    "group": "GESTION",
    "description": "<p>Obtiene el meses de la gestión seleccionada.</p>",
    "version": "0.0.0",
    "filename": "./routes/gestiones/gestiones.js",
    "groupTitle": "GESTION"
  },
  {
    "type": "get",
    "url": "/gestiones/get-actual",
    "title": "GET ACTUAL",
    "name": "MES_DE_LA_GESTION_ACTUAL",
    "group": "GESTION",
    "description": "<p>Obtiene el mes seleccionado dentro de la gestion actual</p>",
    "version": "0.0.0",
    "filename": "./routes/gestiones/gestiones.js",
    "groupTitle": "GESTION"
  },
  {
    "type": "post",
    "url": "/gestiones/update-month",
    "title": "UPDATE MONTH",
    "name": "MODIFICA_MONTH",
    "group": "GESTION",
    "description": "<p>Modifica un mes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la gestion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "anho",
            "description": "<p>anho de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/gestiones/gestiones.js",
    "groupTitle": "GESTION"
  },
  {
    "type": "post",
    "url": "/gestiones/get-all",
    "title": "GET ALL",
    "name": "OBTIENE_TODAS_LAS_GESTIONES",
    "group": "GESTION",
    "description": "<p>Obtiene todas las gestiones.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/gestiones/gestiones.js",
    "groupTitle": "GESTION"
  },
  {
    "type": "get",
    "url": "/gestiones/get-all-anhos",
    "title": "GET ALL ANHOS",
    "name": "OBTIENE_TODAS_LAS_GESTIONES__ANHOS_",
    "group": "GESTION",
    "description": "<p>Obtiene todas las gestiones (anhos).</p>",
    "version": "0.0.0",
    "filename": "./routes/gestiones/gestiones.js",
    "groupTitle": "GESTION"
  },
  {
    "type": "post",
    "url": "/gestiones/tickear-anho",
    "title": "TICKEAR ANHO",
    "name": "TICKEAR_ANHO",
    "group": "GESTION",
    "description": "<p>Tickear una gestion (anho) como actual.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la gestion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "anho",
            "description": "<p>anho.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/gestiones/gestiones.js",
    "groupTitle": "GESTION"
  },
  {
    "type": "post",
    "url": "/gestiones/tickear-gestion",
    "title": "TICKEAR MES",
    "name": "TICKEAR_MES",
    "group": "GESTION",
    "description": "<p>Tickear una gestion como actual.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del mes.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mes",
            "description": "<p>mes.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/gestiones/gestiones.js",
    "groupTitle": "GESTION"
  },
  {
    "type": "post",
    "url": "/logs/add",
    "title": "ADD",
    "name": "ADICIONA_LOG_DE_REGISTRO",
    "group": "LOG",
    "description": "<p>Adiciona un log en el sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "usuario",
            "description": "<p>usuario del sistema.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>direccion ip del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accion",
            "description": "<p>accion que realizo el usuario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/logs/logs.js",
    "groupTitle": "LOG"
  },
  {
    "type": "get",
    "url": "/logs",
    "title": "GET",
    "name": "OBTIENE_LOGS",
    "group": "LOG",
    "description": "<p>Obtiene los log.</p>",
    "version": "0.0.0",
    "filename": "./routes/logs/logs.js",
    "groupTitle": "LOG"
  },
  {
    "type": "post",
    "url": "/logs/last3",
    "title": "LAST3",
    "name": "OBTIENE_TODOS_LOS_ULTIMOS_6_ACCESOS",
    "group": "LOG",
    "description": "<p>Obtiene los ultimos 6 accesos al sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/logs/logs.js",
    "groupTitle": "LOG"
  },
  {
    "type": "get",
    "url": "/tools/import-clean",
    "title": "CLEAN IMPORT XLSX",
    "name": "CLEAN_XLSX_CENTRALIZADOR",
    "group": "MIGRATION",
    "description": "<p>Limpiar importacion de informacion desde xlsx centralizador.</p>",
    "version": "0.0.0",
    "filename": "./routes/migrations/migrations.js",
    "groupTitle": "MIGRATION"
  },
  {
    "type": "get",
    "url": "/tools/create-structure",
    "title": "CREATE ESTRUCTURE",
    "name": "CREAR_ESTRUCTURA",
    "group": "MIGRATION",
    "description": "<p>crea una estructura a partir de archivo xlsx llamadao (estructura.xlsx).</p>",
    "version": "0.0.0",
    "filename": "./routes/migrations/migrations.js",
    "groupTitle": "MIGRATION"
  },
  {
    "type": "post",
    "url": "/tools/import-centralizador-xlsx",
    "title": "CENTRALIZADOR XLSX",
    "name": "IMPORT_XLSX_CENTRALIZADOR",
    "group": "MIGRATION",
    "description": "<p>Importar informacion desde xlsx centralizador.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del mes.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/migrations/migrations.js",
    "groupTitle": "MIGRATION"
  },
  {
    "type": "post",
    "url": "/municipios/get-for-id",
    "title": "GET MUNICIPIO",
    "name": "OBTENER_MUNICIPIO",
    "group": "MUNICIPIO",
    "description": "<p>obtiene un municipio por su identificador.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del municipio.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/municipio/municipio.js",
    "groupTitle": "MUNICIPIO"
  },
  {
    "type": "post",
    "url": "/municipios/get-all",
    "title": "GET ALL",
    "name": "OBTENER_MUNICIPIOS",
    "group": "MUNICIPIO",
    "description": "<p>obtiene todos los municipios registrados en el sistema.</p>",
    "version": "0.0.0",
    "filename": "./routes/municipio/municipio.js",
    "groupTitle": "MUNICIPIO"
  },
  {
    "type": "post",
    "url": "/municipios/get-municipios",
    "title": "GET MUNICIPIOS",
    "name": "OBTENER_MUNICIPIOS_DE_UNA_PROVINCIA",
    "group": "MUNICIPIO",
    "description": "<p>obtiene todos los municipios de una provincia.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "provincia_id",
            "description": "<p>identificador de la provincia.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/municipio/municipio.js",
    "groupTitle": "MUNICIPIO"
  },
  {
    "type": "post",
    "url": "/niveles-salariales/add",
    "title": "ADD",
    "name": "ADICIONA_NIVEL_SALARIAL",
    "group": "NIVEl_SALARIAL",
    "description": "<p>Adiciona un nivel salarial.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "nivel",
            "description": "<p>nivel salarial.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "haber_basico",
            "description": "<p>haber basico salarial.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/niveles_salariales/niveles_salariales.js",
    "groupTitle": "NIVEl_SALARIAL"
  },
  {
    "type": "post",
    "url": "/niveles-salariales/remove",
    "title": "REMOVE",
    "name": "BORRA_NIVEL_SALARIAL",
    "group": "NIVEl_SALARIAL",
    "description": "<p>Borra un nivel salarial.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del nivel salarial.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/niveles_salariales/niveles_salariales.js",
    "groupTitle": "NIVEl_SALARIAL"
  },
  {
    "type": "post",
    "url": "/niveles-salariales/udate",
    "title": "UPDATE",
    "name": "MODIFICA_NIVEL_SALARIAL",
    "group": "NIVEl_SALARIAL",
    "description": "<p>Modifica un nivel salarial.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "nivel",
            "description": "<p>nivel salarial.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "haber_basico",
            "description": "<p>haber basico salarial.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del nivel salarial.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/niveles_salariales/niveles_salariales.js",
    "groupTitle": "NIVEl_SALARIAL"
  },
  {
    "type": "get",
    "url": "/niveles-salariales/get-all",
    "title": "GET ALL",
    "name": "OBTENER_NIVELES_SALARIALES",
    "group": "NIVEl_SALARIAL",
    "description": "<p>obtiene todos los niveles salariales.</p>",
    "version": "0.0.0",
    "filename": "./routes/niveles_salariales/niveles_salariales.js",
    "groupTitle": "NIVEl_SALARIAL"
  },
  {
    "type": "get",
    "url": "/niveles-salariales/get-all-gestion-actual",
    "title": "GET ALL ACTUAL",
    "name": "OBTENER_NIVELES_SALARIALES",
    "group": "NIVEl_SALARIAL",
    "description": "<p>obtiene niveles salariales de la gestion actual.</p>",
    "version": "0.0.0",
    "filename": "./routes/niveles_salariales/niveles_salariales.js",
    "groupTitle": "NIVEl_SALARIAL"
  },
  {
    "type": "post",
    "url": "/paises/get-all",
    "title": "GET",
    "name": "OBTENER_PAIS",
    "group": "PAIS",
    "description": "<p>obtener un pais por su identificador.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del pais.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/pais/pais.js",
    "groupTitle": "PAIS"
  },
  {
    "type": "get",
    "url": "/paises/get-all",
    "title": "GET ALL",
    "name": "OBTENER_PAISES",
    "group": "PAIS",
    "description": "<p>obtener todos los paises registrados en el sistema.</p>",
    "version": "0.0.0",
    "filename": "./routes/pais/pais.js",
    "groupTitle": "PAIS"
  },
  {
    "type": "post",
    "url": "/parametros/update",
    "title": "UPDATE",
    "name": "MODIFICA_PARAMETROS",
    "group": "PARAMETRO",
    "description": "<p>modifica los parametros del sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "poai_fecha_inicio",
            "description": "<p>fecha de inicio del POAI.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "poai_numero_dias",
            "description": "<p>numero de dias que estara habilitado el POAI.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "pomi_fecha_inicio",
            "description": "<p>fecha de inicio del POMI.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pomi_numero_dias",
            "description": "<p>numero de dias que estara habilitado el POMI.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/parametros/parametros.js",
    "groupTitle": "PARAMETRO"
  },
  {
    "type": "post",
    "url": "/parametros/get",
    "title": "GET",
    "name": "OBTENER_PARAMETROS",
    "group": "PARAMETRO",
    "description": "<p>obtener todos los parametros del sistema durante el anho.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/parametros/parametros.js",
    "groupTitle": "PARAMETRO"
  },
  {
    "type": "post",
    "url": "/permisos/agregar",
    "title": "ADD",
    "name": "ADICIONA_FORMULARIO_DE_S_LIDA",
    "group": "PERMISO",
    "description": "<p>Adiciona un formulario de salida a su registro personal.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fechaHoraSalida",
            "description": "<p>fecha y hora de salida</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fechaHoraRetorno",
            "description": "<p>fecha y hora de retorno</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "estado",
            "description": "<p>estado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "observacion",
            "description": "<p>observación</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/permisos/permisos.js",
    "groupTitle": "PERMISO"
  },
  {
    "type": "post",
    "url": "/permisos/actualizar-estado",
    "title": "UPDATE",
    "name": "MODIFICA_FORMULARIO_DE_S_LIDA",
    "group": "PERMISO",
    "description": "<p>Modificar estado del permiso de salida.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "estado",
            "description": "<p>estado del permiso.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "permiso_id",
            "description": "<p>identificador del permiso.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mmotivo_cambio_estado",
            "description": "<p>motivo del cambio de estado del permiso.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/permisos/permisos.js",
    "groupTitle": "PERMISO"
  },
  {
    "type": "post",
    "url": "/permisos/servants-dependientes",
    "title": "SERVANT DEPENDIENTES",
    "name": "OBTENER_PERMISOS_DE_SERVIDOREs_P_BLICOS_DEPENDIENTES",
    "group": "PERMISO",
    "description": "<p>Obtiene todos los permisos de los servidores públicos dependientes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico inmediato superior.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/permisos/permisos.js",
    "groupTitle": "PERMISO"
  },
  {
    "type": "post",
    "url": "/permisos/all",
    "title": "GET ALL",
    "name": "OBTENER_PERMISOS_DE_UN_SERVIDOR_P_BLICO",
    "group": "PERMISO",
    "description": "<p>Obtiene odos los permisos registrados en el sistema.</p>",
    "version": "0.0.0",
    "filename": "./routes/permisos/permisos.js",
    "groupTitle": "PERMISO"
  },
  {
    "type": "post",
    "url": "/permisos/servant",
    "title": "GET PERMISO SERVANT",
    "name": "OBTENER_PERMISOS_DE_UN_SERVIDOR_P_BLICO",
    "group": "PERMISO",
    "description": "<p>Obtiene los permisos de un servidor publico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor público.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/permisos/permisos.js",
    "groupTitle": "PERMISO"
  },
  {
    "type": "post",
    "url": "/planillas/buscar",
    "title": "SEARCH",
    "name": "BUSCAR_UN_SERVIDOR_PUBLICO_EN_LA_PLANILLA",
    "group": "PLANILLA",
    "description": "<p>Obtiene la planilla mensual.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_importacion",
            "description": "<p>decha de importacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/planillas/planillas.js",
    "groupTitle": "PLANILLA"
  },
  {
    "type": "post",
    "url": "/planillas/update",
    "title": "UPDATE",
    "name": "MODIFICAR_REGISTRO_EN_LA_PLANILLA",
    "group": "PLANILLA",
    "description": "<p>modifica un registro en la planilla mensual.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la planilla.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "matrimonio",
            "description": "<p>numero de dias por matrimonio.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "duelo",
            "description": "<p>numero de dias por duelo.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "nacimiento",
            "description": "<p>numero de dias por nacimiento.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "vacacion",
            "description": "<p>numero de dias por vacacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "numbre",
            "optional": false,
            "field": "baja_medica",
            "description": "<p>numero de dias por baja medica.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "viaje",
            "description": "<p>numero de dias por viaje.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "ausente",
            "description": "<p>numero de dias por ausencia.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "comision",
            "description": "<p>numero de dias por comision.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lsgh",
            "description": "<p>numero de dias por licecncia sin goce de haber.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "retraso",
            "description": "<p>numero de minutos por retraso</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo_cargo",
            "description": "<p>tipo de cargo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/planillas/planillas.js",
    "groupTitle": "PLANILLA"
  },
  {
    "type": "get",
    "url": "/planillas",
    "title": "GET ALL",
    "name": "OBTENER_PLANILLA_MENSUAL",
    "group": "PLANILLA",
    "description": "<p>Obtiene la planilla mensual de zkteco.</p>",
    "version": "0.0.0",
    "filename": "./routes/planillas/planillas.js",
    "groupTitle": "PLANILLA"
  },
  {
    "type": "post",
    "url": "/planillas/get-servant",
    "title": "GET",
    "name": "OBTENER_SERVIDOR_PUBLICO_EN_LA_PLANILLA",
    "group": "PLANILLA",
    "description": "<p>Obtiene un servidor publico en la planilla mensual.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_importacion",
            "description": "<p>decha de importacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/planillas/planillas.js",
    "groupTitle": "PLANILLA"
  },
  {
    "type": "post",
    "url": "/planillas/tickear",
    "title": "TICKEAR",
    "name": "TICKEAR_REGISTRO_EN_LA_PLANILLA",
    "group": "PLANILLA",
    "description": "<p>Tickear un registro en la planilla mensual.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "tickeado",
            "description": "<p>estado del registro (tickeado).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "carnet_identidad",
            "description": "<p>numero de carnet de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_importacion",
            "description": "<p>fecha de importacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/planillas/planillas.js",
    "groupTitle": "PLANILLA"
  },
  {
    "type": "post",
    "url": "/procesos-llamadas/add",
    "title": "ADD",
    "name": "ADICIONAR_PROCESOS_O_LLAMADA",
    "group": "PROCESOS_Y_LLAMADAS",
    "description": "<p>adiciona un proceso o llamada</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero",
            "description": "<p>del proceso.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>del proceso o llamada.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_llamada_proceso",
            "description": "<p>fecha de la llamada o proceso.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_modificacion",
            "description": "<p>fecha de modificacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo (proceso/llamada).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/procesos_llamadas/procesos_llamadas.js",
    "groupTitle": "PROCESOS_Y_LLAMADAS"
  },
  {
    "type": "post",
    "url": "/procesos-llamadas/delete",
    "title": "REMOVE",
    "name": "BORRA_PROCESO_O_LLAMADA",
    "group": "PROCESOS_Y_LLAMADAS",
    "description": "<p>Borra un proceso o llamada</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "numero_proceso",
            "description": "<p>numero del proceso</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/procesos_llamadas/procesos_llamadas.js",
    "groupTitle": "PROCESOS_Y_LLAMADAS"
  },
  {
    "type": "post",
    "url": "/procesos-llamadas/update",
    "title": "UPDATE",
    "name": "MODIFICA_PROCESOS_O_LLAMADA",
    "group": "PROCESOS_Y_LLAMADAS",
    "description": "<p>modifica un proceso o llamada.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_proceso",
            "description": "<p>numero del proceso.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>descripcion.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_llamada_proceso",
            "description": "<p>fecha de la llamada o proceso.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo de proceso/llamada.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/procesos_llamadas/procesos_llamadas.js",
    "groupTitle": "PROCESOS_Y_LLAMADAS"
  },
  {
    "type": "post",
    "url": "/procesos-llamadas/get-all",
    "title": "GET ALL",
    "name": "OBTIENE_TODOS_LOS_PROCESOS_LLAMADAS_DE_UN_REGISTRO",
    "group": "PROCESOS_Y_LLAMADAS",
    "description": "<p>Obtiene los procesos/llamadas de un registro</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/procesos_llamadas/procesos_llamadas.js",
    "groupTitle": "PROCESOS_Y_LLAMADAS"
  },
  {
    "type": "get",
    "url": "/procesos-llamadas/get-incumplimiento-reglamento",
    "title": "GET INCUMPLIMIENTO",
    "name": "OBTIENE_TODOS_LOS_PROCESOS_QUE_INCUMPLEN_REGLAMENTO",
    "group": "PROCESOS_Y_LLAMADAS",
    "description": "<p>Obtiene los procesos que incumplen reglamento de un registro.</p>",
    "version": "0.0.0",
    "filename": "./routes/procesos_llamadas/procesos_llamadas.js",
    "groupTitle": "PROCESOS_Y_LLAMADAS"
  },
  {
    "type": "post",
    "url": "/programaciones-anuales/add",
    "title": "ADD ACTIVITY",
    "name": "ADICIONAR_UNA_ACTIVIDAD_POAI",
    "group": "PROGRAMACION_ANUAL",
    "description": "<p>registrar una nueva actividad al POAI</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_inicio",
            "description": "<p>fecha de inicio.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_conclusion",
            "description": "<p>fecha de conclusion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "producto",
            "description": "<p>producto.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "actividad",
            "description": "<p>actividad.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_anuales/programaciones_anuales.js",
    "groupTitle": "PROGRAMACION_ANUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-mensuales/crear-programacion-default",
    "title": "CREATE DEFAULT POAI.",
    "name": "A_ADE_20_ACTIVIDADES_AL_POAI",
    "group": "PROGRAMACION_ANUAL",
    "description": "<p>crea la PROGRAMACION por defecto que consta de 20 actividades obligadas a realizar durante el año.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_anuales/programaciones_anuales.js",
    "groupTitle": "PROGRAMACION_ANUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-mensuales/exportar",
    "title": "EXPORT POAI.",
    "name": "EXPORTA_EL_POAI",
    "group": "PROGRAMACION_ANUAL",
    "description": "<p>Exporta el POAI.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero de documento de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombres",
            "description": "<p>nombre del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido_paterno",
            "description": "<p>apellido paterno del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido_materno",
            "description": "<p>apellido materno del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cargo",
            "description": "<p>cargo del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "nivel_salarial",
            "description": "<p>nivel salarial del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "secretaria",
            "description": "<p>secretaria en la que trabaja.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "direccion_jefatura",
            "description": "<p>direccion o jefatura en la que trabaja.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "relacion_laboral",
            "description": "<p>relacion laboral que tien (ITEM / CONTRATO)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero",
            "description": "<p>numero de (ITEM/CONTRATO).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion",
            "description": "<p>gestion a la que corresponde.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "aclaracion_cambio_area",
            "description": "<p>aclaracion del cambio de area.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "objetivo_cargo",
            "description": "<p>objetivo del cargo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "aclaracion_firma_sp",
            "description": "<p>aclaracion de la firma.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_elaboracion",
            "description": "<p>fecha de elaboracion.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "productos",
            "description": "<p>lista de productos.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_anuales/programaciones_anuales.js",
    "groupTitle": "PROGRAMACION_ANUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-anuales/edit",
    "title": "UPDATE ACTIVITY",
    "name": "MODIFICA_ACTIVIDAD",
    "group": "PROGRAMACION_ANUAL",
    "description": "<p>modifica una actividad</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la actividad.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_inicio",
            "description": "<p>fecha de inicio.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_conclusion",
            "description": "<p>fecha de conclusion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "actividad",
            "description": "<p>actividad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fuente",
            "description": "<p>fuente de verficacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_anuales/programaciones_anuales.js",
    "groupTitle": "PROGRAMACION_ANUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-anuales/update-actividad-producto-programacion-anual",
    "title": "UPDATE ACTIVIDAD PRODUCTO PROGRAMACION ANUAL",
    "name": "MODIFICA_UNA_ACTIVIDAD_DE_UN_PRODUCTO_DE_LA_PROGRAMACIONES_DEL_A_O_EN_CURSO_POAI",
    "group": "PROGRAMACION_ANUAL",
    "description": "<p>modifica una actividad de un producto en la PROGRAMACION del año en curso de un registro del servidor público</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la programacion anual.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "actividad",
            "description": "<p>actividad.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_anuales/programaciones_anuales.js",
    "groupTitle": "PROGRAMACION_ANUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-anuales/update-producto-programacion-anual",
    "title": "UPDATE PRODUCTO PROGRAMACION ANUAL",
    "name": "MODIFICA_UN_PRODUCTO_DE_LA_PROGRAMACIONES_DEL_A_O_EN_CURSO_POAI",
    "group": "PROGRAMACION_ANUAL",
    "description": "<p>obtiene la PROGRAMACION del año en curso de un registro del servidor público</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la programacion anual.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "producto",
            "description": "<p>producto.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_conclusion",
            "description": "<p>fecha de conclusion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fuente_verificacion",
            "description": "<p>fuente de verficacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "porcentaje_asignado",
            "description": "<p>porcentaje asignado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_anuales/programaciones_anuales.js",
    "groupTitle": "PROGRAMACION_ANUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-anuales/get-programacion-anual-registro",
    "title": "GET PROGRAMACION",
    "name": "OBTENER_PROGRAMACIONES_DEL_A_O_EN_CURSO_POAI",
    "group": "PROGRAMACION_ANUAL",
    "description": "<p>obtiene la PROGRAMACION del año (poai) en curso de un registro del servidor público</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_anuales/programaciones_anuales.js",
    "groupTitle": "PROGRAMACION_ANUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-anuales/get-programacion-anual",
    "title": "GET PROGRAMACION ANUAL",
    "name": "OBTENER_PROGRAMACIONES_DEL_A_O_EN_CURSO_POAI",
    "group": "PROGRAMACION_ANUAL",
    "description": "<p>obtiene la PROGRAMACION del año en curso de un registro del servidor público</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_anuales/programaciones_anuales.js",
    "groupTitle": "PROGRAMACION_ANUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-anuales/get3-actividades",
    "title": "GET3 ACTIVITIS",
    "name": "OBTIENE_3_ACTIVIDAD",
    "group": "PROGRAMACION_ANUAL",
    "description": "<p>modifica una actividad</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del producto.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_anuales/programaciones_anuales.js",
    "groupTitle": "PROGRAMACION_ANUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-anuales/get-productos-programacion-anual",
    "title": "GET PRODUCTOS PROGRAMACION ANUAL",
    "name": "OBTIENE_LOS_PRODUCTOS_DE_LA_PROGRAMACIONES_DEL_A_O_EN_CURSO_POAI",
    "group": "PROGRAMACION_ANUAL",
    "description": "<p>obtiene la PROGRAMACION del año en curso de un registro del servidor público</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la programacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_anuales/programaciones_anuales.js",
    "groupTitle": "PROGRAMACION_ANUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-anuales/update-programacion-anual",
    "title": "UPDATE PROGRAMACION ANUAL",
    "name": "OBTIENE_LOS_PRODUCTOS_DE_LA_PROGRAMACIONES_DEL_A_O_EN_CURSO_POAI",
    "group": "PROGRAMACION_ANUAL",
    "description": "<p>obtiene la PROGRAMACION del año en curso de un registro del servidor público</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "aclaracion_cambio_area",
            "description": "<p>aclaracion del cambio de area.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "objetivo_cargo",
            "description": "<p>objetivo del cargo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_anuales/programaciones_anuales.js",
    "groupTitle": "PROGRAMACION_ANUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-mensuales/add",
    "title": "ADD",
    "name": "ADICIONAR_UNA_ACTIVIDAD",
    "group": "PROGRAMACION_MENSUAL",
    "description": "<p>registrar una nueva actividad</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha",
            "description": "<p>fecha de la programacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lugar",
            "description": "<p>lugar de la actividad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "producto",
            "description": "<p>producto que generara la actividad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "actividad",
            "description": "<p>actividad que realizara.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_mensuales/programaciones_mensuales.js",
    "groupTitle": "PROGRAMACION_MENSUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-mensuales/crear-programacion-default",
    "title": "CREATE PROGRAMACION DEFAUT",
    "name": "A_ADE_5_ACTIVIDADES",
    "group": "PROGRAMACION_MENSUAL",
    "description": "<p>crea la PROGRAMACION por defecto que consta de 5 actividades obligadas a realizar</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_mensuales/programaciones_mensuales.js",
    "groupTitle": "PROGRAMACION_MENSUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-mensuales/exportar",
    "title": "EXPORT",
    "name": "EXPORTAR_LOS_PERMISOS_DEL_MES_ACTUAL",
    "group": "PROGRAMACION_MENSUAL",
    "description": "<p>obtener todos los permisos del mes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero de documento de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombres",
            "description": "<p>nombre del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido_paterno",
            "description": "<p>apellido paterno del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido_materno",
            "description": "<p>apellido materno del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cargo",
            "description": "<p>cargo del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "nivel_salarial",
            "description": "<p>nivel salarial del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "secretaria",
            "description": "<p>secretaria en la que trabaja.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "direccion_jefatura",
            "description": "<p>direccion o jefatura en la que trabaja.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "relacion_laboral",
            "description": "<p>relacion laboral que tien (ITEM / CONTRATO)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero",
            "description": "<p>numero de (ITEM/CONTRATO).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion",
            "description": "<p>gestion a la que corresponde.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "aclaracion_cambio_area",
            "description": "<p>aclaracion del cambio de area.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "objetivo_cargo",
            "description": "<p>objetivo del cargo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "aclaracion_firma_sp",
            "description": "<p>aclaracion de la firma.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_elaboracion",
            "description": "<p>fecha de elaboracion.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "productos",
            "description": "<p>lista de productos.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_mensuales/programaciones_mensuales.js",
    "groupTitle": "PROGRAMACION_MENSUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-mensuales/edit-actividad",
    "title": "UPDATE ACTIVITY",
    "name": "MODIFICA_ACTIVIDAD",
    "group": "PROGRAMACION_MENSUAL",
    "description": "<p>modifica una actividad</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la actividad.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha",
            "description": "<p>fecha de la programacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lugar",
            "description": "<p>lugar de la actividad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "producto",
            "description": "<p>producto que generara la actividad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "actividad",
            "description": "<p>actividad que realizara.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cumplimiento_ejecucion",
            "description": "<p>cumplimiento y ejecucion de la actividad.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_mensuales/programaciones_mensuales.js",
    "groupTitle": "PROGRAMACION_MENSUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-mensuales/get-programacion-mensual-registro",
    "title": "GET PROGRAMACION REGISTRO.",
    "name": "OBTENER_PROGRAMACION_DE_UN_REGISITRO_DEL_MES_EN_CURSO",
    "group": "PROGRAMACION_MENSUAL",
    "description": "<p>obtiene la PROGRAMACION del mes en curso de un registro del servidor público</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_mensuales/programaciones_mensuales.js",
    "groupTitle": "PROGRAMACION_MENSUAL"
  },
  {
    "type": "get",
    "url": "/programaciones-mensuales/get-all",
    "title": "GET ALL",
    "name": "TODOS_LOS_PERMISOS_DEL_MES_ACTUAL",
    "group": "PROGRAMACION_MENSUAL",
    "description": "<p>obtener todos los permisos del mes.</p>",
    "version": "0.0.0",
    "filename": "./routes/programaciones_mensuales/programaciones_mensuales.js",
    "groupTitle": "PROGRAMACION_MENSUAL"
  },
  {
    "type": "post",
    "url": "/programaciones-mensuales-viajes/add",
    "title": "ADD",
    "name": "ADICIONAR_UNA_ACTIVIDAD",
    "group": "PROGRAMACION_MENSUAL_VIAJE",
    "description": "<p>registrar una nueva actividad</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "permiso_id",
            "description": "<p>ifentificador del permiso.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha",
            "description": "<p>de la actividad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lugar",
            "description": "<p>lugar de la actividad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "actividad",
            "description": "<p>de la actividad.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_mensuales_viajes/programaciones_mensuales_viajes.js",
    "groupTitle": "PROGRAMACION_MENSUAL_VIAJE"
  },
  {
    "type": "post",
    "url": "/programaciones-mensuales-viajes/remove-actividad-programacion-mensual-registro",
    "title": "REMOVE ACTIVIDAD PROGRAMACION ANUAL REGISTRO",
    "name": "BORRA_UNA_ACTIVIDAD_DE_LA_PROGRAMACION_DEL_REGISTRO",
    "group": "PROGRAMACION_MENSUAL_VIAJE",
    "description": "<p>borra una actividad de la programacion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la programacion mensual viaje.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_mensuales_viajes/programaciones_mensuales_viajes.js",
    "groupTitle": "PROGRAMACION_MENSUAL_VIAJE"
  },
  {
    "type": "post",
    "url": "/programaciones-mensuales-viajes/update-actividad/resultado",
    "title": "UPDATE ACTIVIDAD RESULTADO",
    "name": "MODIFICA_EL_RESULTADO_DE_UNA_ACTIVIDAD_DE_LA_PROGRAMACION_DEL_REGISTRO",
    "group": "PROGRAMACION_MENSUAL_VIAJE",
    "description": "<p>Modifica el resultado de una actividad de la programacion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la programacion mensual viaje.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cumplimiento_ejecucion",
            "description": "<p>cumplimiento_ejecucion de la programacion mensual viaje.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_mensuales_viajes/programaciones_mensuales_viajes.js",
    "groupTitle": "PROGRAMACION_MENSUAL_VIAJE"
  },
  {
    "type": "post",
    "url": "/programaciones-mensuales-viajes/update-actividad",
    "title": "UPDATE ACTIVIDAD",
    "name": "MODIFICA_UNA_ACTIVIDAD_DE_LA_PROGRAMACION_DEL_REGISTRO",
    "group": "PROGRAMACION_MENSUAL_VIAJE",
    "description": "<p>Modifica una actividad de la programacion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la programacion mensual viaje.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fecha",
            "description": "<p>fecha de la programacion mensual viaje.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lugar",
            "description": "<p>lugar de la programacion mensual viaje.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "actividad",
            "description": "<p>actividad de la programacion mensual viaje.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_mensuales_viajes/programaciones_mensuales_viajes.js",
    "groupTitle": "PROGRAMACION_MENSUAL_VIAJE"
  },
  {
    "type": "post",
    "url": "/programaciones-mensuales-viajes/get-programacion-mensual-registro",
    "title": "GET PROGRAMACION ANUAL REGISTRO",
    "name": "OBTIEN_UNA_PROGRAMACION_DEL_REGISTRO",
    "group": "PROGRAMACION_MENSUAL_VIAJE",
    "description": "<p>registrar una nueva actividad</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "permiso_id",
            "description": "<p>ifentificador del permiso.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/programaciones_mensuales_viajes/programaciones_mensuales_viajes.js",
    "groupTitle": "PROGRAMACION_MENSUAL_VIAJE"
  },
  {
    "type": "post",
    "url": "/provincias/get-for-id",
    "title": "GET FOR ID",
    "name": "OBTENER_PROVINCIA",
    "group": "PROVINCIA",
    "description": "<p>obtiene una provincia.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la provincia.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/provincias/provincias.js",
    "groupTitle": "PROVINCIA"
  },
  {
    "type": "get",
    "url": "/provincias/get-all",
    "title": "GET ALL",
    "name": "OBTENER_PROVINCIAS",
    "group": "PROVINCIA",
    "description": "<p>obtiene todas la provincias registradas en el sistema.</p>",
    "version": "0.0.0",
    "filename": "./routes/provincias/provincias.js",
    "groupTitle": "PROVINCIA"
  },
  {
    "type": "post",
    "url": "/provincias/get-provincias",
    "title": "GET PROVINCIAS",
    "name": "OBTENER_PROVINCIAS_DEPARTAMENTO",
    "group": "PROVINCIA",
    "description": "<p>obtiene todas la provincias de un departamento.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "departamento_id",
            "description": "<p>identificador del departamento.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/provincias/provincias.js",
    "groupTitle": "PROVINCIA"
  },
  {
    "type": "get",
    "url": "/publicaciones/all",
    "title": "GET 15 PUBLICACIONES",
    "name": "15_ULTIMAS_PUBLICACIONES",
    "group": "PUBLICACION",
    "description": "<p>obtiene una lista de las 15 ultimas publicaciones realizada.</p>",
    "version": "0.0.0",
    "filename": "./routes/publicaciones/publicaciones.js",
    "groupTitle": "PUBLICACION"
  },
  {
    "type": "post",
    "url": "/publicaciones/add",
    "title": "ADD",
    "name": "ADICIONA_PUBLICACION",
    "group": "PUBLICACION",
    "description": "<p>Adiciona una publicacion al sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numeroDocumento",
            "description": "<p>numero de carnet de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "texto",
            "description": "<p>texto descripcion de la publicacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tituloEnlace",
            "description": "<p>titulo del enlace de la publicacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "imagen",
            "description": "<p>imagen de la publicacion</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "textoEnlace",
            "description": "<p>texto del enlace en la publicacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/publicaciones/publicaciones.js",
    "groupTitle": "PUBLICACION"
  },
  {
    "type": "post",
    "url": "/publicaciones/delete",
    "title": "REMOVE",
    "name": "BORRA_PUBLICACION",
    "group": "PUBLICACION",
    "description": "<p>Boora una publicacion al sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "autorCi",
            "description": "<p>numero de carnet de identidad.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/publicaciones/publicaciones.js",
    "groupTitle": "PUBLICACION"
  },
  {
    "type": "post",
    "url": "/publicaciones/servant",
    "title": "PUBLICACIONES DE UN SERVIDOR PUBLICO",
    "name": "OBTENER_PROVINCIA",
    "group": "PUBLICACION",
    "description": "<p>obtiene las publicaciones que realizo un servidor publico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>numero de documento del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/publicaciones/publicaciones.js",
    "groupTitle": "PUBLICACION"
  },
  {
    "type": "post",
    "url": "/registros/update-fecha-conclusion",
    "title": "UPDATE FECHA DE CONCLUSION",
    "name": "ACTUALIZAR_FECHA_DE_CONCLUSION",
    "group": "REGISTRO",
    "description": "<p>Actualiza fecha de conclusion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_conclusion",
            "description": "<p>fecha de conclusion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/update-fecha-inicio",
    "title": "UPDATE FECHA INICIO",
    "name": "ACTUALIZAR_FECHA_DE_INICIO",
    "group": "REGISTRO",
    "description": "<p>Actualiza la fecha de inicio.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_inicio",
            "description": "<p>fecha de inicio.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/update-numero-contratacion",
    "title": "UPDATE NUMERO CONTRATACION",
    "name": "ACTUALIZAR_NUMERO_DE_CONTRATACION",
    "group": "REGISTRO",
    "description": "<p>Actualiza el numero de contratacion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "estructura_id",
            "description": "<p>identificador de la estructura.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/update-observado",
    "title": "UPDATE OBSERVADO",
    "name": "ACTUALIZAR_OBSERVADO",
    "group": "REGISTRO",
    "description": "<p>Actualiza observado.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "observado",
            "description": "<p>observado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/add-cursos-capacitaciones",
    "title": "ADD CURSO Y CAPACITACION",
    "name": "ADICIONAR_CURSO_O_CAPACITACI_N",
    "group": "REGISTRO",
    "description": "<p>adiciona un nuevo curso o capacitación</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "titulo_certificado",
            "description": "<p>titulo del certificado.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lugar",
            "description": "<p>lugar.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "institucion",
            "description": "<p>institucion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "horas_academicas",
            "description": "<p>cantidad de horas academicas.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_emision",
            "description": "<p>fecha de emision.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/add-informacion-academica",
    "title": "ADD INFORMACION ACADEMICA",
    "name": "ADICIONAR_INFORMACI_N_AC_DEMICA",
    "group": "REGISTRO",
    "description": "<p>adiciona un registro la información acádemica.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lugar",
            "description": "<p>lugar.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "institucion",
            "description": "<p>institucion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "anho",
            "description": "<p>anho.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "titulo_obtenido",
            "description": "<p>titulo obtenido.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_titulo",
            "description": "<p>numero de titulo.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha",
            "description": "<p>de emision.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/add-autorizacion-profesion",
    "title": "ADD AUTORIZACION DE PROFESION",
    "name": "ADICIONA_AUTORIZACI_N_DE_PROFESI_N",
    "group": "REGISTRO",
    "description": "<p>adiciona autorización de profesión</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "entidad",
            "description": "<p>entidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "matricula",
            "description": "<p>matricula.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha",
            "description": "<p>fecha.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/add-experiencias-laborales",
    "title": "ADD EXPERIENCIA LABORAL",
    "name": "ADICIONA_EXPERIENCIA_LABORAL",
    "group": "REGISTRO",
    "description": "<p>adiciona experiencia laboral</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cargo",
            "description": "<p>cargo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "area",
            "description": "<p>area.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "institucion",
            "description": "<p>institucion.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_incio",
            "description": "<p>fecha de incio.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_conclusion",
            "description": "<p>fecha de conclusion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/add-idiomas",
    "title": "ADD IDIOMA",
    "name": "ADICIONA_IDIOMA",
    "group": "REGISTRO",
    "description": "<p>adiciona un idioma</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "idioma",
            "description": "<p>idioma.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lee",
            "description": "<p>lee.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comprende",
            "description": "<p>comprende.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "escribe",
            "description": "<p>escribe.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "observaciones.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/add-otros-conocimientos",
    "title": "ADD OTROS CONOCIMIENTOS",
    "name": "ADICIONA_OTRO_CONOCIMIENTO",
    "group": "REGISTRO",
    "description": "<p>adiciona otro conocimiento.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paquete_informatico",
            "description": "<p>paquete informatico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nivel",
            "description": "<p>nivel.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/add-referencias-personales",
    "title": "ADD REFERENCIA PERSONAL",
    "name": "ADICIONA_REFERENCIA_PERSONAL",
    "group": "REGISTRO",
    "description": "<p>adiciona referencia personal</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "direccion",
            "description": "<p>direccion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "telefono",
            "description": "<p>telefono.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "observaciones",
            "description": "<p>observaciones.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/remove",
    "title": "REMOVE",
    "name": "BORRA_UN_REGISTRO",
    "group": "REGISTRO",
    "description": "<p>Borra un registro.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/contratar",
    "title": "CONTRATAR",
    "name": "CONTRATAR_UN_SERVIDOR_PUBLICO",
    "group": "REGISTRO",
    "description": "<p>contratar un servidor publico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "estrauctura_id",
            "description": "<p>identificaor de la estructura.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_inicio",
            "description": "<p>fecha de inicio.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_conlusion",
            "description": "<p>fecha de conclusion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/dar-baja",
    "title": "DOWN REGISTRO",
    "name": "DAR_DE_BAJA_UN_REGISTRO",
    "group": "REGISTRO",
    "description": "<p>Dar de baja a un registro</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_conclusion",
            "description": "<p>fecha de conclusion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "motivo_conclusion",
            "description": "<p>motivo de la conlusion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-contratacion",
    "title": "GET INFORMACION CONTRATACION",
    "name": "INFORMACI_N_DE_CONTRATACI_N",
    "group": "REGISTRO",
    "description": "<p>Obtiene la información de contratación del servidor publico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/edit-cursos-capacitaciones",
    "title": "UPDATE CURSO Y CAPACITACION",
    "name": "MODIFICAR_CURSO_O_CAPACITACI_N",
    "group": "REGISTRO",
    "description": "<p>modificar un nuevo curso o capacitación</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "titulo_certificado",
            "description": "<p>titulo del certificado.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lugar",
            "description": "<p>lugar.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "institucion",
            "description": "<p>institucion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "horas_academicas",
            "description": "<p>cantidad de horas academicas.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_emision",
            "description": "<p>fecha de emision.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/update-estado",
    "title": "UPDATE ESTADO REGISTRO",
    "name": "MODIFICAR_ESTADO_DE_UN_REGISTRO",
    "group": "REGISTRO",
    "description": "<p>actualizar el estado de un registro</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "estado",
            "description": "<p>estado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/update-estado",
    "title": "dar de alta un registro",
    "name": "MODIFICAR_ESTADO_DE_UN_REGISTRO_COMO_ALTA",
    "group": "REGISTRO",
    "description": "<p>modifica el estado del registro como alta.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_inicio",
            "description": "<p>fecha de inicio.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "forma_ingreso",
            "description": "<p>forma de ingreso.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/update-informacion-academica",
    "title": "UPDATE INFO ACADEMICA",
    "name": "MODIFICAR_INFORMACI_N_ACADEMICA",
    "group": "REGISTRO",
    "description": "<p>actualiza la informacion acdemica de registro.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "profesion",
            "description": "<p>profesion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nivel_instruccion",
            "description": "<p>nivel de instruccion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "matricula_colegio_profesionales",
            "description": "<p>matricula colegio de profesionales.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "casa_estudios",
            "description": "<p>casa de estudios.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_resolucion_titulo",
            "description": "<p>numero de resolucion del titulo.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_emision_titulo",
            "description": "<p>fecha de emision del titulo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_resolucion_provision_nacional",
            "description": "<p>numero de resolucion de provision nacional.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_emision_provision_nacional",
            "description": "<p>fecha de emision en provision nacional.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "titulo_postgrado",
            "description": "<p>titulo_postgrado titulo postgrado.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "casa_estudios_postgrado",
            "description": "<p>casa de estudios postgrado.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_resolucion_postgrado",
            "description": "<p>numero de resolucion de postgrado.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_emision_postgrado",
            "description": "<p>fecha de emision de postgraddo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "otros_conocimientos",
            "description": "<p>otros conocimientos.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "escuela_colegio",
            "description": "<p>escuela/colegio</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/update-servant",
    "title": "UPDATE SERVANT",
    "name": "MODIFICAR_INFORMACI_N_GENERAL",
    "group": "REGISTRO",
    "description": "<p>actualiza la información general de un servidor público.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento_anterior",
            "description": "<p>numero de carnet de identidad anterior.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero de carnet de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento_expedido",
            "description": "<p>numero de carnet de identidad fue expedido en ....</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombres",
            "description": "<p>nombres.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido_paterno",
            "description": "<p>apellido paterno.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido_materno",
            "description": "<p>apellido materno.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "estado_civil",
            "description": "<p>estado civil.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "genero",
            "description": "<p>genero.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "direccion",
            "description": "<p>direccion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "telefono_movil",
            "description": "<p>telefono movil.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_nacimiento",
            "description": "<p>fecha de nacimiento.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pais_id",
            "description": "<p>identificador del pais.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "departamento_id",
            "description": "<p>identificador del departamento.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "provincia_id",
            "description": "<p>identificador de la provincia.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "municipio_id",
            "description": "<p>identificador del municipio.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "correo_electronico",
            "description": "<p>correo electronico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "distrito",
            "description": "<p>distrito.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "localidad",
            "description": "<p>localidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "licencia_conducir",
            "description": "<p>licencia de conducir.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/edit-otros-conocimientos",
    "title": "UPDATE OTRO CONOCIMIENTO",
    "name": "MODIFICAR_OTRO_CONOCIMIENTO",
    "group": "REGISTRO",
    "description": "<p>modificar otro conocimiento.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "paquete_informatico",
            "description": "<p>paquete informatico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nivel",
            "description": "<p>nivel.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/edit-autorizacion-profesion",
    "title": "UPDATE AUTORIZACION DE PROFESION",
    "name": "MODIFICA_AUTORIZACI_N_DE_PROFESI_N",
    "group": "REGISTRO",
    "description": "<p>modifica autorización de profesión</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "entidad",
            "description": "<p>entidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha",
            "description": "<p>fecha.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/edit-experiencias-laborales",
    "title": "UPDATE EXPERIENCIA LABORAL",
    "name": "MODIFICA_EXPERIENCIA_LABORAL",
    "group": "REGISTRO",
    "description": "<p>modifica experiencia laboral</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "strring",
            "optional": false,
            "field": "cargo",
            "description": "<p>cargo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "area",
            "description": "<p>area.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "institucion",
            "description": "<p>institucion.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_inicio",
            "description": "<p>fecha de inicio.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_conclusion",
            "description": "<p>fecha de conclusion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/edit-idiomas",
    "title": "UPDATE IDIOMA",
    "name": "MODIFICA_IDIOMA",
    "group": "REGISTRO",
    "description": "<p>modifica un idioma.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "idioma",
            "description": "<p>idioma.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lee",
            "description": "<p>lee.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comprende",
            "description": "<p>comprende.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "escribe",
            "description": "<p>escribe.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "observaciones",
            "description": "<p>observaciones.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/edit-referencias-personales",
    "title": "UPDATE REFERENCIA PERSONAL",
    "name": "MODIFICA_REFERENCIA_PERSONAL",
    "group": "REGISTRO",
    "description": "<p>modifica referencia personal</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "direccion",
            "description": "<p>direccion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "telefono",
            "description": "<p>telefono.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "observaciones",
            "description": "<p>observaciones.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "get",
    "url": "/registros/get-total-secretaria",
    "title": "GET TOTAL SECRETARIA",
    "name": "OBTENER_INFORMACION_DE_LAS_SECRETARIAS",
    "group": "REGISTRO",
    "description": "<p>obtiene la informacion de las secretarias.</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-experiencias-laborales",
    "title": "GET INFORMACION \"experiencias laborales\"",
    "name": "OBTENER_INFORMACION_EXPERIENCIAS_LABORALES",
    "group": "REGISTRO",
    "description": "<p>obtiene información &quot;experiencias laborales&quot;.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-asignacion-familiar",
    "title": "GET INFORMACION ASIGNACION FAMILIAR",
    "name": "OBTENER_INFORMACI_N_ASIGNACION_FAMILIAR",
    "group": "REGISTRO",
    "description": "<p>obtiene la información de asignacion familiar.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-academica2",
    "title": "GET INFORMACION ACADEMICA.",
    "name": "OBTENER_INF_ACADEMICA",
    "group": "REGISTRO",
    "description": "<p>obtiene información academica de un servidor publico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-afiliacion-afp",
    "title": "GET INFORMACION \"afiliacion afp\"",
    "name": "OBTENER_INF_AFILIACION_AFP",
    "group": "REGISTRO",
    "description": "<p>obtiene información &quot;afiliacion afp&quot;.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-afiliacion-caja-afp",
    "title": "GET INFORMACION \"afiliacion caja afp\".",
    "name": "OBTENER_INF_AFILIACI_N_CAJA_AFP",
    "group": "REGISTRO",
    "description": "<p>obtiene información &quot;afiliación caja de salud&quot;.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-afiliacion-caja-salud",
    "title": "GET INFORMACION \"afiliacion caja salud\".",
    "name": "OBTENER_INF_AFILIACI_N_CAJA_DE_SALUD",
    "group": "REGISTRO",
    "description": "<p>obtiene información &quot;afiliación caja de salud&quot;.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-autorizacion-profesion",
    "title": "GET INFORMACION \"autorización de ejercicio deprofesión\"",
    "name": "OBTENER_INF_AUTORIZACI_N_PROFESI_N",
    "group": "REGISTRO",
    "description": "<p>obtiene información &quot;autorización de ejercicio deprofesión&quot;</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-cursos-capacitaciones",
    "title": "GET INFORMACION CURSOS CAPACITACIONES.",
    "name": "OBTENER_INF_CURSOS_CAPACITACIONES",
    "group": "REGISTRO",
    "description": "<p>obtiene información cursos capacitaciones.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-discapacidad",
    "title": "GET INF DISCAPACIDAD.",
    "name": "OBTENER_INF_DISCAPACIDAD",
    "group": "REGISTRO",
    "description": "<p>obtiene información &quot;discapacidad&quot;.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-discapacidad",
    "title": "GET INFORMACION \"discapacidad\".",
    "name": "OBTENER_INF_DISCAPACIDAD",
    "group": "REGISTRO",
    "description": "<p>obtiene información &quot;discapacidad&quot;.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-idiomas",
    "title": "GET INFORMACION IDIOMAS.",
    "name": "OBTENER_INF_IDIOMAS",
    "group": "REGISTRO",
    "description": "<p>obtiene información idiomas.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-militar",
    "title": "GET INFORMACION MILITAR",
    "name": "OBTENER_INF_MILITAR",
    "group": "REGISTRO",
    "description": "<p>obtiene información militar.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-otros-conocimientos",
    "title": "GET INFORMACION \"otros conocimientos\".",
    "name": "OBTENER_INF_OTROS_CONOCIMIENTOS",
    "group": "REGISTRO",
    "description": "<p>obtiene información &quot;otros conocimientos&quot;.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-redes-sociales",
    "title": "GET INFORMACION \"redes sociales\"",
    "name": "OBTENER_INF_REDES_SOCIALES",
    "group": "REGISTRO",
    "description": "<p>obtiene información &quot;redes sociales&quot;.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-referencias-personales",
    "title": "GET INFORMACION \"referencias personales\".",
    "name": "OBTENER_INF_REFERENCIAS_PERSONALES",
    "group": "REGISTRO",
    "description": "<p>obtiene información &quot;referncias personales&quot;.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get",
    "title": "GET REGISTRO",
    "name": "OBTENER_REGISTRO",
    "group": "REGISTRO",
    "description": "<p>Obtiene la información de un registro</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero de documento del servidor público.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "get",
    "url": "/registros/get-all-gestion-actual",
    "title": "GET ALL GESTION ACTUAL",
    "name": "OBTENER_REGISTROS_DEL_MES_EN_CURSO",
    "group": "REGISTRO",
    "description": "<p>obtiene todos los registros del mes tikeado como seleccionado (en curso).</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "get",
    "url": "/registros/get-all-con-requisitos",
    "title": "GET ALL CON REQUISITOS",
    "name": "OBTENER_SERVIDORES_PUBLICOS_CON_REQUISITOS",
    "group": "REGISTRO",
    "description": "<p>obtener todos los servidores publicos con requisitos.</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-all-funcionarios-dependientes",
    "title": "GET ALL DEPENDIENTES",
    "name": "OBTENER_TODOS_LOS_DEPENDIENTES",
    "group": "REGISTRO",
    "description": "<p>Obtiene todos los servidores publicos dependientes</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero de documento de identidad</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "get",
    "url": "/registros/get-total-edad-genero",
    "title": "GET TOTAL EDAD GENERO",
    "name": "OBTENER_TOTAL_EDAD_GENERO",
    "group": "REGISTRO",
    "description": "<p>obtiene la informacion del total edad y genero.</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "get",
    "url": "/registros/get-total-inamovilidad",
    "title": "GET TOTAL INAMOVILIDAD",
    "name": "OBTENER_TOTAL_INAMOVILIDAD",
    "group": "REGISTRO",
    "description": "<p>obtiene la informacion del total inamovilidad.</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "get",
    "url": "/registros/get-total-procesos-llamadas",
    "title": "GET TOTAL MUNICIPIO",
    "name": "OBTENER_TOTAL_MUNICIPIO",
    "group": "REGISTRO",
    "description": "<p>obtiene la informacion del total municipio.</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "get",
    "url": "/registros/get-total-procesos-llamadas",
    "title": "GET TOTAL PROCESOS Y LLAMADAS",
    "name": "OBTENER_TOTAL_PROCESO_Y_LLAMADA",
    "group": "REGISTRO",
    "description": "<p>obtiene la informacion del total proceso y llamada.</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/get-all",
    "title": "GET ALL MONTH",
    "name": "OBTIENE_TODOS_LOS_REGISTROS_DE_UN_MES",
    "group": "REGISTRO",
    "description": "<p>Obtiene los registros de un me en especifico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTRO"
  },
  {
    "type": "post",
    "url": "/registros/delete-informacion-academica2",
    "title": "borra información académica a un registro.",
    "name": "ADICIONAR_INFORMACI_N_AC_DEMICA",
    "group": "REGISTROS",
    "description": "<p>borrar un registro información acádemica.</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/delete-autorizacion-profesion",
    "title": "borrar autorizacion de profesión.",
    "name": "BORRAR_AUTORIZACI_N_DE_PROFESI_N",
    "group": "REGISTROS",
    "description": "<p>borrar autorizacion de profesión.</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/delete-cursos-capacitaciones",
    "title": "borrar un nuevo curso o capacitación",
    "name": "BORRAR_CURSO_O_CAPACITACI_N",
    "group": "REGISTROS",
    "description": "<p>borrar un nuevo curso o capacitación</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/delete-experiencias-laborales",
    "title": "borrar experiencias laborales",
    "name": "BORRAR_EXPERIENCIA_LABORAL",
    "group": "REGISTROS",
    "description": "<p>borrar experiencia laboral</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/delete-idiomas",
    "title": "borrar un nuevo idioma",
    "name": "BORRAR_IDIOMA",
    "group": "REGISTROS",
    "description": "<p>borrar un idioma</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/delete-otros-conocimientos",
    "title": "borrar otro conocimiento",
    "name": "BORRAR_OTRO_CONOCIMIENTO",
    "group": "REGISTROS",
    "description": "<p>borrar otro conocimiento</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/delete-referencias-personales",
    "title": "borrar referencia personal",
    "name": "BORRAR_REFERENCIA_PERSONAL",
    "group": "REGISTROS",
    "description": "<p>borrar referencia personal</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/edit-informacion-academica2",
    "title": "editar información acdemica a un registro",
    "name": "EDITAR_INFORMACI_N_AC_DEMICA",
    "group": "REGISTROS",
    "description": "<p>editar un registro la información acádemica.</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/update-afiliacion-afp",
    "title": "actualizando información afialiación afp.",
    "name": "MODIFICAR_INFORMACI_N_AFILIACI_N_AFP",
    "group": "REGISTROS",
    "description": "<p>actualiza la información afiliación afp de un servidor público.</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/update-afiliacion-caja",
    "title": "actualizando información afialiación caja.",
    "name": "MODIFICAR_INFORMACI_N_AFILIACI_N_CAJA",
    "group": "REGISTROS",
    "description": "<p>actualiza la información afiliación caja de un servidor público.</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/update-informacion-discapacidad",
    "title": "actualizando información discapacidad.",
    "name": "MODIFICAR_INFORMACI_N_DISCAPACIDAD",
    "group": "REGISTROS",
    "description": "<p>actualiza la información discapacidad de un servidor público.</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/update-informacion-militar",
    "title": "actualizando información militar.",
    "name": "MODIFICAR_INFORMACI_N_MILITAR",
    "group": "REGISTROS",
    "description": "<p>actualiza la información militar de un servidor público.</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/update-redes-sociales",
    "title": "modifica la información redes sociales de un registro",
    "name": "MODIFICAR_INFORMACI_N_REDES_SOCIALES",
    "group": "REGISTROS",
    "description": "<p>modifica a información de redes sociales ddel servidor público</p>",
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-contratacion-sp",
    "title": "GET INFORMACION DE CONTRATACION",
    "name": "OBTENER_INFORMACI_N_DE_CONTRATACI_N_DE_UN_REGISTRO",
    "group": "REGISTROS",
    "description": "<p>Obtiene la información de contratación de un registro.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor público.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-all-contrataciones",
    "title": "GET INFORMACION TODAS CONTRATACIONES",
    "name": "OBTENER_INFORMACI_N_DE_TODAS_LAS_CONTRATACIONES",
    "group": "REGISTROS",
    "description": "<p>Obtiene la información de todas las contrataciones.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero del carnet de identidad.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/registros/get-inf-politica",
    "title": "GET INFORMACION POLITICA",
    "name": "OBTENER_INFORMACI_N_POLITICA",
    "group": "REGISTROS",
    "description": "<p>obtiene la información de politica de un registro.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/registros/registros.js",
    "groupTitle": "REGISTROS"
  },
  {
    "type": "post",
    "url": "/requisitos/add",
    "title": "ADD",
    "name": "ADICIONA_UN_REQUISITOS",
    "group": "REQUISITO",
    "description": "<p>Adiciona un requsito.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del requisito.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ubicacion",
            "description": "<p>ubicacion del requisito.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/requisitos/requisitos.js",
    "groupTitle": "REQUISITO"
  },
  {
    "type": "post",
    "url": "/requisitos/remove",
    "title": "REMOVE",
    "name": "BORRA_UN_REQUISITO",
    "group": "REQUISITO",
    "description": "<p>Borra un requsito.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del requisito.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/requisitos/requisitos.js",
    "groupTitle": "REQUISITO"
  },
  {
    "type": "post",
    "url": "/requisitos/update",
    "title": "UPDATE",
    "name": "MODIFICA_UN_REQUISITO",
    "group": "REQUISITO",
    "description": "<p>Modifica un requsito.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>identificador del requisito.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del requisito.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ubicacion",
            "description": "<p>ubicacion del tramite o requisito.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/requisitos/requisitos.js",
    "groupTitle": "REQUISITO"
  },
  {
    "type": "post",
    "url": "/requisitos/get-all",
    "title": "GET ALL",
    "name": "OBTIENE_TODOS_LOS_REQUISITOS",
    "group": "REQUISITO",
    "description": "<p>Obtiene todos los requisitos.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/requisitos/requisitos.js",
    "groupTitle": "REQUISITO"
  },
  {
    "type": "post",
    "url": "/servidores_publicos/update-autorizacion-formulario",
    "title": "UPDATE AUTORIZACION FORMULARIO.",
    "name": "MODIFICA_AUTORIZACION_FORMULARIO",
    "group": "SERVIDORES_PUBLICOS_DEL_SISTEMA",
    "description": "<p>actualiza la autorizacion del formulario.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero del carnet de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "autorizacion_formulario_informacion_personal",
            "description": "<p>autorizacion del formulario personal.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/servidores_publicos/servidores_publicos.js",
    "groupTitle": "SERVIDORES_PUBLICOS_DEL_SISTEMA"
  },
  {
    "type": "post",
    "url": "/servidores_publicos/update-informacion-general",
    "title": "UPDATE INFORMACION GENERAL.",
    "name": "MODIFICA_INFORMACION_GENERAL",
    "group": "SERVIDORES_PUBLICOS_DEL_SISTEMA",
    "description": "<p>actualiza la informacion general de registro.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero del carnet de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "profesion",
            "description": "<p>profesion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nivel_instruccion",
            "description": "<p>nivel de instruccion.</p>"
          },
          {
            "group": "Parameter",
            "type": "strgin",
            "optional": false,
            "field": "matricula_colegio_profesionales",
            "description": "<p>matricula del colegio de profesionales.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "casa_estudios",
            "description": "<p>casa de estudios.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_resolucion_titulo",
            "description": "<p>numero de resolucion del titulo.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_emision_titulo",
            "description": "<p>fecha de emision del titulo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_resolucion_provision_nacional",
            "description": "<p>numero de resolucion de provision nacional.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_emision_provision_nacional",
            "description": "<p>fecha de emision provision nacional.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "titulo_postgrado",
            "description": "<p>titulo del postgrado.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "casa_estudios_postgrado",
            "description": "<p>casa de estudios postgrado.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_resolucion_postgrado",
            "description": "<p>numero de resolucion de postagrado.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_emision_postgrado",
            "description": "<p>fecha de emision postgrado.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "otros_conocimientos",
            "description": "<p>otros conocimientos.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/servidores_publicos/servidores_publicos.js",
    "groupTitle": "SERVIDORES_PUBLICOS_DEL_SISTEMA"
  },
  {
    "type": "post",
    "url": "/servidores_publicos/update-autorizacion-formulario-informacion-personal",
    "title": "UPDATE AUTORIZACION FORMULARIO INFORMACION PERSONAL.",
    "name": "MODIFICA_LA_AUTORIZACION_FORMULARIO_INFORMACION_PERSONAL",
    "group": "SERVIDORES_PUBLICOS_DEL_SISTEMA",
    "description": "<p>modifica la autorizacion del formulario.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero del carnet de identidad.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/servidores_publicos/servidores_publicos.js",
    "groupTitle": "SERVIDORES_PUBLICOS_DEL_SISTEMA"
  },
  {
    "type": "post",
    "url": "/servidores_publicos/update-informacion-contratacion",
    "title": "UPDATE AUTORIZACION INFORMACION CONTRATACION.",
    "name": "MODIFICA_LA_AUTORIZACION_INFORMACION_CONTRATACION",
    "group": "SERVIDORES_PUBLICOS_DEL_SISTEMA",
    "description": "<p>modifica la informacion de la contracion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero del carnet de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento_registro",
            "description": "<p>numero de documento del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "relacion_laboral",
            "description": "<p>relacion laboral.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_contrato",
            "description": "<p>numero de contratacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cargo",
            "description": "<p>cargo.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "nivel_salarial",
            "description": "<p>nivel salarial.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "haber_basico",
            "description": "<p>haber basico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lugar_trabajo",
            "description": "<p>lugar de trabajo.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_ingreso",
            "description": "<p>fecha de ingreso.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_conclusion",
            "description": "<p>fecha de conclusion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "motivo_conclusion",
            "description": "<p>motivo de la conclusion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "estado",
            "description": "<p>estado.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "forma_ingreso",
            "description": "<p>forma de ingreso.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "unidad_trabajo",
            "description": "<p>unidad de trabajo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "secretaria",
            "description": "<p>secretaria.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "programa_proyecto",
            "description": "<p>programa/proyecto.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "es_tecnico_campo",
            "description": "<p>es tecnico de campo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/servidores_publicos/servidores_publicos.js",
    "groupTitle": "SERVIDORES_PUBLICOS_DEL_SISTEMA"
  },
  {
    "type": "post",
    "url": "/servidores_publicos/update-informacion-contratacion",
    "title": "UPDATE AUTORIZACION INFORMACION CONTRATACION.",
    "name": "MODIFICA_LA_AUTORIZACION_INFORMACION_CONTRATACION",
    "group": "SERVIDORES_PUBLICOS_DEL_SISTEMA",
    "description": "<p>modifica la informacion de la contracion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero del carnet de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento_registro",
            "description": "<p>numero de documento del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "relacion_laboral",
            "description": "<p>relacion laboral.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_contrato",
            "description": "<p>numero de contratacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cargo",
            "description": "<p>cargo.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "nivel_salarial",
            "description": "<p>nivel salarial.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "haber_basico",
            "description": "<p>haber basico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lugar_trabajo",
            "description": "<p>lugar de trabajo.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_ingreso",
            "description": "<p>fecha de ingreso.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_conclusion",
            "description": "<p>fecha de conclusion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "motivo_conclusion",
            "description": "<p>motivo de la conclusion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "estado",
            "description": "<p>estado.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "forma_ingreso",
            "description": "<p>forma de ingreso.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "unidad_trabajo",
            "description": "<p>unidad de trabajo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "secretaria",
            "description": "<p>secretaria.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "programa_proyecto",
            "description": "<p>programa/proyecto.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "es_tecnico_campo",
            "description": "<p>es tecnico de campo.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/servidores_publicos/servidores_publicos.js",
    "groupTitle": "SERVIDORES_PUBLICOS_DEL_SISTEMA"
  },
  {
    "type": "post",
    "url": "/servidores_publicos/update-image",
    "title": "UPDATE IMAGE",
    "name": "MODIFICA_LA_IMAGEN",
    "group": "SERVIDORES_PUBLICOS_DEL_SISTEMA",
    "description": "<p>modifica la imagen de un servidor publico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>archivo de imagen.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body.propietario",
            "description": "<p>propietario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/servidores_publicos/servidores_publicos.js",
    "groupTitle": "SERVIDORES_PUBLICOS_DEL_SISTEMA"
  },
  {
    "type": "post",
    "url": "/servidores_publicos/update",
    "title": "UPDATE SERVIDOR PUBLICO.",
    "name": "MODIFICA_SERVIDOR_PUBLICO",
    "group": "SERVIDORES_PUBLICOS_DEL_SISTEMA",
    "description": "<p>modifica la informacion de los servidores publicos.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero del carnet de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento_expedido",
            "description": "<p>numero de documento expedido.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombres",
            "description": "<p>nombres.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido_paterno",
            "description": "<p>apellido paterno.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido_materno",
            "description": "<p>apellido materno.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "estado_civil",
            "description": "<p>estado civil.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/servidores_publicos/servidores_publicos.js",
    "groupTitle": "SERVIDORES_PUBLICOS_DEL_SISTEMA"
  },
  {
    "type": "post",
    "url": "/servidores_publicos/get-image",
    "title": "GET IMAGE",
    "name": "OBTENER_IMAGEN",
    "group": "SERVIDORES_PUBLICOS_DEL_SISTEMA",
    "description": "<p>obtiene la imagen de un servidor publico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero del carnet de identidad.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/servidores_publicos/servidores_publicos.js",
    "groupTitle": "SERVIDORES_PUBLICOS_DEL_SISTEMA"
  },
  {
    "type": "get",
    "url": "/servidores_publicos/get-all",
    "title": "GET ALL",
    "name": "OBTIENE_TODOS_LOS_SERVIDORES_P_BLICOS_DEl_SISTEMA",
    "group": "SERVIDORES_PUBLICOS_DEL_SISTEMA",
    "description": "<p>Obtiene los documentos presentados de un registro</p>",
    "version": "0.0.0",
    "filename": "./routes/servidores_publicos/servidores_publicos.js",
    "groupTitle": "SERVIDORES_PUBLICOS_DEL_SISTEMA"
  },
  {
    "type": "post",
    "url": "/servidores-publicos/add",
    "title": "ADD SERVIDOR PUBLICO",
    "name": "ADICIONA_SERVIDOR_P_BLICO",
    "group": "SERVIDOR_P_BLICO",
    "description": "<p>Adiciona servidor publico</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero de carnet de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento_expedido",
            "description": "<p>numero de documento expedido.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombres.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido_paterno",
            "description": "<p>apellido paterno.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido_materno",
            "description": "<p>apellido materno.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "estado_civil",
            "description": "<p>estado civil.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/servidores_publicos/servidores_publicos.js",
    "groupTitle": "SERVIDOR_P_BLICO"
  },
  {
    "type": "post",
    "url": "/servidores-publicos/edit-codigo-biometrico",
    "title": "EDIT CODIGO BIOMETRICO",
    "name": "MODIFICA_El_CODIGO_BIOMETRICO",
    "group": "SERVIDOR_P_BLICO",
    "description": "<p>Modifica el codigo biometrico</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero de carnet de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "codigo_biometrico",
            "description": "<p>codigo biometrico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/servidores_publicos/servidores_publicos.js",
    "groupTitle": "SERVIDOR_P_BLICO"
  },
  {
    "type": "get",
    "url": "/sys/can-update-planificacion",
    "title": "UPDATE PLANIFICACION EJECUCION",
    "name": "SE_PUEDE_A_ADIR_EJECUCI_N_Y_CUPLIMIENTO",
    "group": "SISTEMA",
    "description": "<p>establece si puedes modificar la planificación mensual (valido del 06 al penultimo día de cada mes)</p>",
    "version": "0.0.0",
    "filename": "./routes/sys/sys.js",
    "groupTitle": "SISTEMA"
  },
  {
    "type": "get",
    "url": "/sys/can-update-planificacion-ejecucion-anual",
    "title": "UPDATE POAI EJECUCION",
    "name": "SE_PUEDE_A_ADIR_EJECUCI_N_Y_CUPLIMIENTO_AL_POAI",
    "group": "SISTEMA",
    "description": "<p>establece si puedes modificar la planificación anual (valido del 16 al penultimo día del año)</p>",
    "version": "0.0.0",
    "filename": "./routes/sys/sys.js",
    "groupTitle": "SISTEMA"
  },
  {
    "type": "post",
    "url": "/sys/can-update-planificacion",
    "title": "UPDATE PLANIFICAION",
    "name": "SE_PUEDE_MODIFICAR_LA_PLANIFICACI_N",
    "group": "SISTEMA",
    "description": "<p>establece si puedes modificar la planificación mensual (valido del 01 al 05 de cada mes)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "pomi_fecha_inicio",
            "description": "<p>fecha de inicio del POMI.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "pomi_numero_dias",
            "description": "<p>numero de dias del POMI.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/sys/sys.js",
    "groupTitle": "SISTEMA"
  },
  {
    "type": "post",
    "url": "/sys/can-update-planificacion-anual",
    "title": "UPDATE PLANIFICACION ANUAL",
    "name": "SE_PUEDE_MODIFICAR_LA_PLANIFICACI_N_ANUAL",
    "group": "SISTEMA",
    "description": "<p>establece si puedes modificar la planificación anual (valido del 01 al 15 del mes de enero)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "poai_fecha_inicio",
            "description": "<p>fecha de inicio del POAI</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "poai_numero_dias",
            "description": "<p>numero de dias del POAI.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/sys/sys.js",
    "groupTitle": "SISTEMA"
  },
  {
    "type": "get",
    "url": "/sys/can-update-planificacion",
    "title": "UPDATE PLANIFICACION ULTIMO DIA",
    "name": "ULTIMO_D_A_DEL_MES",
    "group": "SISTEMA",
    "description": "<p>establece si puedes modificar la planificación mensual (valido del 06 al penultimo día de cada mes)</p>",
    "version": "0.0.0",
    "filename": "./routes/sys/sys.js",
    "groupTitle": "SISTEMA"
  },
  {
    "type": "post",
    "url": "/sms/add",
    "title": "ADD",
    "name": "ADICIONAR_UN_SMS",
    "group": "SMS",
    "description": "<p>registrar un nuevo sms</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mensaje",
            "description": "<p>mensaje de texto.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento_emisor",
            "description": "<p>numero del documento emisor.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receptor",
            "description": "<p>receptor del sms.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/sms/sms.js",
    "groupTitle": "SMS"
  },
  {
    "type": "get",
    "url": "/tipo-permisos",
    "title": "GET ALL",
    "name": "OBTENER_PERMISOS_DEL_SISTEMA",
    "group": "TIPO_PERMISOS",
    "description": "<p>Obtiene todo los tipos de permiso disponibles en el sistema.</p>",
    "version": "0.0.0",
    "filename": "./routes/tipoPermisos/tipoPermisos.js",
    "groupTitle": "TIPO_PERMISOS"
  },
  {
    "type": "get",
    "url": "/tools/cargar-cod-bio-xlsx",
    "title": "LOAD CODIGO BIOMETRICO",
    "name": "CARGAR_CODIGO_BIOMETRICO",
    "group": "TOOL",
    "description": "<p>Carga los codigos biometrico desde un excel.</p>",
    "version": "0.0.0",
    "filename": "./routes/tools/tools.js",
    "groupTitle": "TOOL"
  },
  {
    "type": "post",
    "url": "/tool/convert-time",
    "title": "CONVERT TIME",
    "name": "CONVERTIR_TIEMPO_XLSX",
    "group": "TOOL",
    "description": "<p>Convertir tiempo de excel formato numero a fecha.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "time",
            "description": "<p>fecha en numero.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/tool/tool.js",
    "groupTitle": "TOOL"
  },
  {
    "type": "get",
    "url": "/tools/status-system",
    "title": "STATUS SYSTEM",
    "name": "ESTADO_DEl_SISTEMA",
    "group": "TOOL",
    "description": "<p>Obtiene informacion del estado del sistema.</p>",
    "version": "0.0.0",
    "filename": "./routes/tools/tools.js",
    "groupTitle": "TOOL"
  },
  {
    "type": "post",
    "url": "/tools/export-xlsx",
    "title": "EXPORT XLSX",
    "name": "EXPORTAR_MDB",
    "group": "TOOL",
    "description": "<p>Metodo que exporta lo datos en una plantilla personalizada.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "option",
            "description": "<p>opcion ITEM/CONTRATO</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/tools/tools.js",
    "groupTitle": "TOOL"
  },
  {
    "type": "post",
    "url": "/tools/import-mdb",
    "title": "IMPORT MDB",
    "name": "IMPORTAR_MDB",
    "group": "TOOL",
    "description": "<p>Importa los datos del USERINFO .xlsx excel en una tabla mysql.</p>",
    "version": "0.0.0",
    "filename": "./routes/tools/tools.js",
    "groupTitle": "TOOL"
  },
  {
    "type": "post",
    "url": "/tools/import-xlsx",
    "title": "IMPORT XLSX",
    "name": "IMPORTAR_XLSX",
    "group": "TOOL",
    "description": "<p>Importa los datos del resumen de calculo del APP:ZKTEKO desde un excel en una tabla mysql.</p>",
    "version": "0.0.0",
    "filename": "./routes/tools/tools.js",
    "groupTitle": "TOOL"
  },
  {
    "type": "post",
    "url": "/unidades/add",
    "title": "ADD",
    "name": "ADICIONA_UNIDAD_AREA",
    "group": "UNIDAD",
    "description": "<p>Adiciona una unidad/area.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre de la unidad</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "direccion",
            "description": "<p>direccion de la unidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "telefono",
            "description": "<p>numero de telefono de la unidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "latitud",
            "description": "<p>latitud de la unidad (ubicacion).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "longitud",
            "description": "<p>longitud de la unidad (ubicacion).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gestion_id",
            "description": "<p>identificador de la gestion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "area_id",
            "description": "<p>identificador del area.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/unidades/unidades.js",
    "groupTitle": "UNIDAD"
  },
  {
    "type": "post",
    "url": "/unidades/remove",
    "title": "REMOVE",
    "name": "BOORA_UNIDAD_AREA",
    "group": "UNIDAD",
    "description": "<p>Borra una unidad/area.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la unidad/area.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/unidades/unidades.js",
    "groupTitle": "UNIDAD"
  },
  {
    "type": "post",
    "url": "/unidades/set-indice",
    "title": "SET INDICE",
    "name": "MODIFICA_INDICE_DE_LA_UNIDAD_AREA",
    "group": "UNIDAD",
    "description": "<p>Modifica el indice de una unidad/area.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "indice",
            "description": "<p>indice de la unidad/area.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo de la unidad/area.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/unidades/unidades.js",
    "groupTitle": "UNIDAD"
  },
  {
    "type": "post",
    "url": "/unidades/update",
    "title": "UPDATE UNIDAD",
    "name": "MODIFICA_UNIDAD",
    "group": "UNIDAD",
    "description": "<p>Modifica un unidad.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la unidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre de la unidad</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "direccion",
            "description": "<p>direccion de la unidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "telefono",
            "description": "<p>numero de telefono de la unidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "latitud",
            "description": "<p>latitud de la unidad (ubicacion).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "longitud",
            "description": "<p>longitud de la unidad (ubicacion).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/unidades/unidades.js",
    "groupTitle": "UNIDAD"
  },
  {
    "type": "get",
    "url": "/unidades/get-all",
    "title": "GET ALL",
    "name": "OBTENER_UNIDADES",
    "group": "UNIDAD",
    "description": "<p>Obtiene todas las unidades registradas en el sistema.</p>",
    "version": "0.0.0",
    "filename": "./routes/unidades/unidades.js",
    "groupTitle": "UNIDAD"
  },
  {
    "type": "post",
    "url": "/unidades/get-all-area",
    "title": "GET ALL UNIDADES AREA",
    "name": "OBTENER_UNIDADES_DE_UN_AREA",
    "group": "UNIDAD",
    "description": "<p>Obtiene todas la unidades de un area.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "area_id",
            "description": "<p>identificador del area.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/unidades/unidades.js",
    "groupTitle": "UNIDAD"
  },
  {
    "type": "post",
    "url": "/usuarios/add",
    "title": "ADD",
    "name": "ADICIONA_USUARIOS",
    "group": "USUARIO",
    "description": "<p>Adiciona usuarios al sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>login del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>contrasena del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo de usuario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usuarios/usuarios.js",
    "groupTitle": "USUARIO"
  },
  {
    "type": "post",
    "url": "/usuarios/autenticar",
    "title": "AUTENTICAR",
    "name": "AUTENTICACI_N_DE_OPERADOR",
    "group": "USUARIO",
    "description": "<p>Permite a un usuario autenticarse en el sistema retornando un token en el cliente una vez comprobada sus credenciales.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>nombre de usuario que ingresará al sistema.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>contraseña de usuario que ingresará al sistema.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usuarios/usuarios.js",
    "groupTitle": "USUARIO"
  },
  {
    "type": "post",
    "url": "/usuarios/autenticar-servidor-publico",
    "title": "AUTENTICACION SERVIDOR PUBLICO",
    "name": "AUTENTICACI_N_DE_SERVIDOR_P_BLICO",
    "group": "USUARIO",
    "description": "<p>Permite a un usuario autenticarse en el sistema y a la vez crea un token en el cliente</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>login del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>contrasenha del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usuarios/usuarios.js",
    "groupTitle": "USUARIO"
  },
  {
    "type": "post",
    "url": "/usuarios/delete",
    "title": "REMOVE",
    "name": "BORRA_USUARIOS",
    "group": "USUARIO",
    "description": "<p>Borra usuarios al sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>login del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo de usuario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usuarios/usuarios.js",
    "groupTitle": "USUARIO"
  },
  {
    "type": "post",
    "url": "/usuarios/update-password",
    "title": "UPDATE PASSWORD",
    "name": "CAMBIAR_CONTRASE_A",
    "group": "USUARIO",
    "description": "<p>modifica la contraseña de usuario del sistema</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>nombre de usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>actual contraseña de usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>nueva contraseña de usuario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usuarios/usuarios.js",
    "groupTitle": "USUARIO"
  },
  {
    "type": "post",
    "url": "/usuarios/restablecer-credenciales-usuario",
    "title": "RESTABLECER CREDENCIAL",
    "name": "CAMBIAR_CONTRASE_A",
    "group": "USUARIO",
    "description": "<p>restablce las credenciales del usuario del sistema</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>nombre de usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>actual contraseña de usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo de usuario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usuarios/usuarios.js",
    "groupTitle": "USUARIO"
  },
  {
    "type": "post",
    "url": "/usuarios/cambiar-tipo-usuario",
    "title": "CHANGE TYPE USER",
    "name": "CAMBIAR_TIPO_DE_USUARIO",
    "group": "USUARIO",
    "description": "<p>cambiar tipo de usuario al sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>login del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>tipo del usuario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usuarios/usuarios.js",
    "groupTitle": "USUARIO"
  },
  {
    "type": "post",
    "url": "/usuarios/habilitar-desabilitar-usuario",
    "title": "ENABLED/DISABLED",
    "name": "HABILITA_DESHABILITA_USUARIOS",
    "group": "USUARIO",
    "description": "<p>habilita/dehabilita usuarios al sistema.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>login del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "estado",
            "description": "<p>estado del usuario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usuarios/usuarios.js",
    "groupTitle": "USUARIO"
  },
  {
    "type": "post",
    "url": "/usuarios/update-estado",
    "title": "UPDATE ESTADO",
    "name": "MODIFICAR_ESTADO",
    "group": "USUARIO",
    "description": "<p>cambiar el estado de un servidor público , Estados =&gt; [ 'DISPONIBLE','APAGADO' ]</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "estado",
            "description": "<p>estado del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>login de usuario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usuarios/usuarios.js",
    "groupTitle": "USUARIO"
  },
  {
    "type": "get",
    "url": "/usuarios",
    "title": "USERS",
    "name": "OBTIENE_USUARIOS",
    "group": "USUARIO",
    "description": "<p>Obtiene todos los usuarios del sistema.</p>",
    "version": "0.0.0",
    "filename": "./routes/usuarios/usuarios.js",
    "groupTitle": "USUARIO"
  },
  {
    "type": "post",
    "url": "/usuarios/recovery-info-authentication",
    "title": "RECOVERY INFO",
    "name": "RECUPERAR_INFORMACION_DE_AUTENTICACION",
    "group": "USUARIO",
    "description": "<p>Permite a un usuario recuperar su contraseña y enviarle en un email , los datos de recuperacion</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "numeroDocumento",
            "description": "<p>numero de carnet de identidad.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usuarios/usuarios.js",
    "groupTitle": "USUARIO"
  },
  {
    "type": "post",
    "url": "/vacaciones/add",
    "title": "ADD",
    "name": "ADICIONAR_VACACI_N",
    "group": "VACACION",
    "description": "<p>Adiciona una vacación a nombre del servidor público</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>indetificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fecha_inicio",
            "description": "<p>fecha inicio de salida.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fecha_conclusi",
            "description": "<p>ón fecha conclusió del permiso.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numero_dias",
            "description": "<p>número de días del permiso.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/vacaciones/vacaciones.js",
    "groupTitle": "VACACION"
  },
  {
    "type": "post",
    "url": "/vacaciones/delete",
    "title": "REMOVE",
    "name": "CANCELAR_VACACI_N",
    "group": "VACACION",
    "description": "<p>modifica el estado del formulario a cancelado , en realidad no borra el registro</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identificador de la vacacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/vacaciones/vacaciones.js",
    "groupTitle": "VACACION"
  },
  {
    "type": "post",
    "url": "/vacaciones/add",
    "title": "UPDATE STATE",
    "name": "MODIFICA_ESTADO_DE_LA_VACACION",
    "group": "VACACION",
    "description": "<p>Modifica el estado de la vacacion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "estado",
            "description": "<p>estado de la vacacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "vacacion_id",
            "description": "<p>identificador de la vacacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "motivo_cambio_estado",
            "description": "<p>motivo del cambio de estado de la vacacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/vacaciones/vacaciones.js",
    "groupTitle": "VACACION"
  },
  {
    "type": "get",
    "url": "/vacaciones/get-all",
    "title": "GET ALL",
    "name": "OBTENER_VACACIONES_DEL_MES_ACTUAL",
    "group": "VACACION",
    "description": "<p>Obtiene todas la vacaciones realizadas durante el mes en curso.</p>",
    "version": "0.0.0",
    "filename": "./routes/vacaciones/vacaciones.js",
    "groupTitle": "VACACION"
  },
  {
    "type": "post",
    "url": "/vacaciones/get-all-registro",
    "title": "GET ALL REGISTER",
    "name": "OBTENER_VACACIONES_DEL_MES_ACTUAL_DE_UN_REGISTRO",
    "group": "VACACION",
    "description": "<p>Obtiene todas la vacaciones realizadas durante el mes en curso de un registro dado.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registro_id",
            "description": "<p>identificador del registro.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/vacaciones/vacaciones.js",
    "groupTitle": "VACACION"
  },
  {
    "type": "post",
    "url": "/vacaciones/servants-dependientes",
    "title": "GET VACACION DEPENDIENTE",
    "name": "OBTENER_VACACIONES_DE_SERVIDOREs_P_BLICOS_DEPENDIENTES",
    "group": "VACACION",
    "description": "<p>Obtiene todos los vacaiones de los servidores públicos dependientes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "servidor_publico_id",
            "description": "<p>identificador del servidor publico.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/vacaciones/vacaciones.js",
    "groupTitle": "VACACION"
  },
  {
    "type": "post",
    "url": "/viajes/generar-anexo1",
    "title": "GENERATE ANEXO1",
    "name": "GENERAR_ANEXO1",
    "group": "VIAJE",
    "description": "<p>Adiciona una vacación a nombre del servidor público.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero de carnet de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "liquidacion_a",
            "description": "<p>liquidacion a.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "liquidacacion_via",
            "description": "<p>liquidacacion via.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "liquidacacion_de",
            "description": "<p>liquidacacion de.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido_paterno",
            "description": "<p>apellido paterno del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido_materno",
            "description": "<p>apellido materno del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cargo",
            "description": "<p>cargo del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "area",
            "description": "<p>area de trabajo del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "unidad",
            "description": "<p>unidad de trabajo del servidor publico.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_dias_nacional_urbano",
            "description": "<p>dias de la liquidacion por dia nacional urbano.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_viatico_dia_urbano",
            "description": "<p>precio de cada dia urbano.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_dias_nacional_rural",
            "description": "<p>dias de la liquidacion nacional rural.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_viatico_dia_rural",
            "description": "<p>precio de cada dia rural.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_dias_internacional",
            "description": "<p>dias de liquidacion por dia internacional.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_viatico_dia_internacional",
            "description": "<p>precio por cada dia internacional.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_viatico_dia_internacional_tipo_cambio",
            "description": "<p>liquidacion viatico tipo de cambio.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_pasaje_terrestre_ida",
            "description": "<p>liquidacion pasaje terrestre.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_pasaje_terrestre_retorno",
            "description": "<p>liquidacion pasaje terrestre.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_pasaje_aereo_ida",
            "description": "<p>liquidacion pasaje areo de ida.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_pasaje_aereo_retorno",
            "description": "<p>liquidacion pasaje aereo de retorno.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_gastos_tasa_peajes",
            "description": "<p>liquidacion de gastos por tasa peajes.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_gastos_combustible_lubricantes",
            "description": "<p>liquidacion de gastos por combustible o lubricantes.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_gastos_mantenimiento_vehiculos",
            "description": "<p>liquidacion de gastos por mantenimiento de vehiculos.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_destino_nacional",
            "description": "<p>liquidacion por destino nacional.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_destino_internacional",
            "description": "<p>liquidacion por destino internacional.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "fecha_salida",
            "description": "<p>fecha de salida.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "fecha_retorno",
            "description": "<p>fecha de retorno.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "observacion",
            "description": "<p>observacion.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/viajes/viajes.js",
    "groupTitle": "VIAJE"
  },
  {
    "type": "post",
    "url": "/viajes/update-liquidacion-viajes",
    "title": "UPDATE LIQUIDACION POR VIAJES",
    "name": "LIQUIDACION_POR_VIAJES",
    "group": "VIAJE",
    "description": "<p>Modifica liquidacion por viajes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>identidicador de la liquidacacion.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "numero_documento",
            "description": "<p>numero de carnet de identidad.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "liquidacion_a",
            "description": "<p>liquidacion a.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "liquidacacion_via",
            "description": "<p>liquidacacion via.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "liquidacacion_de",
            "description": "<p>liquidacacion de.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_dias_nacional_urbano",
            "description": "<p>dias de la liquidacion por dia nacional urbano.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_viatico_dia_urbano",
            "description": "<p>precio de cada dia urbano.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_dias_nacional_rural",
            "description": "<p>dias de la liquidacion nacional rural.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_viatico_dia_rural",
            "description": "<p>precio de cada dia rural.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_dias_internacional",
            "description": "<p>dias de liquidacion por dia internacional.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_viatico_dia_internacional",
            "description": "<p>precio por cada dia internacional.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_viatico_dia_internacional_tipo_cambio",
            "description": "<p>liquidacion viatico tipo de cambio.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_pasaje_terrestre_ida",
            "description": "<p>liquidacion pasaje terrestre.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_pasaje_terrestre_retorno",
            "description": "<p>liquidacion pasaje terrestre.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_pasaje_aereo_ida",
            "description": "<p>liquidacion pasaje areo de ida.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_pasaje_aereo_retorno",
            "description": "<p>liquidacion pasaje aereo de retorno.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_gastos_tasa_peajes",
            "description": "<p>liquidacion de gastos por tasa peajes.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_gastos_combustible_lubricantes",
            "description": "<p>liquidacion de gastos por combustible o lubricantes.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_gastos_mantenimiento_vehiculos",
            "description": "<p>liquidacion de gastos por mantenimiento de vehiculos.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_destino_nacional",
            "description": "<p>liquidacion por destino nacional.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "liquidacion_destino_internacional",
            "description": "<p>liquidacion por destino internacional.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/viajes/viajes.js",
    "groupTitle": "VIAJE"
  },
  {
    "type": "post",
    "url": "/viajes/get-liquidacion-viajes",
    "title": "GET LIQUIDACION VIAJE",
    "name": "OBTENER_LA_LIQUIDACION_DEL_VIAJE",
    "group": "VIAJE",
    "description": "<p>Adiciona una vacación a nombre del servidor público.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>indentificador del viaje.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/viajes/viajes.js",
    "groupTitle": "VIAJE"
  },
  {
    "type": "post",
    "url": "/xkteco/info-general",
    "title": "INFO GENERAL",
    "name": "INFORMACION_GENERAL_BIOMETRICO",
    "group": "ZKTECO",
    "description": "<p>muestra informacion del dispositivo biometrico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>direccion ip.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/zkteco/zkteco.js",
    "groupTitle": "ZKTECO"
  },
  {
    "type": "post",
    "url": "/zkteco/get-attendence",
    "title": "GET ATTENDENCE",
    "name": "OBTENER_LOS_MARCADOS",
    "group": "ZKTECO",
    "description": "<p>obtiene informacion de los marcados de un dispositivo biometrico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>direccion ip.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/zkteco/zkteco.js",
    "groupTitle": "ZKTECO"
  },
  {
    "type": "post",
    "url": "/zkteco/get-users",
    "title": "GET USER",
    "name": "OBTENER_LOS_USUARIOS",
    "group": "ZKTECO",
    "description": "<p>obtener los usuarios que figuran en el dispositivo biometrico.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ip",
            "description": "<p>direccion ip.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/zkteco/zkteco.js",
    "groupTitle": "ZKTECO"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_alanwalter_Projects_Proyectos_SGI_api_server_doc_main_js",
    "groupTitle": "_home_alanwalter_Projects_Proyectos_SGI_api_server_doc_main_js",
    "name": ""
  }
] });
