'use strict'
const express = require('express');
const router = express.Router();
const mysqldb = require('./../../databaseMysql');
const middleware = require('./../../middleware');


/**
 *
 * @api {post} /publicaciones/servant PUBLICACIONES DE UN SERVIDOR PUBLICO
 * @apiName OBTENER PROVINCIA
 * @apiGroup PUBLICACION
 * @apiDescription obtiene las publicaciones que realizo un servidor publico.
 * @apiParam  {string} login numero de documento del servidor publico.
 *
 */

router.post('/publicaciones/servant', middleware.ensureAuthenticated, (req, res, next) => {

  let json = JSON.parse(req.body.json);

  let login = json.login;

  mysqldb.query(`

    SELECT s.nombres,
    s.apellido_materno,
    s.apellido_paterno,
    s.numero_documento,
    texto,
    tituloEnlace,
    textoEnlace,
    imagen,
    fecha
    FROM publicaciones p inner join servidores_publicos s on s.id=p.servidor_publico_id
    where numero_documento=?
    order by fecha desc
    LIMIT 15
     `, [login], function (error, results) {
      if (error) {
        throw error;
      }
      res.status(200).send({ success: results.length ? true : false, result: results });
    });

});

/**
 *
 * @api {get} /publicaciones/all GET 15 PUBLICACIONES
 * @apiName 15 ULTIMAS PUBLICACIONES
 * @apiGroup PUBLICACION
 * @apiDescription obtiene una lista de las 15 ultimas publicaciones realizada.
 *
 */

router.get('/publicaciones/all', middleware.ensureAuthenticated, (req, res, next) => {
  mysqldb.query(`SELECT sp.numero_documento, p.*,
  sp.nombres,sp.apellido_paterno,sp.apellido_materno,

  ca.nombre as cargo
  FROM publicaciones p INNER JOIN servidores_publicos sp ON p.servidor_publico_id=sp.id
                       INNER JOIN registros reg ON reg.servidor_publico_id=sp.id
                       INNER JOIN estructuras est ON est.id=reg.estructura_id
                       INNER JOIN escalas_salariales esa ON esa.id=est.escala_salarial_id
                       INNER JOIN cargos ca ON ca.id=esa.cargo_id
  WHERE reg.mes_id=(select id from meses where selected=1)
  ORDER BY fecha DESC
  LIMIT 15`, function (error, results) {
      if (error) {
        throw error;
      }
      res.status(200).send({ success: results.length ? true : false, result: results });
    });

});

/**
 *
 * @api {post} /publicaciones/add ADD
 * @apiName ADICIONA PUBLICACION
 * @apiGroup PUBLICACION
 * @apiDescription Adiciona una publicacion al sistema.
 * @apiParam {string} numeroDocumento numero de carnet de identidad.
 * @apiParam {string} texto texto descripcion de la publicacion.
 * @apiParam {string} tituloEnlace titulo del enlace de la publicacion.
 * @apiParam {string} imagen imagen de la publicacion
 * @apiParam {string} textoEnlace texto del enlace en la publicacion.
 *
 */

router.post('/publicaciones/add', middleware.ensureAuthenticated, (req, res, next) => {

  let json = JSON.parse(req.body.json);

  let numeroDocumento = json.numeroDocumento;
  let texto = json.texto;
  let tituloEnlace = json.tituloEnlace;
  let imagen = json.imagen;
  let textoEnlace = json.textoEnlace;
  let fecha = new Date();

  mysqldb.query(`
    insert into publicaciones(servidor_publico_id,texto,tituloEnlace,imagen,textoEnlace,fecha)
    select id,?,?,?,?,? from servidores_publicos
    where numero_documento=?
                `, [texto, tituloEnlace, imagen, textoEnlace, fecha, numeroDocumento], function (error, results) {
      if (error) {
        throw error;
      }
      res.status(200).send({ success: results.affectedRows ? true : false });

    });

});

/**
 *
 * @api {post} /publicaciones/delete REMOVE
 * @apiName BORRA PUBLICACION
 * @apiGroup PUBLICACION
 * @apiDescription Boora una publicacion al sistema.
 * @apiParam {string} autorCi numero de carnet de identidad.
 *
 */

router.post('/publicaciones/delete', middleware.ensureAuthenticated, (req, res, next) => {

  let json = JSON.parse(req.body.json);

  let numero_documento = json.autorCi;

  mysqldb.query(`
      delete from publicaciones where servidor_publico_id=(select id from servidores_publicos where numero_documento=?)
                  `, [numero_documento], function (error, results) {
      if (error) {
        throw error;
      }
      res.status(200).send({ success: results.affectedRows ? true : false });

    });

});

module.exports = router;
