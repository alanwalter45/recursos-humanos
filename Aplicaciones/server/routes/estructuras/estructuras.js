const express = require('express');
const router = express.Router();
const middleware = require('./../../middleware');
const mysqldb = require('./../../databaseMysql');
const moment = require('moment');

/**
 *
 * @api {post} /estructuras/get-all GET ALL
 * @apiName OBTIENE TODAS LAS ESTRUCTURAS
 * @apiGroup ESTRUCTURA
 * @apiDescription Obtiene todas las estructuras.
 * @apiParam {number} gestion_id identificador de la gestion.
 *
 */

router.post('/estructuras/get-all', middleware.ensureAuthenticated, (req, res, next) => {


  const json = JSON.parse(req.body.json);
  const gestion_id = json.gestion_id;

  mysqldb.query(`
  select es.*,
  un.nombre as unidad,
  ar.nombre as area,
  ca.nombre as cargo,
  ns.haber_basico,
  ns.nivel
  from estructuras es INNER JOIN unidades un ON es.unidad_id=un.id
                      INNER JOIN areas ar ON un.area_id=ar.id
                      INNER JOIN escalas_salariales esa ON es.escala_salarial_id=esa.id
                      INNER JOIN cargos ca ON esa.cargo_id=ca.id
                      INNER JOIN niveles_salariales ns ON esa.nivel_salarial_id=ns.id
  where es.gestion_id =? AND es.status<>0
  order by cast(es.numero as number)
                      `, [gestion_id], (err, result) => {

      if (err)
        throw err;


      res.status(200).send({ success: result.length ? true : false, result });

    });

});

/**
 *
 * @api {get} /estructuras/get-all-actual GET ALL ACTUAL
 * @apiName OBTIENE TODAS LAS ESTRUCTURAS
 * @apiGroup ESTRUCTURA
 * @apiDescription Obtiene todas las estructuras de la gestion actual.
 *
 */

router.get('/estructuras/get-all-actual', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`
  select es.*,
  un.nombre as unidad,
  ar.nombre as area,
  ca.nombre as cargo,
  ns.haber_basico,
  ns.nivel,
  es.categoria_programatica_id,
  cp.codigo as categoria_programatica
  from estructuras es INNER JOIN unidades un ON es.unidad_id=un.id
                      INNER JOIN areas ar ON un.area_id=ar.id
                      INNER JOIN escalas_salariales esa ON es.escala_salarial_id=esa.id
                      INNER JOIN cargos ca ON esa.cargo_id=ca.id
                      INNER JOIN niveles_salariales ns ON esa.nivel_salarial_id=ns.id
                      LEFT JOIN categorias_programaticas cp ON cp.id=es.categoria_programatica_id

  where es.gestion_id =(SELECT id FROM gestiones WHERE selected=1) AND es.status<>0
  order by es.numero asc
                      `, (err, result) => {

      if (err) throw err;

      res.status(200).send({ success: result.length ? true : false, result });

    });

});


/**
 *
 * @api {post} /estructuras/get GET
 * @apiName OBTIENE UNA ESTRUCTURA
 * @apiGroup ESTRUCTURA
 * @apiDescription Obtiene una estructura.
 * @apiParam {number} estructura_id identificador de la estructura.
 *
 */

router.post('/estructuras/get', middleware.ensureAuthenticated, (req, res, next) => {


  const json = JSON.parse(req.body.json);
  const estructura_id = json.estructura_id;

  mysqldb.query(`
  select es.*,
  un.nombre as unidad,
  ar.nombre as area,
  ca.nombre as cargo,
  ns.haber_basico,
  ns.nivel,
  spu.nombres,
  spu.apellido_paterno,
  spu.apellido_materno,
  spu.numero_documento,
  dep.nombre as departamento
  from estructuras es INNER JOIN unidades un ON es.unidad_id=un.id
                      INNER JOIN areas ar ON un.area_id=ar.id
                      INNER JOIN escalas_salariales esa ON es.escala_salarial_id=esa.id
                      INNER JOIN cargos ca ON esa.cargo_id=ca.id
                      INNER JOIN niveles_salariales ns ON esa.nivel_salarial_id=ns.id
                      INNER JOIN registros reg ON reg.estructura_id=es.id
                      INNER JOIN servidores_publicos spu ON spu.id=reg.servidor_publico_id
                      INNER JOIN departamentos dep ON dep.id=spu.departamento_id
  where es.gestion_id =(SELECT id FROM gestiones WHERE selected=1) AND es.status<>0 AND es.id=?
                      `, [estructura_id], (err, results) => {

      if (err) throw err;


      res.status(200).send({ success: results.length ? true : false, result: results[0] });

    });

});


