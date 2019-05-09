const express = require('express');
const router = express.Router();
const middleware = require('./../../middleware');
const mysqldb = require('./../../databaseMysql');
const moment = require('moment');



/**
 * @api {get} /dias-festivos/get-all-actual GET ALL ACTUAL
 * @apiName OBTIENE TODOS LOS DIAS FESTIVOS DE LA GESTIÓN ACTUAL
 * @apiGroup DIA FESTIVO
 * @apiDescription obteniendo todos los dias festivos de la gestion actual.
 *
 */

router.get('/dias-festivos/get-all-actual', middleware.ensureAuthenticated, (req, res, next) => {


  mysqldb.query(`
  SELECT *
  FROM dias_festivos
  WHERE status=1 AND gestion_id=(SELECT id from gestiones WHERE selected=1)
  ORDER BY fecha_festiva ASC`, (err, result) => {

      if (err) {
        throw err;
      }

      res.status(200).send({ success: result.length ? true : false, result });
    });


});

/**
 * @api {post} /dias-festivos/get-all GET ALL
 * @apiName OBTIENE TODOS LOS DIAS FESTIVOS
 * @apiGroup DIA FESTIVO
 * @apiDescription obteniendo todos los dias festivos de la gestion actual.
 * @apiParam {number} gestion_id identificador de la gestion.
 *
 */


router.post('/dias-festivos/get-all', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const gestion_id = json.gestion_id;
  mysqldb.query(`
  SELECT *
  FROM dias_festivos
  WHERE gestion_id=? AND status=1
  ORDER BY fecha_festiva ASC`, [gestion_id], (err, results) => {

      if (err) {
        throw err;
      }

      res.status(200).send({ success: results.length ? true : false, result: results });
    });


});


/**
 *
 * @api {post} /dias-festivos/add ADD
 * @apiName ADICIONA DIA FESTIVO
 * @apiGroup DIA FESTIVO
 * @apiDescription Adiciona un dia festivo.
 * @apiParam {number} gestion_id identificador de la gestion.
 * @apiParam {string} descripcion descripcion del dia festivo.
 * @apiParam {date} fecha_festiva fecha festiva.
 *
 */

router.post('/dias-festivos/add', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const gestion_id = json.gestion_id;
  const descripcion = json.descripcion.toUpperCase();
  const fecha_festiva = moment(json.fecha_festiva).format('YYYY-MM-DD');
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  const status = 1;
  mysqldb.query(`
  INSERT INTO dias_festivos(fecha_festiva,gestion_id,fecha_modificacion,status,descripcion)
  SELECT ?,?,?,?,?
  WHERE NOT EXISTS(SELECT 1
                 FROM dias_festivos
                 WHERE fecha_festiva=? AND status=1 AND descripcion=?)`, [fecha_festiva, gestion_id, fecha_modificacion, status, descripcion, fecha_festiva, descripcion], function (err, results) {

      if (err) throw err;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });


});


/**
 *
 * @api {post} /dias-festivos/remove REMOVE
 * @apiName BORRA UN DIA FESTIVO
 * @apiGroup DIA FESTIVO
 * @apiDescription Borra un dia festivo.
 * @apiParam {number} dia_festivo_id identificador del dia festivo.
 *
 */


router.post('/dias-festivos/remove', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const dia_festivo_id = json.dia_festivo_id;
  const status = 0;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  mysqldb.query(`
  UPDATE dias_festivos
  set status=? , fecha_modificacion=?
  WHERE id=?`, [status, fecha_modificacion, dia_festivo_id], function (err, results) {

      if (err) throw err;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });


});


/**
 *
 * @api {post} /dias-festivos/update UPDATE
 * @apiName MODIFICA UN DIA FESTIVO
 * @apiGroup DIA FESTIVO
 * @apiDescription Modifica un dia festivo.
 * @apiParam {number} id identificador del dia festivo.
 * @apiParam {string} descripcion descripcion del dia festivo.
 * @apiParam {date} fecha_festiva fecha festiva.
 *
 */


router.post('/dias-festivos/update', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const id = json.id;
  const descripcion = json.descripcion.toUpperCase();
  const fecha_festiva = moment(json.fecha_festiva).format('YYYY-MM-DD');
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`
  UPDATE dias_festivos
  set descripcion=?, fecha_festiva=? , fecha_modificacion=?
  WHERE id=?`, [descripcion, fecha_festiva, fecha_modificacion, id], function (err, results) {

      if (err) throw err;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });


});

module.exports = router;
