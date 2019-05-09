const express = require('express');
const router = express.Router();
const middleware = require('./../../middleware');
const mysqldb = require('./../../databaseMysql');

/**
 *
 * @api {get} /provincias/get-all GET ALL
 * @apiName OBTENER PROVINCIAS
 * @apiGroup PROVINCIA
 * @apiDescription obtiene todas la provincias registradas en el sistema.
 *
 */

router.get('/provincias/get-all', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`select * from provincias`, (err, results) => {

    if (err)
      throw err;

    res.status(200).send({ success: results.length ? true : false, result: results });
  });
});

/**
 *
 * @api {post} /provincias/get-provincias GET PROVINCIAS
 * @apiName OBTENER PROVINCIAS DEPARTAMENTO
 * @apiGroup PROVINCIA
 * @apiDescription obtiene todas la provincias de un departamento.
 * @apiParam  {number} departamento_id identificador del departamento.
 *
 */
router.post('/provincias/get-provincias', middleware.ensureAuthenticated, (req, res, next) => {


  const json = JSON.parse(req.body.json);
  const departamento_id = json.departamento_id;

  mysqldb.query(`select * from provincias where departamento_id=?`, departamento_id, (err, results) => {

    if (err)
      throw err;

    res.status(200).send({ success: results.length ? true : false, result: results });
  });
});


/**
 *
 * @api {post} /provincias/get-for-id GET FOR ID
 * @apiName OBTENER PROVINCIA
 * @apiGroup PROVINCIA
 * @apiDescription obtiene una provincia.
 * @apiParam  {number} id identificador de la provincia.
 *
 */

router.post('/provincias/get-for-id', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const id = json.id;

  mysqldb.query(`select * FROM provincias WHERE id = ?`, [id], (err, results) => {

    if (err)
      throw err;


    res.status(200).send({ success: results.length ? true : false, result: results });
  });

});


module.exports = router;
