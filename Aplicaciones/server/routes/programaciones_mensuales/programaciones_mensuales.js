const express = require('express');
const router = express.Router();
const moment = require('moment');
const mysqldb = require('./../../databaseMysql');
const middleware = require('./../../middleware');
var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');
var fs = require('fs');
var path = require('path');
const os = require('os');


/**
 * @api {post} /programaciones-mensuales/add ADD
 * @apiName ADICIONAR UNA ACTIVIDAD
 * @apiGroup PROGRAMACION MENSUAL
 * @apiDescription registrar una nueva actividad
 * @apiParam  {number} registro_id identificador del registro
 * @apiParam  {date} fecha fecha de la programacion.
 * @apiParam {string} lugar lugar de la actividad.
 * @apiParam {string} producto producto que generara la actividad.
 * @apiParam  {string} actividad actividad que realizara.
 *
 */

router.post('/programaciones-mensuales/add-actividad', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const registro_id = json.registro_id;
  const fecha = json.fecha;
  const lugar = json.lugar.toString().toUpperCase();
  const producto = json.producto;
  const actividad = json.actividad.toString().toUpperCase();
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');


  mysqldb.query(`
  INSERT INTO programaciones_mensuales(fecha, lugar, actividad, producto, registro_id, fecha_modificacion)
  select ?,?,?,?,?,?
  WHERE NOT EXISTS(SELECT * FROM programaciones_mensuales
    WHERE registro_id=? and fecha=? and actividad=?)`, [fecha, lugar, actividad, producto, registro_id, fecha_modificacion, registro_id, fecha, actividad], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });

});



/**
 * @api {post} /programaciones-mensuales/edit-actividad UPDATE ACTIVITY
 * @apiName MODIFICA ACTIVIDAD
 * @apiGroup PROGRAMACION MENSUAL
 * @apiDescription modifica una actividad
 * @apiParam  {number} id identificador de la actividad.
 * @apiParam  {date} fecha fecha de la programacion.
 * @apiParam {string} lugar lugar de la actividad.
 * @apiParam {string} producto producto que generara la actividad.
 * @apiParam  {string} actividad actividad que realizara.
 * @apiParam  {string} cumplimiento_ejecucion cumplimiento y ejecucion de la actividad.
 *
 */

router.post('/programaciones-mensuales/edit-actividad', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const id = json.id;
  const fecha = json.fecha?moment(json.fecha).format('YYYY-MM-DD'):null;
  const lugar = json.lugar?json.lugar.toString().toUpperCase():'';
  const producto = json.producto ?json.producto:'';
  const actividad = json.actividad?json.actividad.toString().toUpperCase():'';
  const cumplimiento_ejecucion = json.cumplimiento_ejecucion?json.cumplimiento_ejecucion.toString():'';
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`
  UPDATE programaciones_mensuales SET fecha=?, lugar=?, actividad=?, producto=?, fecha_modificacion=?, cumplimiento_ejecucion=?
  WHERE id=?`, [fecha, lugar, actividad, producto, fecha_modificacion,cumplimiento_ejecucion, id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });

});


/**
 * @api {post} /programaciones-mensuales/get-programacion-mensual-registro GET PROGRAMACION REGISTRO.
 * @apiName OBTENER PROGRAMACION DE UN REGISITRO DEL MES EN CURSO
 * @apiGroup PROGRAMACION MENSUAL
 * @apiDescription obtiene la PROGRAMACION del mes en curso de un registro del servidor público
 * @apiParam  {number} registro_id identificador del registro.
 *
 *
 */

router.post('/programaciones-mensuales/get-programacion-mensual-registro', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const registro_id = json.registro_id;

  mysqldb.query(`
  SELECT pm.* from programaciones_mensuales pm left join registros re on pm.registro_id=re.id
  where pm.registro_id=? AND date_format(pm.fecha_modificacion,'%m')=date_format(now(),'%m')`, [registro_id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.length ? true : false, result: results });
    });

});


/**
 * @api {post} /programaciones-mensuales/crear-programacion-default CREATE PROGRAMACION DEFAUT
 * @apiName AÑADE 5 ACTIVIDADES
 * @apiGroup PROGRAMACION MENSUAL
 * @apiDescription crea la PROGRAMACION por defecto que consta de 5 actividades obligadas a realizar
 * @apiParam  {number} registro_id identificador del registro.
 *
 */

router.post('/programaciones-mensuales/crear-programacion-default', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const registro_id = json.registro_id;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  let query = '';// 5 campos vacios para rellenar

  for (let i = 0; i < 5; i++) {
    query += `(${registro_id},'${fecha_modificacion}')${!(i == 4) ? ',' : ''}`
  }



  mysqldb.query(`INSERT INTO programaciones_mensuales(registro_id, fecha_modificacion)
              VALUES ${query}`, (err, results) => {
      if (err) throw err;
      res.send({ success: results.affectedRows ? true : false, result: results })
    })

})


