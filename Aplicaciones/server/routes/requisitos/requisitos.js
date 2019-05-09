const express = require('express');
const router = express.Router();
const middleware = require('./../../middleware');
const mysqldb = require('./../../databaseMysql');
const moment= require('moment');

/**
 *
 * @api {post} /requisitos/get-all GET ALL
 * @apiName OBTIENE TODOS LOS REQUISITOS
 * @apiGroup REQUISITO
 * @apiDescription Obtiene todos los requisitos.
 * @apiParam {string} gestion_id identificador de la gestion.
 *
 */

router.post('/requisitos/get-all', middleware.ensureAuthenticated, (req, res, next) => {

  const json=JSON.parse(req.body.json);
  const gestion_id = json.gestion_id;


  mysqldb.query(`
  SELECT *
  FROM documentos_requeridos
  WHERE gestion_id=? AND status=1
  ORDER BY nombre ASC`,[gestion_id],(err,results)=>{

    if(err)
      throw err;


    res.status(200).send({ success: results.length,result:results });

  });

});


/**
 *
 * @api {post} /requisitos/add ADD
 * @apiName ADICIONA UN REQUISITOS
 * @apiGroup REQUISITO
 * @apiDescription Adiciona un requsito.
 * @apiParam {string} gestion_id identificador de la gestion.
 * @apiParam {string} nombre nombre del requisito.
 * @apiParam {string} ubicacion ubicacion del requisito.
 *
 */


router.post('/requisitos/add', middleware.ensureAuthenticated, (req, res, next) => {

  const json=JSON.parse(req.body.json);
  const gestion_id = json.gestion_id;
  const nombre=json.nombre.toUpperCase();
  const ubicacion=json.ubicacion.toUpperCase();
  const status=1;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`
  INSERT INTO documentos_requeridos(gestion_id,nombre,ubicacion,status,fecha_modificacion)
  SELECT ?,?,?,?,?
  WHERE NOT EXISTS (SELECT 1
              FROM documentos_requeridos
              WHERE gestion_id=? AND nombre=? AND status=1)`,[gestion_id,nombre,ubicacion,status,fecha_modificacion,gestion_id,nombre],function(err, results){

    if(err)
      throw err;


    res.status(200).send({ success: results.affectedRows?true:false,result:results });

  });

});


/**
 *
 * @api {post} /requisitos/remove REMOVE
 * @apiName BORRA UN REQUISITO
 * @apiGroup REQUISITO
 * @apiDescription Borra un requsito.
 * @apiParam {string} id identificador del requisito.
 *
 */


router.post('/requisitos/remove', middleware.ensureAuthenticated, (req, res, next) => {

  const json=JSON.parse(req.body.json);
  const id = json.id;
  const status=0;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`
  UPDATE documentos_requeridos set status=?, fecha_modificacion=?
  WHERE id=?`,[status,fecha_modificacion,id],function(err, results){

    if(err)
      throw err;


    res.status(200).send({ success: results.affectedRows?true:false,result:results });

  });

});

/**
 *
 * @api {post} /requisitos/update UPDATE
 * @apiName MODIFICA UN REQUISITO
 * @apiGroup REQUISITO
 * @apiDescription Modifica un requsito.
 * @apiParam {string} id identificador del requisito.
 * @apiParam  {string} nombre nombre del requisito.
 * @apiParam  {string} ubicacion ubicacion del tramite o requisito.
 *
 */

router.post('/requisitos/update', middleware.ensureAuthenticated, (req, res, next) => {

  const json=JSON.parse(req.body.json);
  const id = json.id;
  const nombre=json.nombre.toUpperCase();
  const ubicacion=json.ubicacion.toUpperCase();
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`
  UPDATE documentos_requeridos set nombre=?, ubicacion=?,fecha_modificacion=?
  WHERE id=?`,[nombre,ubicacion,fecha_modificacion,id],function(err, results){

    if(err)
      throw err;


    res.status(200).send({ success: results.affectedRows?true:false,result:results });

  });

});


module.exports = router;
