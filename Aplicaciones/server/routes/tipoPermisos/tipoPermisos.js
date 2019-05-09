const express = require('express');
const router = express.Router();
const mysqldb = require('./../../databaseMysql');
const middleware = require('./../../middleware');


/**
 *
 * @api {get} /tipo-permisos GET ALL
 * @apiName OBTENER PERMISOS DEL SISTEMA
 * @apiGroup TIPO PERMISOS
 * @apiDescription Obtiene todo los tipos de permiso disponibles en el sistema.
 *
 */

router.get('/tipo-permisos', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query('SELECT nombre,texto_link, articulo, articulo_detalle from tipo_permisos', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send({success:results.length?true:false,result:results});
  });

});

module.exports = router;
