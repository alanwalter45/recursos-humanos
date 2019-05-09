const express = require('express');
const router = express.Router();
const middleware = require('./../../middleware');
const mysqldb = require('./../../databaseMysql');
const moment = require('moment');


/**
 *
 * @api {get} /cargos/get-all GET ALL
 * @apiName OBTENER CARGOS
 * @apiGroup CARGO
 * @apiDescription obtener todos los cargos registrados.
 *
 */

router.get('/cargos/get-all',middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`
  select car.*, gest.anho as gestion from cargos as car  INNER JOIN gestiones as gest ON car.gestion_id=gest.id
  order by nombre asc;`,(err,result)=>{

    if(err){
      throw err;
    }

    res.status(200).send({ success: result.length?true:false,result });
  });


});

/**
 *
 * @api {get} /cargos/get-all-gestion-actual GET ALL GESTION ACTUAL
 * @apiName OBTENER CARGOS DE LA GESTION ACTUAL
 * @apiGroup CARGO
 * @apiDescription obtener todos los cargos registrados en la gestion actual.
 *
 */

router.get('/cargos/get-all-gestion-actual',middleware.ensureAuthenticated, (req, res, next) => {


  mysqldb.query(`
  select car.*, gest.anho as gestion from cargos as car  INNER JOIN gestiones as gest ON car.gestion_id=gest.id
  where gestion_id =  (select id from gestiones where selected=1)
  order by gestion desc;`,(err,result)=>{

    if(err){
      throw err;
    }

    res.status(200).send({ success: result.length?true:false,result });
  });


});

/**
 *
 * @api {post} /cargos/get-all-gestion GET ALL GESTION
 * @apiName OBTENER CARGOS DE UNA GESTION
 * @apiGroup CARGO
 * @apiDescription obtener todos los cargos registrados en una gestion.
 * @apiParam {number} gestion_id identificador de la gestion.
 *
 */

router.post('/cargos/get-all-gestion',middleware.ensureAuthenticated, (req, res, next) => {

  const json= JSON.parse(req.body.json);
  const gestion_id = json.gestion_id;

  mysqldb.query(`
  select car.*, gest.anho as gestion from cargos as car  INNER JOIN gestiones as gest ON car.gestion_id=gest.id
  where gestion_id =  ?
  order by gestion desc;`,[gestion_id],(err,result)=>{

    if(err){
      throw err;
    }

    res.status(200).send({ success: result.length?true:false,result });
  });


});


/**
 *
 * @api {post} /cargos/add ADD
 * @apiName ADICIONA UN CARGO
 * @apiGroup CARGO
 * @apiDescription adiciona un cargo en una gestion.
 * @apiParam {string} nombre nombre del cargo.
 * @apiParam {number} gestion_id identificador de la gestion donde se guardara el cargo.
 *
 */


router.post('/cargos/add',middleware.ensureAuthenticated, (req, res, next) => {

  const json= JSON.parse(req.body.json);
  const nombre = json.nombre?json.nombre.toUpperCase():'';
  const gestion_id = json.gestion_id;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`
 INSERT INTO cargos(nombre,fecha_modificacion,gestion_id)
 values (?,?,?)`,[nombre,fecha_modificacion,gestion_id],(err,result)=>{

    if(err){
      throw err;
    }

    res.status(200).send({ success: result.affectedRows?true:false,result });
  });


});


/**
 *
 * @api {post} /cargos/update UPDATE
 * @apiName MODIFICA UN CARGO
 * @apiGroup CARGO
 * @apiDescription Modifica un cargo en una gestion.
 * @apiParam {number} id identificador del cargo.
 * @apiParam {string} nombre nombre del cargo.
 * @apiParam {number} gestion_id identificador de la gestion donde se guardara el cargo.
 *
 */


router.post('/cargos/update',middleware.ensureAuthenticated, (req, res, next) => {

  const json= JSON.parse(req.body.json);
  const id = json.id;
  const nombre = json.nombre?json.nombre.toUpperCase():'';
  const gestion_id = json.gestion_id;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`
 UPDATE cargos SET nombre=?,fecha_modificacion=?,gestion_id=?
 WHERE id=?`,[nombre,fecha_modificacion,gestion_id,id],(err,result)=>{

    if(err){
      throw err;
    }

    res.status(200).send({ success: result.affectedRows?true:false,result });
  });


});



/**
 *
 * @api {post} /cargos/remove REMOVE
 * @apiName BORRA UN CARGO
 * @apiGroup CARGO
 * @apiDescription Borra un cargo en una gestion.
 * @apiParam {number} id identificador del cargo.
 *
 */



router.post('/cargos/remove',middleware.ensureAuthenticated, (req, res, next) => {

  const json= JSON.parse(req.body.json);
  const id = json.id;

  mysqldb.query(`
 DELETE FROM cargos where id=?`,[id],(err,result)=>{

    if(err){
      throw err;
    }

    res.status(200).send({ success: result.affectedRows?true:false,result });
  });


});


module.exports = router;
