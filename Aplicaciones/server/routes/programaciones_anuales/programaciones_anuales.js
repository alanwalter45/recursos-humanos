const express = require('express');
const router = express.Router();
const moment = require('moment');
const mysqldb = require('../../databaseMysql');
const middleware = require('../../middleware');

var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');

var fs = require('fs');
var path = require('path');
const os = require('os');


/**
 *
 * @api {post} /programaciones-anuales/add ADD ACTIVITY
 * @apiName ADICIONAR UNA ACTIVIDAD POAI
 * @apiGroup PROGRAMACION ANUAL
 * @apiDescription registrar una nueva actividad al POAI
 * @apiParam {number} registro_id identificador del registro.
 * @apiParam {date} fecha_inicio fecha de inicio.
 * @apiParam {date} fecha_conclusion fecha de conclusion.
 * @apiParam {string} producto producto.
 * @apiParam {string} actividad actividad.
 *
 */

router.post('/programaciones-anuales/add-actividad', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const registro_id = json.registro_id;
  const fecha_inicio = moment(json.fecha_inicio).format('YYYY-MM-DD HH:mm:ss');
  const fecha_conclusion = moment(json.fecha_conclusion).format('YYYY-MM-DD HH:mm:ss');
  const producto = json.producto;
  const actividad = json.actividad.toString().toUpperCase();
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');


  mysqldb.query(`
  INSERT INTO programaciones_anuales(producto,actividad,fecha_inicio, fecha_conclusion, fecha_modificacion, registro_id)
  select ?,?,?,?,?,?
  WHERE NOT EXISTS(SELECT * FROM programaciones_anuales
    WHERE registro_id=? and actividad=?)`, [producto, actividad, fecha_inicio, fecha_conclusion, fecha_modificacion, registro_id, registro_id, actividad], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });

});



/**
*
* @api {post} /programaciones-anuales/edit UPDATE ACTIVITY
* @apiName MODIFICA ACTIVIDAD
* @apiGroup PROGRAMACION ANUAL
* @apiDescription modifica una actividad
* @apiParam {number} id identificador de la actividad.
* @apiParam {date} fecha_inicio fecha de inicio.
* @apiParam {date} fecha_conclusion fecha de conclusion.
* @apiPram {string} producto producto
* @apiParam {string} actividad actividad.
* @apiParam {string} fuente fuente de verficacion.
*
*/

router.post('/programaciones-anuales/edit-actividad', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const id = json.id;
  const fecha_inicio = json.fecha_inicio ? moment(json.fecha_inicio).format('YYYY-MM-DD HH:mm:ss') : null;
  const fecha_conclusion = json.fecha_conclusion ? moment(json.fecha_conclusion).format('YYYY-MM-DD HH:mm:ss') : null;
  const producto = json.producto ? json.producto : '';
  const actividad = json.actividad ? json.actividad.toString().toUpperCase() : '';
  const fuente_verificacion = json.fuente_verificacion ? json.fuente_verificacion.toString().toUpperCase() : '';
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`
  UPDATE programaciones_anuales SET producto=?, actividad=?, fecha_inicio=?,fecha_conclusion=?, fecha_modificacion=?, fuente_verificacion=?
  WHERE id=?`, [producto, actividad, fecha_inicio, fecha_conclusion, fecha_modificacion, fuente_verificacion, id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });

});



/**
*
* @api {post} /programaciones-anuales/get3-actividades GET3 ACTIVITIS
* @apiName OBTIENE 3 ACTIVIDAD
* @apiGroup PROGRAMACION ANUAL
* @apiDescription modifica una actividad
* @apiParam {number} id identificador del producto.
*
*/


router.post('/programaciones-anuales/get3-actividades', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);
  const id = json.id;

  mysqldb.query(`
  SELECT * from  actividades_productos_programaciones_anuales
  WHERE producto_programacion_anual_id=?`, [id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.length ? true : false, result: results });
    });

});


/**
 *
 * @api {post} /programaciones-anuales/get-programacion-anual-registro GET PROGRAMACION
 * @apiName OBTENER PROGRAMACIONES DEL AÑO EN CURSO POAI
 * @apiGroup PROGRAMACION ANUAL
 * @apiDescription obtiene la PROGRAMACION del año (poai) en curso de un registro del servidor público
 * @apiParam {number} registro_id identificador del registro.
 *
 */

