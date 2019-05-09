const express = require('express');
const router = express.Router();
const middleware = require('./../../middleware');
const mysqldb = require('./../../databaseMysql');


/**
 * @api {post} /municipios/get-all GET ALL
 * @apiName OBTENER MUNICIPIOS
 * @apiGroup MUNICIPIO
 * @apiDescription obtiene todos los municipios registrados en el sistema.
 *
 */

router.get('/municipios/get-all', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`select * from municipios`, (err, results) => {

    if (err) {

      throw err;
    }

    res.status(200).send({ success: results.length ? true : false, result: results });

  });


});


/**
 * @api {post} /municipios/get-municipios GET MUNICIPIOS
 * @apiName OBTENER MUNICIPIOS DE UNA PROVINCIA
 * @apiGroup MUNICIPIO
 * @apiDescription obtiene todos los municipios de una provincia.
 * @apiParam {number} provincia_id identificador de la provincia.
 *
 */

router.post('/municipios/get-municipios', middleware.ensureAuthenticated, (req, res, next) => {


  const json = JSON.parse(req.body.json);
  const provincia_id = json.provincia_id;

  mysqldb.query(`select * from municipios where provincia_id=?`, provincia_id, (err, results) => {

    if (err) {

      throw err;
    }

    res.status(200).send({ success: results.length ? true : false, result: results });
  });
});


/**
 * @api {post} /municipios/get-for-id GET MUNICIPIO
 * @apiName OBTENER MUNICIPIO
 * @apiGroup MUNICIPIO
 * @apiDescription obtiene un municipio por su identificador.
 * @apiParam {number} id identificador del municipio.
 *
 */

router.post('/municipios/get-for-id', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const id = json.id;

  mysqldb.query(`select * FROM municipios WHERE id = ?`, [id], (err, results) => {

    if (err) {

      throw err;
    }

    res.status(200).send({ success: results.length ? true : false, result: results });
  });

});

module.exports = router;
