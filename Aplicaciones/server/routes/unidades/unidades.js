const express = require('express');
const router = express.Router();
const middleware = require('./../../middleware');
const mysqldb = require('./../../databaseMysql');



/**
 *
 * @api {get} /unidades/get-all GET ALL
 * @apiName OBTENER UNIDADES
 * @apiGroup UNIDAD
 * @apiDescription Obtiene todas las unidades registradas en el sistema.
 *
 */


router.get('/unidades/get-all', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`
  SELECT uni.*,are.nombre as secretaria
  FROM unidades uni INNER JOIN areas are ON uni.area_id=are.id
  ORDER BY uni.indice asc`, (err, results) => {

      if (err)
        throw err;

      res.status(200).send({ success: results.length ? true : false, result: results });
    });

});


/**
 *
 * @api {post} /unidades/get-all-area GET ALL UNIDADES AREA
 * @apiName OBTENER UNIDADES DE UN AREA
 * @apiGroup UNIDAD
 * @apiDescription Obtiene todas la unidades de un area.
 * @apiParam {number} area_id identificador del area.
 *
 */

router.post('/unidades/get-all-area', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const area_id = json.area_id;
  mysqldb.query(`
  SELECT uni.*,are.id as area_id,are.nombre as secretaria FROM
  unidades uni INNER JOIN areas are ON uni.area_id=are.id
  WHERE area_id=?
  ORDER BY uni.indice asc
  `, [area_id], (err, result) => {

      if (err)
        throw err;


      res.status(200).send({ success: result.length ? true : false, result });
    });

});


/**
 *
 * @api {post} /unidades/update UPDATE UNIDAD
 * @apiName MODIFICA UNIDAD
 * @apiGroup UNIDAD
 * @apiDescription Modifica un unidad.
 * @apiParam {number} id identificador de la unidad.
 * @apiParam {string} nombre nombre de la unidad
 * @apiParam  {string} direccion direccion de la unidad.
 * @apiParam  {string} telefono numero de telefono de la unidad.
 * @apiParam  {number} latitud latitud de la unidad (ubicacion).
 * @apiParam  {number} longitud longitud de la unidad (ubicacion).
 *
 */


router.post('/unidades/update', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const id = json.id;
  const nombre = json.nombre ? json.nombre.toUpperCase() : null;
  const direccion = json.direccion ? json.direccion.toUpperCase() : null;
  const telefono = json.telefono ? json.telefono.toUpperCase() : null;
  const latitud = json.latitud ? json.latitud : null;
  const longitud = json.longitud ? json.longitud : null;

  mysqldb.query(`
  UPDATE unidades set nombre=? , direccion=?, telefono=?, latitud=?, longitud=? WHERE id=?
  `, [nombre, direccion, telefono, latitud, longitud, id], (err, result) => {

      if (err) throw err;

      res.status(200).send({ success: result.affectedRows ? true : false, result: result.affectedRows });

    });


});


/**
 *
 * @api {post} /unidades/add ADD
 * @apiName ADICIONA UNIDAD/AREA
 * @apiGroup UNIDAD
 * @apiDescription Adiciona una unidad/area.
 * @apiParam {string} nombre nombre de la unidad
 * @apiParam  {string} direccion direccion de la unidad.
 * @apiParam  {string} telefono numero de telefono de la unidad.
 * @apiParam  {number} latitud latitud de la unidad (ubicacion).
 * @apiParam  {number} longitud longitud de la unidad (ubicacion).
 * @apiParam  {number} gestion_id identificador de la gestion.
 * @apiParam  {number} area_id identificador del area.
 *
 */


router.post('/unidades/add', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const id = json.id;
  const nombre = json.nombre ? json.nombre.toUpperCase() : null;
  const direccion = json.direccion ? json.direccion.toUpperCase() : null;
  const telefono = json.telefono ? json.telefono.toUpperCase() : null;
  const latitud = json.latitud ? json.latitud : null;
  const longitud = json.longitud ? json.longitud : null;
  const gestion_id = json.gestion_id ? json.gestion_id : null;
  const area_id = json.area_id;

  if (json.tipo == 'secretaría') {

    mysqldb.query(`
    insert into areas(nombre,direccion,telefono,gestion_id) values (?,?,?,?)
    `, [nombre, direccion, telefono, gestion_id], (err, result) => {

        if (err) throw err;

        let area_id = result.insertId;


        mysqldb.query(`
  insert into unidades(nombre,direccion,telefono,latitud,longitud,area_id) values (?,?,?,?,?,?)
  `, [nombre, direccion, telefono, latitud, longitud, area_id], (err, result) => {

            if (err) throw err;

            res.status(200).send({ success: result.affectedRows ? true : false, result: result.affectedRows });

          });
      });

  } else if (json.tipo == 'unidad') {
    mysqldb.query(`
  insert into unidades(nombre,direccion,telefono,latitud,longitud,area_id) values (?,?,?,?,?)
  `, [nombre, direccion, telefono, latitud, longitud, area_id], (err, result) => {

        if (err) throw err;

        res.status(200).send({ success: result.affectedRows ? true : false, result: result.affectedRows });

      });
  }

});



/**
 *
 * @api {post} /unidades/remove REMOVE
 * @apiName BOORA UNIDAD/AREA
 * @apiGroup UNIDAD
 * @apiDescription Borra una unidad/area.
 * @apiParam  {number} id identificador de la unidad/area.
 *
 */


router.post('/unidades/remove', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const id = json.id;

  const area_id = json.area_id;


  mysqldb.query(`
    delete from unidades where id = ?
  `, [id], (err, result) => {

      if (err) throw err;

      res.status(200).send({ success: result.affectedRows ? true : false, result: result.affectedRows });

    });

});

/**
 *
 * @api {post} /unidades/set-indice SET INDICE
 * @apiName MODIFICA INDICE DE LA UNIDAD/AREA
 * @apiGroup UNIDAD
 * @apiDescription Modifica el indice de una unidad/area.
 * @apiParam  {number} indice indice de la unidad/area.
 * @apiParam  {string} tipo tipo de la unidad/area.
 *
 */


router.post('/unidades/set-indice', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const indice = json.indice;
  const tipo = json.tipo;

  if (tipo == 'arriba') {

    mysqldb.query('select id from unidades where indice=?', [indice], function (error, id_1) {
      if (error) throw error;

      mysqldb.query('select id from unidades where indice=?', [indice + 1], function (error, id_2) {
        if (error) throw error;

        mysqldb.query('update unidades set indice=? where id=?', [indice + 1, id_1[0].id]);
        mysqldb.query('update unidades set indice=? where id=?', [indice, id_2[0].id]);
        res.status(200).send({ success: true });
      })

    })

  } else if (tipo == 'abajo') {

    mysqldb.query('select id from unidades where indice=?', [indice], function (error, id_1) {
      if (error) throw error;

      mysqldb.query('select id from unidades where indice=?', [indice - 1], function (error, id_2) {
        if (error) throw error;

        mysqldb.query('update unidades set indice=? where id=?', [indice - 1, id_1[0].id]);
        mysqldb.query('update unidades set indice=? where id=?', [indice, id_2[0].id]);
        res.status(200).send({ success: true });
      })

    })

  }

});


module.exports = router;