/**
 *
 * @api {post} /estructuras/add/row ADD ROW
 * @apiName ADICIONA UNA FILA A LA ESTRUCTURA
 * @apiGroup ESTRUCTURA
 * @apiDescription Adiciona un item a la estructura.
 * @apiParam {number} gestion_id identificador de la gestion.
 * @apiParam {number} unidad_id identificador de la unidad.
 * @apiParam {number} escala_salarial_id identificador de la escala salarial.
 * @apiParam {string} tipo_contratacion tipo de contratacion.
 * @apiParam {number} numero numero asignado.
 * @apiParam {number} categoria_programatica_id identificador de la categoria programatica.
 *
 */

router.post('/estructuras/add/row', middleware.ensureAuthenticated, (req, res, next) => {


  const json = JSON.parse(req.body.json);
  const gestion_id = json.gestion_id;
  const unidad_id = json.unidad_id;
  const escala_salarial_id = json.escala_salarial_id;
  const tipo_contratacion = json.tipo_contratacion;
  const numero = json.numero;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  const status = 1;
  const categoria_programatica_id = json.categoria_programatica_id;

  mysqldb.query(`INSERT INTO estructuras(gestion_id,unidad_id,escala_salarial_id,tipo_contratacion,numero,fecha_modificacion,status,categoria_programatica_id)
    SELECT ?,?,?,?,?,?,?,?
    WHERE NOT EXISTS(SELECT 1 FROM estructuras
      WHERE gestion_id=? AND unidad_id=? AND escala_salarial_id=? AND tipo_contratacion=? AND numero=? AND status=? AND numero=?)`, [gestion_id, unidad_id, escala_salarial_id, tipo_contratacion, numero, fecha_modificacion, status, categoria_programatica_id, gestion_id, unidad_id, escala_salarial_id, tipo_contratacion, numero, status, numero], function (err, results) {
      if (err) throw err;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });


});


/**
 *
 * @api {post} /estructuras/remove/row REMOVE ROW
 * @apiName BORRA UNA FILA A LA ESTRUCTURA
 * @apiGroup ESTRUCTURA
 * @apiDescription Borra un item a la estructura.
 * @apiParam {number} id identificador de la estructura.
 *
 */

router.post('/estructuras/remove/row', middleware.ensureAuthenticated, (req, res, next) => {


  const json = JSON.parse(req.body.json);
  const estructura_id = json.id;
  const status = 0;


  mysqldb.query(`UPDATE estructuras set status=?
    WHERE id=? AND status=1`, [status, estructura_id], function (err, results) {
      if (err) throw err;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });


});


/**
 *
 * @api {post} /estructuras/update/row UPDATE ROW
 * @apiName MODIFICA UNA FILA A LA ESTRUCTURA
 * @apiGroup ESTRUCTURA
 * @apiDescription Modifica un item a la estructura.
 * @apiParam {number} id identificador de la estructura.
 * @apiParam {number} gestion_id identificador de la gestion.
 * @apiParam {number} unidad_id identificador de la unidad.
 * @apiParam {number} escala_salarial_id identificador de la escala salarial.
 * @apiParam {string} tipo_contratacion tipo de contratacion.
 * @apiParam {number} numero numero en la estructura.
 * @apiParam {number} categoria_programatica_id identificador de la categoria programatica.
 *
 */

router.post('/estructuras/update/row', middleware.ensureAuthenticated, (req, res, next) => {


  const json = JSON.parse(req.body.json);
  const id = json.id;
  const gestion_id = json.gestion_id;
  const unidad_id = json.unidad_id;
  const escala_salarial_id = json.escala_salarial_id;
  const tipo_contratacion = json.tipo_contratacion;
  const numero = json.numero;
  const categoria_programatica_id = json.categoria_programatica_id;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');


  mysqldb.query(`UPDATE estructuras
    set gestion_id=?,
    unidad_id=?,
    escala_salarial_id=?,
    tipo_contratacion=?,
    numero=?,
    fecha_modificacion=?,
    categoria_programatica_id=?

    WHERE id=? AND status=1`, [
      gestion_id,
      unidad_id,
      escala_salarial_id,
      tipo_contratacion,
      numero,
      fecha_modificacion,
      categoria_programatica_id,
      id
    ], function (err, results) {
      if (err) throw err;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });

});

module.exports = router;