router.post('/programaciones-anuales/get-programacion-anual-registro', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const registro_id = json.registro_id;

  mysqldb.query(`
  SELECT pm.* from programaciones_anuales pm left join registros re on pm.registro_id=re.id
  where pm.registro_id=? AND date_format(pm.fecha_modificacion,'%y')=date_format(now(),'%y')`, [registro_id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.length ? true : false, result: results });
    });

});


/**
 *
 * @api {post} /programaciones-anuales/get-programacion-anual GET PROGRAMACION ANUAL
 * @apiName OBTENER PROGRAMACIONES DEL AÑO EN CURSO POAI
 * @apiGroup PROGRAMACION ANUAL
 * @apiDescription obtiene la PROGRAMACION del año en curso de un registro del servidor público
 * @apiParam {number} registro_id identificador del registro.
 *
 */

router.post('/programaciones-anuales/get-programacion-anual', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const registro_id = json.registro_id;

  mysqldb.query(`
  SELECT pm.* from programaciones_anuales pm left join registros re on pm.registro_id=re.id
  where pm.registro_id=? AND date_format(pm.fecha_modificacion,'%y')=date_format(now(),'%y')`, [registro_id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.length ? true : false, result: results[0] });
    });

});

/**
 *
 * @api {post} /programaciones-anuales/get-productos-programacion-anual GET PRODUCTOS PROGRAMACION ANUAL
 * @apiName OBTIENE LOS PRODUCTOS DE LA PROGRAMACIONES DEL AÑO EN CURSO POAI
 * @apiGroup PROGRAMACION ANUAL
 * @apiDescription obtiene la PROGRAMACION del año en curso de un registro del servidor público
 * @apiParam {number} id identificador de la programacion.
 *
 */


router.post('/programaciones-anuales/get-productos-programacion-anual', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const id = json.id;

  mysqldb.query(`
  SELECT ppm.* FROM programaciones_anuales pa LEFT JOIN productos_programaciones_anuales ppm
  ON ppm.programacion_anual_id=pa.id
  where pa.id=? AND date_format(pa.fecha_modificacion,'%y')=date_format(now(),'%y')`, [id], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.length ? true : false, result: results });
    });

});


/**
 *
 * @api {post} /programaciones-anuales/update-programacion-anual UPDATE PROGRAMACION ANUAL
 * @apiName OBTIENE LOS PRODUCTOS DE LA PROGRAMACIONES DEL AÑO EN CURSO POAI
 * @apiGroup PROGRAMACION ANUAL
 * @apiDescription obtiene la PROGRAMACION del año en curso de un registro del servidor público
 * @apiParam {number} registro_id identificador del registro.
 * @apiParam {string} aclaracion_cambio_area aclaracion del cambio de area.
 * @apiparam {string} objetivo_cargo objetivo del cargo.
 *
 */


router.post('/programaciones-anuales/update-programacion-anual', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const registro_id = json.registro_id;
  const aclaracion_cambio_area = json.aclaracion_cambio_area;
  const aclaracion_firma = json.aclaracion_firma;
  const objetivo_cargo = json.objetivo_cargo;

  mysqldb.query(`
  UPDATE programaciones_anuales SET aclaracion_cambio_area=?, aclaracion_firma=? , objetivo_cargo=?
  where registro_id=? AND date_format(fecha_modificacion,'%y')=date_format(now(),'%y')`, [aclaracion_cambio_area,
      aclaracion_firma, objetivo_cargo,
      registro_id], function (error, results) {
        if (error) throw error;

        res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
      });

});

/**
 *
 * @api {post} /programaciones-anuales/update-producto-programacion-anual UPDATE PRODUCTO PROGRAMACION ANUAL
 * @apiName MODIFICA UN PRODUCTO DE LA PROGRAMACIONES DEL AÑO EN CURSO POAI
 * @apiGroup PROGRAMACION ANUAL
 * @apiDescription obtiene la PROGRAMACION del año en curso de un registro del servidor público
 * @apiParam {number} id identificador de la programacion anual.
 * @apiParam {string} producto producto.
 * @apiparam {date} fecha_conclusion fecha de conclusion.
 * @apiParam {string} fuente_verificacion fuente de verficacion.
 * @apiParam {number} porcentaje_asignado porcentaje asignado.
 *
 */

