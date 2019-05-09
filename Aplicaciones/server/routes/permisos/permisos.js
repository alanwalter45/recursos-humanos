'use strict'

const express = require('express');
const router = express.Router();
const moment = require('moment');
const mysqldb = require('./../../databaseMysql');
const middleware = require('./../../middleware');

/**
 *
 * @api {post} /permisos/all GET ALL
 * @apiName OBTENER PERMISOS DE UN SERVIDOR PÚBLICO
 * @apiGroup PERMISO
 * @apiDescription Obtiene odos los permisos registrados en el sistema.
 *
 */
router.get('/permisos/all', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`
  SELECT
  per.id,
    per.observacion,
    per.estado as estado_permiso,
    per.tipo,
    per.fecha_salida,
    per.fecha_retorno,
    per.fecha_modificacion,
    per.observacion as observacion_permiso,
    per.estado,
    sp.nombres,
    sp.apellido_paterno,
    sp.apellido_materno,
    ca.nombre as cargo,
    un.nombre as unidad,
    ar.nombre as area
    FROM registros re INNER JOIN servidores_publicos sp ON re.servidor_publico_id=sp.id
                    LEFT JOIN departamentos de ON sp.departamento_id=de.id
                    LEFT JOIN departamentos de2 ON sp.numero_documento_expedido=de2.id
                    LEFT JOIN estructuras es ON es.id=re.estructura_id
                    LEFT JOIN escalas_salariales esa ON esa.id=es.escala_salarial_id
                    LEFT JOIN cargos ca ON ca.id=esa.cargo_id
                    LEFT JOIN unidades un ON un.id=es.unidad_id
                    LEFT JOIN inf_contratacion ifc ON re.id=ifc.registro_id
                    LEFT JOIN areas ar ON ar.id=un.area_id
                    INNER JOIN permisos per ON per.registro_id=re.id
    ORDER BY fecha_salida DESC
    LIMIT 700;`, (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send({ success: results.length ? true : false, result: results })
    });

});

/**
 * @api {post} /permisos/servant GET PERMISO SERVANT
 * @apiName OBTENER PERMISOS DE UN SERVIDOR PÚBLICO
 * @apiGroup PERMISO
 * @apiDescription Obtiene los permisos de un servidor publico.
 * @apiParam {number} servidor_publico_id identificador del servidor público.
 *
 */

router.post('/permisos/servant', middleware.ensureAuthenticated, (req, res, next) => {

  let json = JSON.parse(req.body.json);

  let servidor_publico_id = json.servidor_publico_id;
  mysqldb.query(`

  SELECT
    per.id,
    per.observacion,
    per.estado as estado_permiso,
    per.tipo,
    per.fecha_salida,
    per.fecha_retorno,
    per.fecha_modificacion,
    per.observacion as observacion_permiso,
    per.estado,
    sp.nombres,
    sp.apellido_paterno,
    sp.apellido_materno,
    ca.nombre as cargo,
    un.nombre as unidad,
    ar.nombre as area
    FROM registros re INNER JOIN servidores_publicos sp ON re.servidor_publico_id=sp.id
                    LEFT JOIN departamentos de ON sp.departamento_id=de.id
                    LEFT JOIN departamentos de2 ON sp.numero_documento_expedido=de2.id
                    LEFT JOIN estructuras es ON es.id=re.estructura_id
                    LEFT JOIN escalas_salariales esa ON esa.id=es.escala_salarial_id
                    LEFT JOIN cargos ca ON ca.id=esa.cargo_id
                    LEFT JOIN unidades un ON un.id=es.unidad_id
                    LEFT JOIN inf_contratacion ifc ON re.id=ifc.registro_id
                    LEFT JOIN areas ar ON ar.id=un.area_id
                    INNER JOIN permisos per ON per.registro_id=re.id
    WHERE per.registro_id IN (SELECT id from registros where servidor_publico_id=?)
    ORDER BY fecha_salida DESC
    LIMIT 700;
  `, [servidor_publico_id], function (error, results) {

      if (error) throw error;

      res.status(200).send({ success: results.length ? true : false, result: results });
    });

});



/**
 *
 * @api {post} /permisos/servants-dependientes SERVANT DEPENDIENTES
 * @apiName OBTENER PERMISOS DE SERVIDOREs PÚBLICOS DEPENDIENTES
 * @apiGroup PERMISO
 * @apiDescription Obtiene todos los permisos de los servidores públicos dependientes.
 *
 * @apiParam {number} servidor_publico_id identificador del servidor publico inmediato superior.
 *
 */

