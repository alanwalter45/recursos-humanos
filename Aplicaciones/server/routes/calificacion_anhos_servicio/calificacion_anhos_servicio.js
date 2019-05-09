const express = require('express');
const router = express.Router();
const middleware = require('../../middleware');
const mysqldb = require('../../databaseMysql');
const moment = require('moment');

/**
 *
 * @api {post} /calificacion-anhos-servicio/add ADD
 * @apiName ADICIONAR CALIFICACION DE ANHO DE SERVICIOS
 * @apiGroup CALIFICACION ANHO SERVICIO
 * @apiDescription Adiciona una calificacion de anho de servicio.
 * @apiParam {number} servidor_publico_id identificador del servidor publico.
 * @apiParam {number} anhos anhos de servicio.
 * @apiParam {number} meses meses de servicio.
 * @apiParam {number} dias dias de servicio.
 * @apiParam {date} fecha_ultima_calificacion fecha de la calificacion de anhos de servicio.
 * @apiParam {string} comentario comentario u oboservacion de la calificacion de anho de servicios.
 *
 */

router.post('/calificacion-anhos-servicio/add',middleware.ensureAuthenticated, (req, res, next) => {

  const json= JSON.parse(req.body.json);
  const  servidor_publico_id=json.servidor_publico_id;
  const anhos=json.anhos?json.anhos:null;
  const meses=json.meses?json.meses:null;
  const dias=json.dias?json.dias:null;
  const fecha_ultima_calificacion=moment(json.fecha_ultima_calificacion).format('YYYY-MM-DD');
  const comentario=json.comentario?json.comentario.toUpperCase():null;

  mysqldb.query(`
  INSERT INTO calificacion_anhos_servicio(anhos,meses,dias,fecha_ultima_calificacion,comentario,servidor_publico_id)
  SELECT ?,?,?,?,?,?
  WHERE NOT EXISTS(SELECT 1
                 FROM calificacion_anhos_servicio
                 WHERE fecha_ultima_calificacion=? AND servidor_publico_id=?)`,[anhos,meses,dias,fecha_ultima_calificacion,comentario,servidor_publico_id,fecha_ultima_calificacion,servidor_publico_id],function(err,results){

    if(err)throw err;

    res.status(200).send({ success: results.affectedRows?true:false,result:results.affectedRows});
  });


});


/**
 *
 * @api {post} /calificacion-anhos-servicio/get-all-actual GET ALL ACTUAL
 * @apiName TODAS LAS CALIFICACIONES DE ANHO DE SERVICIOS
 * @apiGroup CALIFICACION ANHO SERVICIO
 * @apiDescription Obtiene todas las calificaciones de anho de servicio.
 *
 */

router.get('/calificacion-anhos-servicio/get-all-actual',middleware.ensureAuthenticated, (req, res, next) => {


  mysqldb.query(`
  SELECT cal.*,
  sp.nombres,sp.apellido_paterno,sp.apellido_materno,
  sp.numero_documento
  FROM calificacion_anhos_servicio cal INNER JOIN servidores_publicos sp ON cal.servidor_publico_id=sp.id
  WHERE date_format(now(),'%m')=date_format(fecha_ultima_calificacion,'%m')
  ORDER BY cal.fecha_ultima_calificacion ASC`,(err,result)=>{

    if(err){
      throw err;
    }

    res.status(200).send({ success: result.length?true:false,result });
  });


});


/**
 *
 * @api {post} /calificacion-anhos-servicio/delete REMOVE
 * @apiName BORRA CALIFICACION DE ANHO DE SERVICIOS
 * @apiGroup CALIFICACION ANHO SERVICIO
 * @apiDescription Borra una calificacion de anho de servicio.
 * @apiParam {number} id identificador de la calificacion de anho de servicio.
 *
 */

router.post('/calificacion-anhos-servicio/delete',middleware.ensureAuthenticated, (req, res, next) => {

  const json= JSON.parse(req.body.json);
  const  id=json.id;

  mysqldb.query(`
  DELETE FROM  calificacion_anhos_servicio
  WHERE id=?`,[id],function(err,results){

    if(err)throw err;

    res.status(200).send({ success: results.affectedRows?true:false,result:results.affectedRows});
  });


});


module.exports = router;
