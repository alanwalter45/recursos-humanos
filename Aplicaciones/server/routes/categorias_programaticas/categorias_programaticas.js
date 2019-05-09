const express = require('express');
const router = express.Router();
const middleware = require('../../middleware');
const mysqldb = require('../../databaseMysql');
const moment = require('moment');

/**
 *
 * @api {get} /categorias-programaticas/get-all-actual GET ALL ACTUAL
 * @apiName OBTENER TODAS LAS CATEGORIAS PROGRAMATICAS
 * @apiGroup CATEGORIAS PROGRAMATICAS
 * @apiDescription obteniendo todas la categorias programática del mes en curso.
 *
 */

router.get('/categorias-programaticas/get-all-actual', middleware.ensureAuthenticated, (req, res, next) => {


  mysqldb.query(`
  select * from categorias_programaticas
  where gestion_id=(SELECT id FROM gestiones WHERE selected)
  order by codigo asc`, (err, results) => {

      if (err)
        throw err;


      res.status(200).send({ success: results.length?true:false, result:results });

    });

});

/**
 *
 * @api {get} /categorias-programaticas/get-all-programas-actual GET ALL PROGRAMAS ACTUAL
 * @apiName OBTENER TODOS LOS PROGRAMAS DE LAS CATEGORIAS PROGRAMATICAS
 * @apiGroup CATEGORIAS PROGRAMATICAS
 * @apiDescription obteniendo todos los programas de las categorias programática del mes en curso.
 *
 */

router.get('/categorias-programaticas/get-all-programas-actual', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`
  select * from categorias_programaticas
  where gestion_id=(SELECT id FROM gestiones WHERE selected) and tipo='PROGRAMA'
  order by codigo asc`, (err, results) => {

      if (err)
        throw err;

      res.status(200).send({ success: results.length?true:false, result: results });

    });

});

/**
 *
 * @api {post} /categorias-programaticas/add ADD
 * @apiName ADICIONA UNA CATEGORIA PROGRAMATICA
 * @apiGroup CATEGORIAS PROGRAMATICAS
 * @apiDescription Adiciona una categoria programática del mes en curso.
 * @apiParam {string} codigo codigo de la categoria programatica.
 * @apiParam {string} nombre nombre de la categoria programatica.
 * @apiParam {string} tipo tipo de la categoria programatica.
 * @apiParam {string} categoria_padre categoria a la que pertenece la categoria programatica.
 * @apiParam {string} unidad_ejecutora unidad ejecutora de la categoria programatica.
 * @apiParam {string} fuente fuente de la categoria programatica.
 * @apiParam {string} organismo organismo de la categoria programatica.
 *
 */

router.post('/categorias-programaticas/add', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const codigo = json.codigo;
  const nombre = json.nombre.toString().toUpperCase();
  const tipo = json.tipo.toString().toUpperCase();
  const categoria_padre = json.categoria_padre;
  const unidad_ejecutora = json.unidad_ejecutora;
  const fuente = json.fuente;
  const organismo = json.organismo;

  mysqldb.query(`
  insert into categorias_programaticas(codigo,nombre,tipo,categoria_programatica_padre,gestion_id,unidad_ejecutora,fuente,organismo)
  select ?,?,?,?,(SELECT id FROM gestiones WHERE selected=1),?,?,?
  where not exists( select 1 from categorias_programaticas where codigo = ?)`,[codigo,nombre,tipo,categoria_padre,
    unidad_ejecutora,
    fuente,
    organismo,
    codigo],function (err,results) {

      if (err)
        throw err;


      res.status(200).send({ success: results.affectedRows?true:false, result: results.affectedRows });

    });

});


/**
 *
 * @api {post} /categorias-programaticas/update UPDATE
 * @apiName MODIFICA UNA CATEGORIA PROGRAMATICA
 * @apiGroup CATEGORIAS PROGRAMATICAS
 * @apiDescription Modifica una categoria programática del sistema.
 * @apiParam {number} id identificador de la categoria programatica.
 * @apiParam {string} codigo codigo de la categoria programatica.
 * @apiParam {string} nombre nombre de la categoria programatica.
 * @apiParam {string} tipo tipo de la categoria programatica.
 * @apiParam {string} categoria_padre categoria a la que pertenece la categoria programatica.
 * @apiParam {string} unidad_ejecutora unidad ejecutora de la categoria programatica.
 * @apiParam {string} fuente fuente de la categoria programatica.
 * @apiParam {string} organismo organismo de la categoria programatica.
 *
 */


router.post('/categorias-programaticas/update', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const id = json.id;
  const codigo = json.codigo;
  const nombre = json.nombre.toString().toUpperCase();
  const tipo = json.tipo.toString().toUpperCase();
  const categoria_padre = json.categoria_padre;
  const unidad_ejecutora = json.unidad_ejecutora;
  const fuente = json.fuente;
  const organismo = json.organismo;

  mysqldb.query(`
  UPDATE categorias_programaticas set codigo=?, nombre=?,tipo=?,categoria_programatica_padre=?
  , unidad_ejecutora=?,fuente=?,organismo=?
  WHERE id = ?`,[codigo,nombre,tipo,categoria_padre,unidad_ejecutora,fuente,organismo,id],
  function (err,results) {

      if (err)
        throw err;

      res.status(200).send({ success:results.affectedRows?true:false, result:results.affectedRows });

    });

});


module.exports = router;
