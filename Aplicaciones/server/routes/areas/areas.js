const express = require('express');
const router = express.Router();
const middleware = require('./../../middleware');
const mysqldb = require('./../../databaseMysql');
const moment = require('moment');


/**
 *
 * @api {get} /areas/get-all GET ALL
 * @apiName OBTENER AREAS
 * @apiGroup AREA
 * @apiDescription Obtiene todas las areas registradas en el sistema.
 *
 */

router.get('/areas/get-all', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`
  select * from areas
  order by nombre asc;`, (err, result) => {

      if (err) {
        throw err;
      }

      res.status(200).send({ success: result.length ? true : false, result });
    });


});




/**
 *
 * @api {post} /areas/update UPDATE
 * @apiName MODIFICAR AREA
 * @apiGroup AREA
 * @apiDescription Modifica un area por su identificador.
 * @apiParam {number} id Identificador del area.
 * @apiParam {string} nombre nombre del area.
 * @apiParam {string} direccion direccion del area.
 * @apiParam {string} telefono telefono del area.
 */

router.post('/areas/update', middleware.ensureAuthenticated, (req, res, next) => {


  const json = JSON.parse(req.body.json);
  const id = json.id;
  const nombre = json.nombre;
  const direccion = json.direccion;
  const telefono = json.telefono;

  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`UPDATE areas
    set nombre=?,
    direccion=?,
    telefono=?,
    fecha_modificacion=?
    WHERE id=?`, [
      nombre,
      direccion,
      telefono,
      fecha_modificacion,
      id
    ], function (err, results) {
      if (err) throw err;
      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });

});


/**
 *
 * @api {post} /areas/remove REMOVE
 * @apiName BORRAR AREA
 * @apiGroup AREA
 * @apiDescription Boora un area por su identificador.
 * @apiParam {number} id Identificador del area.
 */

router.post('/areas/remove', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const id = json.id;


  mysqldb.query(`
    delete from unidades where area_id = ?
  `, [id], (err, result) => {

      if (err) throw err;

      mysqldb.query(`
    delete from areas where id = ?
  `, [id], (err, result) => {

          if (err) throw err;

          res.status(200).send({ success: result.affectedRows ? true : false, result: result.affectedRows });

        });
    });

});

module.exports = router;
