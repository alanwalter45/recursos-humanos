const express = require('express');
const router = express.Router();
const middleware = require('./../../middleware');
const mysqldb = require('./../../databaseMysql');
const moment = require('moment');


/**
 *
 * @api {get} /niveles-salariales/get-all GET ALL
 * @apiName OBTENER NIVELES SALARIALES
 * @apiGroup NIVEl SALARIAL
 * @apiDescription obtiene todos los niveles salariales.
 *
 */

router.get('/niveles-salariales/get-all', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`
  select * from niveles_salariales
  order by nivel asc;`, (err, result) => {

      if (err) {

        throw err;
      }

      res.status(200).send({ success: result.length, result });
    });


});

/**
 *
 * @api {get} /niveles-salariales/get-all-gestion-actual GET ALL ACTUAL
 * @apiName OBTENER NIVELES SALARIALES
 * @apiGroup NIVEl SALARIAL
 * @apiDescription obtiene niveles salariales de la gestion actual.
 *
 */


router.get('/niveles-salariales/get-all-gestion-actual', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`
  select * from niveles_salariales
  where gestion_id = ( select id from gestiones where selected=1)
  order by nivel asc;`, (err, result) => {

      if (err) {

        throw err;
      }

      res.status(200).send({ success: result.length, result });
    });


});


/**
 *
 * @api {post} /niveles-salariales/add ADD
 * @apiName ADICIONA NIVEL SALARIAL
 * @apiGroup NIVEl SALARIAL
 * @apiDescription Adiciona un nivel salarial.
 * @apiParam {number} nivel nivel salarial.
 * @apiParam {number} haber_basico haber basico salarial.
 * @apiParam {number} gestion_id identificador de la gestion.
 *
 */


router.post('/niveles-salariales/add', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const nivel = json.nivel;
  const haber_basico = json.haber_basico;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  const gestion_id = json.gestion_id;

  mysqldb.query(`
        INSERT INTO niveles_salariales(nivel,haber_basico,gestion_id)
        select ?,?,?
        WHERE NOT EXISTS(SELECT 1 FROM niveles_salariales WHERE nivel=? and haber_basico=? AND
          gestion_id  = ?)`, [nivel, haber_basico, gestion_id, nivel, haber_basico, gestion_id], function (error, results) {
      if (error) {
        throw error;
      }
      res.status(200).send({ success: results.affectedRows ? true : false, result: results });
    });

});


/**
 *
 * @api {post} /niveles-salariales/remove REMOVE
 * @apiName BORRA NIVEL SALARIAL
 * @apiGroup NIVEl SALARIAL
 * @apiDescription Borra un nivel salarial.
 * @apiParam {number} id identificador del nivel salarial.
 *
 */


router.post('/niveles-salariales/remove', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const id = json.id;

  mysqldb.query(`
        DELETE FROM niveles_salariales
        WHERE id=?`, [id], function (error, results) {
      if (error) {
        throw error;
      }
      res.status(200).send({ success: results.affectedRows ? true : false, result: results });
    });

});

/**
 *
 * @api {post} /niveles-salariales/udate UPDATE
 * @apiName MODIFICA NIVEL SALARIAL
 * @apiGroup NIVEl SALARIAL
 * @apiDescription Modifica un nivel salarial.
 * @apiParam {number} nivel nivel salarial.
 * @apiParam {number} haber_basico haber basico salarial.
 * @apiParam {number} id identificador del nivel salarial.
 *
 */

router.post('/niveles-salariales/update', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const nivel = json.nivel;
  const haber_basico = json.haber_basico;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  const id = json.id;

  mysqldb.query(`
        UPDATE niveles_salariales set nivel=?,
                                      haber_basico=?
        WHERE id  = ?`, [nivel, haber_basico, id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results });

    })

});


module.exports = router;
