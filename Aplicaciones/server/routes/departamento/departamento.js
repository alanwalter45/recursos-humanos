const express = require('express');
const router = express.Router();
const middleware = require('./../../middleware');
const mysqldb = require('./../../databaseMysql');

/**
 *
 * @api {get} /departamentos/get-all GET ALL
 * @apiName OBTIENE TODOS LOS DEPARTAMENTOS
 * @apiGroup DEPARTAMENTO
 * @apiDescription obtener todos los departamentos registrados en el sistema.
 *
 */
router.get('/departamentos/get-all', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`select * from departamentos`, (err, results) => {

    if (err) {

      throw err;
    }

    res.status(200).send({ success: results.length ? true : false, result: results });
  });
});


/**
 *
 * @api {post} /departamentos/get-for-id GET
 * @apiName OBTIENE DEPARTAMENTO
 * @apiGroup DEPARTAMENTO
 * @apiDescription obtener un departamento por su identificador.
 * @apiParam {number} id identificador del departamento.
 *
 */

router.post('/departamentos/get-for-id', (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const id = json.id;

  mysqldb.query(`select * FROM departamentos WHERE id = ?`, [id], (err, results) => {

    if (err) {

      throw err;
    }

    res.status(200).send({ success: results.length ? true : false, result: results });
  });

});

module.exports = router;
