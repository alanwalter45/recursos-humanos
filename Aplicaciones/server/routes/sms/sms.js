const express = require('express');
const router = express.Router();
const moment = require('moment');
const mysqldb = require('../../databaseMysql');
const middleware = require('../../middleware');


/**
 *
 * @api {post} /sms/add ADD
 * @apiName ADICIONAR UN SMS
 * @apiGroup SMS
 * @apiDescription registrar un nuevo sms
 * @apiParam {string} mensaje mensaje de texto.
 * @apiParam  {string} numero_documento_emisor numero del documento emisor.
 * @apiParam {string} receptor receptor del sms.
 *
 */

router.post('/sms/add', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const mensaje = json.mensaje;
  const numero_documento_emisor = json.numero_documento_emisor.toString().toUpperCase();
  const receptor = json.receptor.toString().toUpperCase();
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');


  mysqldb.query(`
  INSERT INTO sms(mensaje, numero_documento_emisor, receptor, fecha_modificacion)
  VALUES (?,?,?,?)`, [mensaje, numero_documento_emisor, receptor, fecha_modificacion], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });

});


module.exports = router;
