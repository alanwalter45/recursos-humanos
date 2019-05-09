const express = require('express');
const router = express.Router();
const moment = require('moment');
const mysqldb = require('../../databaseMysql');
const middleware = require('../../middleware');


/**
 *
 * @api {post} /programaciones-mensuales-viajes/add ADD
 * @apiName ADICIONAR UNA ACTIVIDAD
 * @apiGroup PROGRAMACION MENSUAL VIAJE
 * @apiDescription registrar una nueva actividad
 * @apiParam {number} permiso_id ifentificador del permiso.
 * @apiParam {date} fecha de la actividad.
 * @apiParam {string} lugar lugar de la actividad.
 * @apiParam {string} actividad de la actividad.
 *
 */

router.post('/programaciones-mensuales-viajes/add-actividad', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const permiso_id = json.permiso_id;
  const fecha = (json.fecha.indexOf('T') != -1) ? moment(json.fecha).format('YYYY-MM-DD HH:mm:ss') : json.fecha;
  const lugar = json.lugar.toString().toUpperCase();
  const actividad = json.actividad.toString().toUpperCase();
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`
  INSERT INTO programaciones_mensuales_viajes(fecha, lugar, actividad, permiso_id, fecha_modificacion)
  select ?,?,?,?,?
  WHERE NOT EXISTS(SELECT * FROM programaciones_mensuales_viajes
    WHERE permiso_id=? and fecha=? and actividad=?)`, [fecha, lugar, actividad, permiso_id, fecha_modificacion, permiso_id, fecha, actividad], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });

});



/**
 *
 * @api {post} /programaciones-mensuales-viajes/get-programacion-mensual-registro GET PROGRAMACION ANUAL REGISTRO
 * @apiName OBTIEN UNA PROGRAMACION DEL REGISTRO
 * @apiGroup PROGRAMACION MENSUAL VIAJE
 * @apiDescription registrar una nueva actividad
 * @apiParam {number} permiso_id ifentificador del permiso.
 *
 */


router.post('/programaciones-mensuales-viajes/get-programacion-mensual-registro', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const permiso_id = json.permiso_id;

  mysqldb.query(`
  SELECT pm.* from programaciones_mensuales_viajes pm inner join permisos per on pm.permiso_id=per.id
  where pm.permiso_id=? AND date_format(pm.fecha_modificacion,'%m')=date_format(now(),'%m')
  ORDER BY pm.fecha`, [permiso_id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.length ? true : false, result: results });
    });

});

/**
 *
 * @api {post} /programaciones-mensuales-viajes/remove-actividad-programacion-mensual-registro REMOVE ACTIVIDAD PROGRAMACION ANUAL REGISTRO
 * @apiName BORRA UNA ACTIVIDAD DE LA PROGRAMACION DEL REGISTRO
 * @apiGroup PROGRAMACION MENSUAL VIAJE
 * @apiDescription borra una actividad de la programacion.
 * @apiParam {number} id identificador de la programacion mensual viaje.
 *
 */


router.post('/programaciones-mensuales-viajes/remove-actividad-programacion-mensual-registro', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const id = json.id;

  mysqldb.query(`
 DELETE FROM programaciones_mensuales_viajes WHERE id=?`, [id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results });
    });

});


/**
 *
 * @api {post} /programaciones-mensuales-viajes/update-actividad UPDATE ACTIVIDAD
 * @apiName MODIFICA UNA ACTIVIDAD DE LA PROGRAMACION DEL REGISTRO
 * @apiGroup PROGRAMACION MENSUAL VIAJE
 * @apiDescription Modifica una actividad de la programacion.
 * @apiParam {number} id identificador de la programacion mensual viaje.
 * @apiParam {string} fecha fecha de la programacion mensual viaje.
 * @apiParam {string} lugar lugar de la programacion mensual viaje.
 * @apiParam {number} actividad actividad de la programacion mensual viaje.
 *
 *
 */


router.post('/programaciones-mensuales-viajes/update-actividad', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const id = json.id;
  const fecha = (json.fecha.indexOf('T') != -1) ? moment(json.fecha).format('YYYY-MM-DD HH:mm:ss') : json.fecha;
  const lugar = json.lugar.toString().toUpperCase();
  const actividad = json.actividad.toString().toUpperCase();
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`
  UPDATE programaciones_mensuales_viajes set fecha=?,
                                            lugar=?,
                                            actividad=?,
                                            fecha_modificacion=?
  WHERE id=?`, [fecha, lugar, actividad, fecha_modificacion, id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results });
    });

});


/**
 *
 * @api {post} /programaciones-mensuales-viajes/update-actividad/resultado UPDATE ACTIVIDAD RESULTADO
 * @apiName MODIFICA EL RESULTADO DE UNA ACTIVIDAD DE LA PROGRAMACION DEL REGISTRO
 * @apiGroup PROGRAMACION MENSUAL VIAJE
 * @apiDescription Modifica el resultado de una actividad de la programacion.
 * @apiParam {number} id identificador de la programacion mensual viaje.
 * @apiParam {string} cumplimiento_ejecucion cumplimiento_ejecucion de la programacion mensual viaje.
 *
 */


router.post('/programaciones-mensuales-viajes/update-actividad/resultado', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const id = json.id;
  const cumplimiento_ejecucion = json.cumplimiento_ejecucion;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`
  UPDATE programaciones_mensuales_viajes set cumplimiento_ejecucion=?,
                                            fecha_modificacion=?
  WHERE id=?`, [cumplimiento_ejecucion, fecha_modificacion, id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results });
    });

});


module.exports = router;
