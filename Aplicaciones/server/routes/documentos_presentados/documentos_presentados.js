const express = require('express');
const router = express.Router();
const middleware = require('./../../middleware');
const mysqldb = require('./../../databaseMysql');
const multer = require('multer');
const upload = multer({ dest: __dirname + '/public/assets/photos' });
const fs = require('fs');
const moment = require('moment');


/**
 *
 * @api {post} /documentos_presentados/get-all GET ALL
 * @apiName OBTIENE TODOS LOS DOCUMENTOS PRESENTADOS
 * @apiGroup DOCUMENTOS PRESENTADOS
 * @apiDescription Obtiene los documentos presentados.
 * @apiParam {number} registro_id identificador del registro.
 *
 */

router.post('/documentos-presentados/get-all', middleware.ensureAuthenticated, (req, res, next) => {


  const json = JSON.parse(req.body.json);
  const registro_id = json.registro_id;

  mysqldb.query(`

  SELECT dp.*,
  dr.nombre as documento_requerido,
  dr.ubicacion as documento_requerido_ubicacion
  FROM documentos_presentados dp
  INNER JOIN documentos_requeridos dr ON dp.documento_requerido_id = dr.id
  WHERE registro_id= ? `, [registro_id], (err, result) => {

      if (err) throw err;

      res.status(200).send({ success: result.length ? true : false, result });

    });

});


/**
 *
 * @api {post} /documentos_presentados/update-image UPDATE IMAGE
 * @apiName MODIFICA LA IMAGEN DE UN DOCUMENTO REGISTRADO
 * @apiGroup DOCUMENTOS PRESENTADOS
 * @apiDescription Modifica la imagen de un documento presentado.
 * @apiParam {image} file archivo del documento presentado.
 *
 */

router.post('/documentos_presentados/update-image', upload.single('imagen'), (req, res, next) => {

  mysqldb.query(`
  UPDATE documentos_presentados SET imagen_adjunta=?
  WHERE id=? AND registro_id=?`, [
      fs.readFileSync(req.file.path), req.body.documento_presentado_id, req.body.registro_id], function (err, results) {

        if (err) throw err;


        res.status(200).send({ success: results.affectedRows ? true : false, result: fs.readFileSync(req.file.path) });
      })
});


/**
 *
 * @api {post} /documentos_presentados/set-presentado SET
 * @apiName MODIFICA SI PRESENTÓ DOCUMENTO
 * @apiGroup DOCUMENTOS PRESENTADOS
 * @apiDescription Modifica si presentó documento.
 * @apiParam {bool} tickeado estado del documento presentado.
 * @apiParam {number} registro_id identificador del registro.
 * @apiParam {number} documento_presentado_id identificador del documento.
 *
 */

router.post('/documentos_presentados/set-presentado', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const tickeado = json.tickeado;
  const registro_id = json.registro_id;
  const documento_presentado_id = json.documento_presentado_id;
  mysqldb.query(`
  UPDATE documentos_presentados SET tickeado=?, fecha_modificacion=?
  WHERE registro_id=? AND id=?`, [tickeado, moment(new Date()).format('YYYY-MM-DD HH:mm:ss'), registro_id, documento_presentado_id], function (err, results) {

      if (err)
        throw err;


      res.status(200).send({ success: results.affectedRows ? true : false, result: results });
    })
});


/**
 *
 * @api {post} /documentos_presentados/reset RESET
 * @apiName RESETEAR QUE DOCUMENTOS PRESENTO
 * @apiGroup DOCUMENTOS PRESENTADOS
 * @apiDescription Resetea la presentacion de documentos.
 * @apiParam {number} registro_id identificador del registro.
 *
 */

router.post('/documentos_presentados/reset', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const registro_id = json.registro_id;


  mysqldb.query(`
  delete from documentos_presentados
  where registro_id=?`, [registro_id], (err) => {
      if (err) throw err;
      mysqldb.query(`
    insert into documentos_presentados(documento_requerido_id,registro_id,tickeado)
    select id,?,? FROM documentos_requeridos
    where gestion_id = (select id from gestiones where selected=1)`, [registro_id, 0], function (err, results) {
          if (err) throw err;
          res.status(200).send(JSON.stringify({ success: results.affectedRows ? true : false }));
        })
    });

});


module.exports = router;
