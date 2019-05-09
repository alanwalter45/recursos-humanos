'use strict'
const express = require('express');
const router = express.Router();
const mysqldb = require('../../databaseMysql');
const middleware = require('./../../middleware');
const moment = require('moment');

/**
 *
 * @api {get} /logs GET
 * @apiName OBTIENE LOGS
 * @apiGroup LOG
 * @apiDescription Obtiene los log.
 *
 */

router.get('/logs', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`

  SELECT   l.ip,l.usuario,l.fecha,l.accion,
  r.nombres,
  r.apellido_paterno,
  r.apellido_materno,
  r.numero_documento
  FROM servidores_publicos r left join logs l  on l.usuario = r.numero_documento
  ORDER BY l.fecha DESC

  `, (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(results);
    }
  );

});


/**
 * @api {post} /logs/add ADD
 * @apiName ADICIONA LOG DE REGISTRO
 * @apiGroup LOG
 * @apiDescription Adiciona un log en el sistema.
 * @apiParam {string} usuario usuario del sistema.
 * @apiParam {string} ip direccion ip del usuario
 * @apiParam {string} accion accion que realizo el usuario.
 *
 */

router.post('/logs/add', (req, res, next) => {

  let json = JSON.parse(req.body.json);

  let usuario = json.usuario;
  let fecha = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  let ip = req.ip;
  let accion = json.accion;

  mysqldb.query(`CALL add_log(?,?,?,?)`, [ip, fecha, usuario, accion], function (error, results) {
    if (error) throw error;

    const respuesta = { success: results.affectedRows ? true : false, result: results };

    res.status(200).send(respuesta);
  });

});

/**
 *
 * @api {post} /logs/last3 LAST3
 * @apiName OBTIENE TODOS LOS ULTIMOS 6 ACCESOS
 * @apiGroup LOG
 * @apiDescription Obtiene los ultimos 6 accesos al sistema.
 * @apiParam {string} numero_documento
 *
 */


router.post('/logs/last3', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const numero_documento = json.numero_documento;
  mysqldb.query(`

  SELECT   l.ip,l.usuario,l.fecha,l.accion,
  r.nombres,
  r.apellido_paterno,
  r.apellido_materno,
  r.numero_documento
  FROM servidores_publicos r left join logs l  on l.usuario = r.numero_documento
  WHERE r.numero_documento = ? AND l.accion like '%INGRESÓ%'
  ORDER BY l.fecha DESC
  LIMIT 6;

  `, [numero_documento], (error, results) => {
      if (error) throw error;

      res.status(200).send({ results });
    }
  );

});

module.exports = router;