router.post('/permisos/servants-dependientes', middleware.ensureAuthenticated, (req, res, next) => {

  let json = JSON.parse(req.body.json);

  let servidor_publico_id = json.servidor_publico_id;

  mysqldb.query(`

  SELECT
  per.id,
  sp.id as servidor_publico_id,
  sp.numero_documento,
  sp.nombres,sp.apellido_paterno,sp.apellido_materno,
  sp.genero,
  sp.fecha_nacimiento,
  sp.correo_electronico,
  sp.telefono_fijo,
  sp.telefono_movil,
  sp.estado_civil,
  sp.direccion,
  sp.departamento_id,
  sp.pais_id,
  sp.provincia_id,
  sp.distrito,
  sp.localidad,
  sp.licencia_conducir,
  de.nombre as departamento,
  de2.nombre as departamento_expedido,
  un.nombre as unidad,
  ar.nombre as area,
  ca.nombre as cargo,
  re.estado,
  es.tipo_contratacion,
  ifc.forma_ingreso,
  ifc.fecha_inicio,
  ifc.fecha_conclusion,
  ifc.motivo_conclusion,
  re.id as registro_id,
  re.observado,
  es.numero,
  es.id as estructura_id,
  cat.codigo as categoria_programatica_id,
  sp.codigo_biometrico,
  per.fecha_salida as fecha_salida_permiso,
  per.fecha_retorno as fecha_retorno_permiso,
  per.observacion as observacion_permiso,
  per.tipo as tipo_permiso,
  per.estado as estado_permiso
  FROM registros re INNER JOIN servidores_publicos sp ON re.servidor_publico_id=sp.id
                    LEFT JOIN departamentos de ON sp.departamento_id=de.id
                    LEFT JOIN departamentos de2 ON sp.numero_documento_expedido=de2.id
                    LEFT JOIN estructuras es ON es.id=re.estructura_id
                    LEFT JOIN escalas_salariales esa ON esa.id=es.escala_salarial_id
                    LEFT JOIN cargos ca ON ca.id=esa.cargo_id
                    LEFT JOIN unidades un ON un.id=es.unidad_id
                    LEFT JOIN inf_contratacion ifc ON re.id=ifc.registro_id
                    LEFT JOIN areas ar ON ar.id=un.area_id
                    LEFT JOIN categorias_programaticas cat ON cat.id=es.categoria_programatica_id
                    INNER JOIN permisos per ON per.registro_id=re.id
  WHERE re.mes_id =(select id from meses where selected=1)
  AND un.id=(select unidad_id from registros re inner join estructuras es on  re.estructura_id=es.id
              where re.mes_id =(select id from meses where selected=1) and re.servidor_publico_id=?
              )
  ORDER BY es.numero asc

  `, [servidor_publico_id], function (error, results) {

      if (error) throw error;

      res.status(200).send({ success: results.length ? true : false, result: results });
    });

});

/**
 * @api {post} /permisos/agregar ADD
 * @apiName ADICIONA FORMULARIO DE SÁLIDA
 * @apiGroup PERMISO
 * @apiDescription Adiciona un formulario de salida a su registro personal.
 * @apiParam {Date} fechaHoraSalida fecha y hora de salida
 * @apiParam {Date} fechaHoraRetorno fecha y hora de retorno
 * @apiParam {Number} estado estado
 * @apiParam {String} observacion observación
 * @apiParam {String} tipo tipo
 * @apiParam {Number} registro_id identificador del registro
 *
 */


router.post('/permisos/agregar', middleware.ensureAuthenticated, (req, res, next) => {

  let json = JSON.parse(req.body.json);

  const fsalida = json.fechaHoraSalida;

  const fretorno = json.fechaHoraRetorno;

  let fechaSalida = moment(fsalida).format('YYYY-MM-DD HH:mm:ss');
  let fechaRetorno = moment(fretorno).format('YYYY-MM-DD HH:mm:ss');
  let estado = json.estado;
  let observacion = json.observacion;
  let tipo = json.tipo;
  let registro_id = json.registro_id;
  let fecha_modificacion = new Date();

  mysqldb.query(`CALL add_formulario_permiso(?,?,?,?,?,?,?)`, [
    registro_id,
    fechaSalida, fechaRetorno,
    tipo, estado, observacion, fecha_modificacion
  ], function (error, results) {
    if (error) throw error;

    if (tipo == 'VIAJE') {

      mysqldb.query(`SELECT * from permisos WHERE fecha_salida=? AND fecha_retorno=? AND registro_id=?`,
        [fechaSalida, fechaRetorno, registro_id], (error, results) => {
          if (error) throw error;
          mysqldb.query(`INSERT INTO programaciones_mensuales_viajes(fecha_modificacion,permiso_id) values(?,?)`, [fecha_modificacion,results[0].id], (error) => {
            if (error) throw error;
            mysqldb.query(`INSERT INTO liquidacion_viajes(fecha_modificacion,permiso_id) values(?,?)`, [fecha_modificacion,results[0].id], (error,results) => {
              if (error) throw error;
              res.status(200).send({ success: results.affectedRows ? true : false });
            });
          });
        })



    } else {
      res.status(200).send({ success: results.affectedRows ? true : false });
    }

  });

});

/**
 * @api {post} /permisos/actualizar-estado UPDATE
 * @apiName MODIFICA FORMULARIO DE SÁLIDA
 * @apiGroup PERMISO
 * @apiDescription Modificar estado del permiso de salida.
 * @apiParam {boolean} estado estado del permiso.
 * @apiParam {number} permiso_id identificador del permiso.
 * @apiParam {string} mmotivo_cambio_estado motivo del cambio de estado del permiso.
 *
 */

router.post('/permisos/actualizar-estado', middleware.ensureAuthenticated, (req, res, next) => {

  let json = JSON.parse(req.body.json);

  let estado = json.estado;
  let permiso_id = json.permiso_id;
  let motivo_cambio_estado = json.motivo_cambio_estado;

  mysqldb.query(`UPDATE permisos SET estado=? ,
                            motivo_cambio_estado=?
                WHERE id=?`, [estado, motivo_cambio_estado, permiso_id], function (error, results) {
      if (error) throw error;
      res.status(200).send({ success: results.affectedRows ? true : false });
    });

});

module.exports = router;
