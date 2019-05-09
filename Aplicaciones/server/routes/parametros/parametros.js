const express = require('express');
const router = express.Router();
const moment = require('moment');
const mysqldb = require('../../databaseMysql');
const middleware = require('../../middleware');


/**
 *
 * @api {post} /parametros/get GET
 * @apiName OBTENER PARAMETROS
 * @apiGroup PARAMETRO
 * @apiDescription obtener todos los parametros del sistema durante el anho.
 * @apiParam {number} gestion_id identificador de la gestion.
 *
 */

router.post('/parametros/get', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const gestion_id = json.gestion_id;

  mysqldb.query(`
 SELECT * from parametros
  WHERE gestion_id=?`, [gestion_id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.length ? true : false, result: results[0] });
    });

});


/**
 * @api {post} /parametros/update UPDATE
 * @apiName MODIFICA PARAMETROS
 * @apiGroup PARAMETRO
 * @apiDescription modifica los parametros del sistema.
 * @apiParam {date} poai_fecha_inicio fecha de inicio del POAI.
 * @apiParam {number} poai_numero_dias numero de dias que estara habilitado el POAI.
 * @apiParam {date} pomi_fecha_inicio fecha de inicio del POMI.
 * @apiParam {number} pomi_numero_dias numero de dias que estara habilitado el POMI.
 * @apiParam {number} gestion_id identificador de la gestion.
 *
 */

router.post('/parametros/update', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const poai_fecha_inicio = json.poai_fecha_inicio ? moment(json.poai_fecha_inicio).format('YYYY-MM-DD') : null;
  const poai_numero_dias = json.poai_numero_dias;

  const pomi_fecha_inicio = json.pomi_fecha_inicio ? moment(json.pomi_fecha_inicio).format('YYYY-MM-DD') : null;
  const pomi_numero_dias = json.pomi_numero_dias;

  const gestion_id = json.gestion_id;

  mysqldb.query(`
  UPDATE parametros SET poai_fecha_inicio=?, poai_numero_dias=?,
                        pomi_fecha_inicio=?, pomi_numero_dias=?
  WHERE gestion_id=?`, [poai_fecha_inicio, poai_numero_dias, pomi_fecha_inicio, pomi_numero_dias, gestion_id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });

});


module.exports = router;
