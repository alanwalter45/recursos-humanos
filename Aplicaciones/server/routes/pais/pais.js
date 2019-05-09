const express = require('express');
const router = express.Router();
const middleware = require('./../../middleware');
const mysqldb = require('./../../databaseMysql');

/**
 *
 * @api {get} /paises/get-all GET ALL
 * @apiName OBTENER PAISES
 * @apiGroup PAIS
 * @apiDescription obtener todos los paises registrados en el sistema.
 *
 */

router.get('/paises/get-all',middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`select * from paises`,(err,results)=>{

    if(err){

      throw err;
    }

    res.status(200).send({ success: results.length?true:false,result:results });
  });

});

/**
 *
 * @api {post} /paises/get-all GET
 * @apiName OBTENER PAIS
 * @apiGroup PAIS
 * @apiDescription obtener un pais por su identificador.
 * @apiParam {number} id identificador del pais.
 *
 */

router.post('/paises/get-for-id',middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const id= json.id;

  mysqldb.query(`select * FROM paises WHERE id = ?`,[id],(err,results)=>{

    if(err)
      throw err;

    res.status(200).send({ success: results.length?true:false,result:results });
  });

});

module.exports = router;
