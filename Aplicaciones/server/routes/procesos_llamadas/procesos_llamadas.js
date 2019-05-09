const express = require('express');
const router = express.Router();
const moment = require('moment');
const mysqldb = require('./../../databaseMysql');
const middleware = require('./../../middleware');


/**
 *
 * @api {post} /procesos-llamadas/add ADD
 * @apiName ADICIONAR PROCESOS O LLAMADA
 * @apiGroup PROCESOS Y LLAMADAS
 * @apiDescription adiciona un proceso o llamada
 *
 * @apiParam {number} registro_id identificador del registro.
 * @apiParam {string} numero del proceso.
 * @apiParam {string} descripcion del proceso o llamada.
 * @apiParam {date} fecha_llamada_proceso fecha de la llamada o proceso.
 * @apiParam {date} fecha_modificacion fecha de modificacion.
 * @apiParam {string} tipo tipo (proceso/llamada).
 *
 */

router.post('/procesos-llamadas/add', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const registro_id = json.registro_id;
  const numero_proceso = json.numero_proceso.toString().toUpperCase();
  const descripcion = json.descripcion.toString().toUpperCase();
  const fecha_llamada_proceso = moment(json.fecha_llamada_proceso).format('YYYY-MM-DD HH:mm:ss');
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  const tipo = json.tipo.toString().toUpperCase();


    mysqldb.query(`
  INSERT INTO procesos_llamadas(numero_proceso,descripcion,fecha_modificacion,tipo,registro_id,fecha_llamada_proceso)
  select ?,?,?,?,?,?
  WHERE NOT EXISTS(SELECT 1 FROM procesos_llamadas WHERE numero_proceso=?)`, [numero_proceso, descripcion, fecha_modificacion, tipo, registro_id,fecha_llamada_proceso,numero_proceso], function (error,results) {
        if (error) throw error;

        res.status(200).send({ success: results.affectedRows, result:results });
      });

});


/**
 *
 * @api {post} /procesos-llamadas/delete REMOVE
 * @apiName BORRA PROCESO O LLAMADA
 * @apiGroup PROCESOS Y LLAMADAS
 * @apiDescription Borra un proceso o llamada
 * @apiParam {number} registro_id identificador del registro.
 * @apiParam {number} numero_proceso numero del proceso
 *
 */

router.post('/procesos-llamadas/delete', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const registro_id = json.registro_id;
  const numero_proceso = json.numero_proceso;

    mysqldb.query(`
  DELETE FROM procesos_llamadas WHERE registro_id=? and numero_proceso=?`, [registro_id,numero_proceso], function (error,results) {
        if (error) throw error;

        res.status(200).send({ success: results.affectedRows?true:false, result:results });
      });

});


/**
 *
 * @api {post} /procesos-llamadas/get-all GET ALL
 * @apiName OBTIENE TODOS LOS PROCESOS/LLAMADAS DE UN REGISTRO
 * @apiGroup PROCESOS Y LLAMADAS
 * @apiDescription Obtiene los procesos/llamadas de un registro
 * @apiParam {number} registro_id identificador del registro.
 *
 */

router.post('/procesos-llamadas/get-all', middleware.ensureAuthenticated, (req, res, next) =>
{

  const json = JSON.parse(req.body.json);
  const registro_id = json.registro_id;


  mysqldb.query(`
  SELECT pl.*,
  sp.nombres,sp.apellido_paterno,sp.apellido_materno,
  sp.numero_documento
  FROM registros re INNER JOIN servidores_publicos sp ON re.servidor_publico_id=sp.id
  INNER JOIN procesos_llamadas pl ON re.id=pl.registro_id
  WHERE registro_id=?`,[registro_id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.length?true:false, result: results });
    });



});


/**
 *
 * @api {post} /procesos-llamadas/update UPDATE
 * @apiName MODIFICA PROCESOS O LLAMADA
 * @apiGroup PROCESOS Y LLAMADAS
 * @apiDescription modifica un proceso o llamada.
 * @apiParam {number} registro_id identificador del registro.
 * @apiParam {string} numero_proceso numero del proceso.
 * @apiParam {string} descripcion descripcion.
 * @apiParam {date} fecha_llamada_proceso fecha de la llamada o proceso.
 * @apiParam {string} tipo tipo de proceso/llamada.
 *
 */

router.post('/procesos-llamadas/update', middleware.ensureAuthenticated, (req, res, next) =>
{

  const json = JSON.parse(req.body.json);

  const registro_id = json.registro_id;
  const numero_proceso = json.numero_proceso.toString().toUpperCase();
  const descripcion = json.descripcion.toString().toUpperCase();
  const fecha_llamada_proceso = moment(json.fecha_llamada_proceso).format('YYYY-MM-DD HH:mm:ss');
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  const tipo = json.tipo.toString().toUpperCase();

  mysqldb.query(`
  UPDATE procesos_llamadas set
  descripcion=?,
  fecha_modificacion=?,
  tipo=?,
  fecha_llamada_proceso=?
  WHERE registro_id=? and numero_proceso=?`,[descripcion,
    fecha_modificacion,tipo,
    fecha_llamada_proceso,registro_id,numero_proceso], function (error,results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows?true:false, result: results });
    });



});


/**
 *
 * @api {get} /procesos-llamadas/get-incumplimiento-reglamento GET INCUMPLIMIENTO
 * @apiName OBTIENE TODOS LOS PROCESOS QUE INCUMPLEN REGLAMENTO
 * @apiGroup PROCESOS Y LLAMADAS
 * @apiDescription Obtiene los procesos que incumplen reglamento de un registro.
 *
 */


router.get('/procesos-llamadas/get-incumplimiento-reglamento', middleware.ensureAuthenticated, (req, res, next) => {


  mysqldb.query(`
  SELECT pl.*,
  sp.nombres,sp.apellido_paterno,sp.apellido_materno,
  sp.numero_documento,
  count(re.id) as cantidad
  FROM registros re INNER JOIN servidores_publicos sp ON re.servidor_publico_id=sp.id
  INNER JOIN procesos_llamadas pl ON re.id=pl.registro_id
  GROUP BY re.id,pl.tipo
  ORDER BY sp.nombres`, function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.length?true:false, result: results });
    });

});

module.exports = router;