router.post('/programaciones-anuales/update-producto-programacion-anual', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const id = json.id;
  const producto = json.producto;
  const fecha_inicio = json.fecha_inicio;
  const fecha_conclusion = json.fecha_conclusion;
  const fuente_verificacion = json.fuente_verificacion;
  const porcentaje_asignado = json.porcentaje_asignado;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`
  UPDATE productos_programaciones_anuales
  SET producto = ?,
      fecha_inicio=?,
      fecha_conclusion=?,
      fuente_verificacion=?,
      porcentaje_asignado=?,
      fecha_modificacion=?

  where id=? AND date_format(fecha_modificacion,'%y')=date_format(now(),'%y')`, [
      producto,
      fecha_inicio, fecha_conclusion, fuente_verificacion, porcentaje_asignado,
      fecha_modificacion, id
    ], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });

});

/**
 *
 * @api {post} /programaciones-anuales/update-actividad-producto-programacion-anual UPDATE ACTIVIDAD PRODUCTO PROGRAMACION ANUAL
 * @apiName MODIFICA UNA ACTIVIDAD DE UN PRODUCTO DE LA PROGRAMACIONES DEL AÑO EN CURSO POAI
 * @apiGroup PROGRAMACION ANUAL
 * @apiDescription modifica una actividad de un producto en la PROGRAMACION del año en curso de un registro del servidor público
 * @apiParam {number} id identificador de la programacion anual.
 * @apiParam {string} actividad actividad.
 *
 */

router.post('/programaciones-anuales/update-actividad-producto-programacion-anual', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const id = json.id;
  const actividad = json.actividad;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  mysqldb.query(`
  UPDATE actividades_productos_programaciones_anuales
  SET actividad=?,
      fecha_modificacion=?

  where id=? AND date_format(fecha_modificacion,'%y')=date_format(now(),'%y')`, [
      actividad,
      fecha_modificacion, id
    ], function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false, result: results.affectedRows });
    });

});


/**
 * @api {post} /programaciones-mensuales/crear-programacion-default CREATE DEFAULT POAI.
 * @apiName AÑADE 20 ACTIVIDADES AL POAI
 * @apiGroup PROGRAMACION ANUAL
 * @apiDescription crea la PROGRAMACION por defecto que consta de 20 actividades obligadas a realizar durante el año.
 * @apiParam {number} registro_id identificador del registro.
 *
 */

router.post('/programaciones-anuales/crear-programacion-default', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const registro_id = json.registro_id;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  query = '';


  let indiceA = 0;

  mysqldb.query(`INSERT INTO programaciones_anuales(registro_id, fecha_modificacion)
              VALUES (?,?)`, [registro_id, fecha_modificacion], (err, results) => {
      if (err) throw err;


      for (let i = 0; i < 10; i++) {

        mysqldb.query(`INSERT INTO productos_programaciones_anuales(producto, fecha_modificacion,programacion_anual_id)
      VALUES ('producto${i + 1}',?,?)`, [fecha_modificacion, results.insertId], (err, results) => {
            if (err) throw err;


            for (let i = 0; i < 3; i++) {

              mysqldb.query(`INSERT INTO actividades_productos_programaciones_anuales(actividad, fecha_modificacion,producto_programacion_anual_id)
      VALUES ('actidad${++indiceA}',?,?)`, [fecha_modificacion, results.insertId], (err, results) => {
                  if (err) throw err;

                });

            }

          });

      }

      res.send({ success: results.affectedRows ? true : false, result: results })

    });


});



/**
 * @api {post} /programaciones-mensuales/exportar EXPORT POAI.
 * @apiName EXPORTA EL POAI
 * @apiGroup PROGRAMACION ANUAL
 * @apiDescription Exporta el POAI.
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



router.post('/programaciones-anuales/exportar', middleware.ensureAuthenticated, (req, res, next) => {


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


  ruta = __dirname.replace('\\routes\\programaciones_anuales', '') + "\\public\\assets\\docs\\";

  let destino = ruta + "programaciones-anuales\\";

  let optionOs = os.platform().toString();
  if (optionOs === "linux") {
    ruta = __dirname.replace('/routes/programaciones_anuales', '') + "/public/assets/docs/";
    destino = ruta + '/programaciones-anuales/';
  }

  var content = fs
    .readFileSync(ruta + 'poai.docx', 'binary');

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
    console.log(JSON.stringify({ error: e }));
    throw error;
  }

  var buf = doc.getZip()
    .generate({ type: 'nodebuffer' });

  fs.writeFileSync(destino + numero_documento + '.docx', buf);
  res.status(200).send({ success: true });
});

module.exports = router;
