const express = require('express');
const router = express.Router();
const moment = require('moment');
const mysqldb = require('./../../databaseMysql');
const middleware = require('./../../middleware');


/**
 *
 * @api {post} /escalas-salariales/add ADD
 * @apiName ADICIONAR UNA ESCALA SALARIAL
 * @apiGroup ESCALA SALARIAL
 * @apiDescription Adiciona una escala salarial.
 * @apiParam {number} cargo_id identificador del cargo.
 * @apiParam {number} nivel_salarial_id identificador del nivel salarial.
 * @apiParam {number} gestion_id identificador de la gestion.
 *
 */

router.post('/escalas-salariales/add', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const cargo_id = json.cargo_id;
  const nivel_salarial_id = json.nivel_salarial_id;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  const gestion_id = json.gestion_id;


  mysqldb.query(`
        INSERT INTO escalas_salariales(cargo_id,nivel_salarial_id,fecha_modificacion,gestion_id)
        select ?,?,?,?
        WHERE NOT EXISTS(SELECT 1 FROM escalas_salariales WHERE cargo_id=? and nivel_salarial_id=? AND
          gestion_id  = ?)`, [cargo_id, nivel_salarial_id, fecha_modificacion, gestion_id, cargo_id, nivel_salarial_id, gestion_id], function (error, results) {
      if (error) {
        throw error;
      }
      res.status(200).send({ success: results.affectedRows ? true : false, result: results });
    });

});


/**
 *
 * @api {post} /escalas-salariales/remove REMOVE
 * @apiName BOORA ESCALA SALARIAL
 * @apiGroup ESCALA SALARIAL
 * @apiDescription Borra una escala salarial.
 * @apiParam {number} id identificador de la escala salarial.
 *
 */

router.post('/escalas-salariales/remove', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const id = json.id;


  mysqldb.query(`
        DELETE FROM escalas_salariales WHERE id=?`, [id], function (error, results) {
      if (error) {
        throw error;
      }
      res.status(200).send({ success: results.affectedRows ? true : false, result: results });
    });

});

/**
 *
 * @api {post} /escalas-salariales/update UPDATE
 * @apiName MODIFICA UNA ESCALA SALARIAL
 * @apiGroup ESCALA SALARIAL
 * @apiDescription Modifica una escala salarial.
 * @apiParam {number} id identificador de la escala salarial.
 * @apiParam {number} cargo_id identificador del cargo.
 * @apiParam {number} nivel_salarial_id identificador del nivel salarial.
 * @apiParam {number} gestion_id identificador de la gestion.
 *
 */


router.post('/escalas-salariales/update', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const id = json.id;
  const cargo_id = json.cargo_id;
  const nivel_salarial_id = json.nivel_salarial_id;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  const gestion_id = json.gestion_id;


  mysqldb.query(`
        UPDATE escalas_salariales set cargo_id=?, nivel_salarial_id=?, fecha_modificacion=?, gestion_id=?
        WHERE id=?`, [cargo_id, nivel_salarial_id, fecha_modificacion, gestion_id, id], function (error, results) {
      if (error) {
        throw error;
      }
      res.status(200).send({ success: results.affectedRows ? true : false, result: results });
    });

})

/**
 *
 * @api {post} /escalas-salariales/get-all GET ALL
 * @apiName OBTIENE TODAS LAS ESCALAS SALARIALES
 * @apiGroup ESCALA SALARIAL
 * @apiDescription Obtiene todas las escalas salariales.
 * @apiParam {number} gestion_id identificador de la gestion.
 *
 */

router.post('/escalas-salariales/get-all', middleware.ensureAuthenticated, (req, res, next) => {


  const json = JSON.parse(req.body.json);

  const gestion_id = json.gestion_id;

  mysqldb.query(`
  SELECT es.*, ca.nombre as cargo,ni.nivel,ni.haber_basico
  from escalas_salariales es INNER JOIN cargos ca ON es.cargo_id=ca.id
                             INNER JOIN niveles_salariales ni ON es.nivel_salarial_id=ni.id
  WHERE es.gestion_id=?
  ORDER BY ni.nivel asc`, [gestion_id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.length ? true : false, result: results });
    });



});


/**
 *
 * @api {get} /escalas-salariales/get-all-gestion-actual GET ALL ACTUAL
 * @apiName OBTIENE TODAS LAS ESCALAS SALARIALES
 * @apiGroup ESCALA SALARIAL
 * @apiDescription Obtiene todas las escalas salariales de la gestion actual.
 *
 */

router.get('/escalas-salariales/get-all-gestion-actual', middleware.ensureAuthenticated, (req, res, next) => {


  mysqldb.query(`
  SELECT es.*, ca.nombre as cargo,ni.nivel,ni.haber_basico
  from escalas_salariales es INNER JOIN cargos ca ON es.cargo_id=ca.id
                                      INNER JOIN niveles_salariales ni ON es.nivel_salarial_id=ni.id
  WHERE es.gestion_id=(SELECT id FROM gestiones WHERE selected=1)
  ORDER BY ni.nivel`, function (error, results) {
      if (error) {
        throw error;
      }
      res.status(200).send({ success: results.length ? true : false, result: results });
    });

});


module.exports = router;
