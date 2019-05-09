const express = require('express');
const router = express.Router();
const middleware = require('../../middleware');
const mysqldb = require('../../databaseMysql');
const moment = require('moment');


/**
 *
 * @api {post} /declaraciones-juradas/add ADD
 * @apiName ADICIONA UNA DECLARACION JURADA
 * @apiGroup DECLARACION JURADA
 * @apiDescription Adiciona una declaracion jurada.
 * @apiParam {number} servidor_publico_id identificador del servidor publico.
 * @apiParam {date} fecha_inicio fecha de inicio de la declaracion jurada.
 * @apiParam {date} fecha_inicio_gde fecha de inicio del GDE.
 * @apiParam {date} fecha_inicio_rrhh fecha de inicio de RRHH.
 * @apiParam {string} motivo motivo de la declaracion jurada.
 *
 */


router.post('/declaraciones-juradas/add',middleware.ensureAuthenticated, (req, res, next) => {

  const json= JSON.parse(req.body.json);
  const  servidor_publico_id=json.servidor_publico_id;
  const fecha_inicio=moment(json.fecha_inicio).format('YYYY-MM-DD');
  const fecha_inicio_gde=moment(json.fecha_inicio_gde).format('YYYY-MM-DD');
  const fecha_inicio_rrhh=moment(json.fecha_inicio_rrhh).format('YYYY-MM-DD');
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  const motivo=json.motivo;

  mysqldb.query(`
    INSERT INTO declaraciones_juradas(fecha_inicio,fecha_contraloria_general,fecha_recursos_humanos,fecha_modificacion,motivo,servidor_publico_id)
    VALUES(?,?,?,?,?,?)
  `,[fecha_inicio,fecha_inicio_gde,fecha_inicio_rrhh,fecha_modificacion,motivo,servidor_publico_id],function(err,results){

    if(err)throw err;

    res.status(200).send({ success: results.affectedRows?true:false,result:results});
  });


});

/**
 *
 * @api {get} /declaraciones-juradas/get-all-actual GET ALL ACTUAL
 * @apiName OBTIENE TODAS LAS DECLARACIONES JURADAS
 * @apiGroup DECLARACION JURADA
 * @apiDescription Obtiene todas las declaraciones juradas registradas ordenadas por fecha.
 *
 */

router.get('/declaraciones-juradas/get-all-actual',middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`
  SELECT decla.*,
  sp.nombres,sp.apellido_paterno,sp.apellido_materno,
  sp.numero_documento
  FROM declaraciones_juradas decla INNER JOIN servidores_publicos sp ON decla.servidor_publico_id=sp.id
  ORDER BY decla.fecha_inicio ASC`,(err,result)=>{

    if(err){
      throw err;
    }

    res.status(200).send({ success: result.length?true:false,result });
  });

});


/**
 *
 * @api {post} /declaraciones-juradas/delete DELETE
 * @apiName BORRA UNA DECLARACION JURADA
 * @apiGroup DECLARACION JURADA
 * @apiDescription Borra una declaracion jurada.
 * @apiParam {number} id  identificador de la declaracion jurada.
 */

router.post('/declaraciones-juradas/delete',middleware.ensureAuthenticated, (req, res, next) => {

  const json= JSON.parse(req.body.json);
  const  id=json.id;

  mysqldb.query(`
  DELETE FROM  declaraciones_juradas
  WHERE id=?`,[id],function(err,results){

    if(err)throw err;

    res.status(200).send({ success: results.affectedRows?true:false,result:results.affectedRows});
  });


});

module.exports = router;