/**
 * @api {get} /programaciones-mensuales/get-all GET ALL
 * @apiName TODOS LOS PERMISOS DEL MES ACTUAL
 * @apiGroup PROGRAMACION MENSUAL
 * @apiDescription obtener todos los permisos del mes.
 *
 */

router.get('/programaciones-mensuales/get-all', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`
  SELECT *
  FROM programaciones_mensuales
  WHERE date_format(fecha_modificacion,'%m')=date_format(now(),'%m')`, function (error, results) {
      if (error) throw error;
      res.status(200).send({ success: results.length?true:false, result: results });
    }
  );

});


/**
 * @api {post} /programaciones-mensuales/exportar EXPORT
 * @apiName EXPORTAR LOS PERMISOS DEL MES ACTUAL
 * @apiGroup PROGRAMACION MENSUAL
 * @apiDescription obtener todos los permisos del mes.
 * @apiParam {number} numero_documento numero de documento de identidad.
 * @apiParam {string} nombres nombre del servidor publico.
 * @apiParam {string} apellido_paterno apellido paterno del servidor publico.
 * @apiParam {string} apellido_materno apellido materno del servidor publico.
 * @apiParam {string} cargo cargo del servidor publico.
 * @apiParam {number} nivel_salarial nivel salarial del servidor publico.
 * @apiParam {string} secretaria secretaria en la que trabaja.
 * @apiParam {string} direccion_jefatura direccion o jefatura en la que trabaja.
 * @apiParam {string} relacion_laboral relacion laboral que tien (ITEM / CONTRATO)
 * @apiParam {string} numero numero de (ITEM/CONTRATO).
 * @apiParam {number} gestion gestion a la que corresponde.
 * @apiParam {string} aclaracion_cambio_area aclaracion del cambio de area.
 * @apiParam {string} objetivo_cargo objetivo del cargo.
 * @apiParam {string} aclaracion_firma_sp aclaracion de la firma.
 * @apiParam {date} fecha_elaboracion fecha de elaboracion.
 * @apiParam {array} productos lista de productos.
 *
 */

router.post('/programaciones-mensuales/exportar', middleware.ensureAuthenticated, (req, res, next) => {


  const json = JSON.parse(req.body.json);

  const numero_documento = json.numero_documento;
  const nombres = json.nombres;
  const apellido_paterno = json.apellido_paterno;
  const apellido_materno = json.apellido_materno;
  const cargo = json.cargo;
  const nivel_salarial = json.nivel;
  const secretaria = json.secretaria;
  const direccion_jefatura = json.direccion_jefatura;
  const relacion_laboral = json.relacion_laboral;
  const numero = json.numero;
  const gestion = json.gestion;
  const aclaracion_cambio_area = json.aclaracion_cambio_area;
  const objetivo_cargo = json.objetivo_cargo;
  const aclaracion_firma_sp = json.aclaracion_firma_sp;
  const fecha_elaboracion_sp = json.fecha_elaboracion_sp;
  const productos = json.productos;


  ruta = __dirname.replace('\\routes\\programaciones_mensuales', '') + "\\public\\assets\\docs\\";

  let destino = ruta + "programaciones-mensuales\\";

  let optionOs = os.platform().toString();
  if (optionOs === "linux") {
    ruta = __dirname.replace('/routes/programaciones_mensuales', '') + "/public/assets/docs/";
    destino = ruta + '/programaciones-mensuales/';
  }

  var content = fs
    .readFileSync(ruta + 'pomi.docx', 'binary');

  var zip = new JSZip(content);

  var doc = new Docxtemplater();
  doc.loadZip(zip);

  doc.setData({
    nombres,
    apellido_paterno,
    apellido_materno,
    cargo,
    nivel_salarial,
    secretaria,
    direccion_jefatura,
    relacion_laboral,
    numero,
    gestion,
    aclaracion_cambio_area,
    objetivo_cargo,
    aclaracion_firma_sp,
    fecha_elaboracion_sp,
    productos
  });

  try {
    doc.render()
  }
  catch (error) {
    var e = {
      message: error.message,
      name: error.name,
      stack: error.stack,
      properties: error.properties,
    }
    throw error;
  }

  var buf = doc.getZip()
    .generate({ type: 'nodebuffer' });

  fs.writeFileSync(destino + numero_documento + '.docx', buf);
  res.status(200).send({ success: true });
});


module.exports = router;
