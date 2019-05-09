const express = require('express');
const router = express.Router();
const moment = require('moment');
const mysqldb = require('./../../databaseMysql');
const middleware = require('./../../middleware');


/**
 * @api {post} /vacaciones/add ADD
 * @apiName ADICIONAR VACACIÓN
 * @apiGroup VACACION
 * @apiDescription Adiciona una vacación a nombre del servidor público
 * @apiParam {Number} registro_id indetificador del registro.
 * @apiParam {Date} fecha_inicio fecha inicio de salida.
 * @apiParam {Date} fecha_conclusión fecha conclusió del permiso.
 * @apiParam {Number} numero_dias número de días del permiso.
 *
 */

router.post('/vacaciones/add', middleware.ensureAuthenticated, (req, res, next) => {

  const json = JSON.parse(req.body.json);

  const registro_id = json.registro_id;
  const fecha_inicio = json.fecha_inicio;
  const numero_dias = json.numero_dias;
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  const fecha_conclusion = json.fecha_conclusion;


  mysqldb.query(`CALL add_formulario_vacacion(?,?,?,?,?)`, [fecha_modificacion,numero_dias,fecha_inicio,fecha_conclusion,registro_id], function (err, results) {

        if (err)throw err;
        res.status(200).send({ success: results.length, result:results });

  });
});



/*
|--------------------------------------------------------------------------------
|--| actualizar una contratacion
|--------------------------------------------------------------------------------
*/

router.post('/vacaciones/update', middleware.ensureAuthenticated, (req, res, next) => {

  /*   const json = JSON.parse(req.body.json);

    const fechas = json.fechas;
    const numero_documento = json.numero_documento;

    connectionMysql.query(`CALL edit_vacacion(?,?)`, [fechas,numero_documento], (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.status(200).send(JSON.stringify(results));
    }); */
});


/**
 * @api {post} /vacaciones/add UPDATE STATE
 * @apiName MODIFICA ESTADO DE LA VACACION
 * @apiGroup VACACION
 * @apiDescription Modifica el estado de la vacacion.
 * @apiParam {number} estado estado de la vacacion.
 * @apiParam {number} vacacion_id identificador de la vacacion.
 * @apiParam {string} motivo_cambio_estado motivo del cambio de estado de la vacacion.
 *
 */


router.post('/vacaciones/actualizar-estado', middleware.ensureAuthenticated, (req, res, next) => {

  let json = JSON.parse(req.body.json);

  let estado = json.estado;
  let vacacion_id = json.vacacion_id;
  let motivo_cambio_estado = json.motivo_cambio_estado;

  mysqldb.query(`UPDATE vacaciones SET estado=? ,
                            motivo_cambio_estado=?
                WHERE id=?`, [estado, motivo_cambio_estado,vacacion_id], function (error,results) {
    if (error)throw error;
    res.status(200).send({success:results.affectedRows?true:false});
  });

});



/**
 *
 * @api {post} /vacaciones/delete REMOVE
 * @apiName CANCELAR VACACIÓN
 * @apiGroup VACACION
 * @apiDescription modifica el estado del formulario a cancelado , en realidad no borra el registro
 * @apiParam  {number} registro_id identificador del registro.
 * @apiParam  {number} id identificador de la vacacion.
 *
 */

router.post('/vacaciones/delete', middleware.ensureAuthenticated, (req, res, next) => {

    const json = JSON.parse(req.body.json);

    const registro_id = json.registro_id;
    const id=json.id;

    mysqldb.query(`UPDATE vacaciones SET estado=?
    WHERE registro_id=? AND id=?`, [4,registro_id,id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send({success:results.affectedRows?true:false});
    });
});


/**
 * @api {get} /vacaciones/get-all GET ALL
 * @apiName OBTENER VACACIONES DEL MES ACTUAL
 * @apiGroup VACACION
 * @apiDescription Obtiene todas la vacaciones realizadas durante el mes en curso.
 *
 */

router.get('/vacaciones/get-all', middleware.ensureAuthenticated, (req, res, next) => {


  mysqldb.query(`
  SELECT vac.*,
  sp.nombres,sp.apellido_paterno,sp.apellido_materno,
  sp.numero_documento,
  de.nombre as departamento,
  ca.nombre as cargo,
  ar.nombre as area,
  un.nombre as unidad,
  es.tipo_contratacion
  FROM registros re INNER JOIN servidores_publicos sp ON re.servidor_publico_id=sp.id
                    LEFT JOIN departamentos de ON sp.departamento_id=de.id
                    LEFT JOIN estructuras es ON es.id=re.estructura_id
                    LEFT JOIN escalas_salariales esa ON esa.id=es.escala_salarial_id
                    LEFT JOIN cargos ca ON ca.id=esa.cargo_id
                    LEFT JOIN unidades un ON un.id=es.unidad_id
                    LEFT JOIN areas ar ON ar.id=un.area_id
                    INNER JOIN vacaciones vac ON vac.registro_id=re.id
  WHERE re.mes_id=(SELECT id FROM meses WHERE selected=1)`, function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.length?true:false, result: results });
    });

});


/**
 * @api {post} /vacaciones/get-all-registro GET ALL REGISTER
 * @apiName OBTENER VACACIONES DEL MES ACTUAL DE UN REGISTRO
 * @apiGroup VACACION
 * @apiDescription Obtiene todas la vacaciones realizadas durante el mes en curso de un registro dado.
 * @apiParam {String} registro_id identificador del registro.
 *
 */

router.post('/vacaciones/get-all-registro', middleware.ensureAuthenticated, (req, res, next) => {

  let json = JSON.parse(req.body.json);

  let registro_id = json.registro_id;

  mysqldb.query(`
  SELECT vac.*,
  sp.nombres,sp.apellido_paterno,sp.apellido_materno,
  sp.numero_documento,
  de.nombre as departamento,
  ca.nombre as cargo,
  ar.nombre as area,
  un.nombre as unidad,
  es.tipo_contratacion
  FROM registros re INNER JOIN servidores_publicos sp ON re.servidor_publico_id=sp.id
                    LEFT JOIN departamentos de ON sp.departamento_id=de.id
                    LEFT JOIN estructuras es ON es.id=re.estructura_id
                    LEFT JOIN escalas_salariales esa ON esa.id=es.escala_salarial_id
                    LEFT JOIN cargos ca ON ca.id=esa.cargo_id
                    LEFT JOIN unidades un ON un.id=es.unidad_id
                    LEFT JOIN areas ar ON ar.id=un.area_id
                    INNER JOIN vacaciones vac ON vac.registro_id=re.id
  WHERE re.id=? AND re.mes_id=(SELECT id FROM meses WHERE selected=1)`, [registro_id],function (error, results) {
      if (error) throw error;

      res.status(200).send({ success: results.length?true:false, result: results });
    });

});


/**
 * @api {post} /vacaciones/servants-dependientes GET VACACION DEPENDIENTE
 * @apiName OBTENER VACACIONES DE SERVIDOREs PÚBLICOS DEPENDIENTES
 * @apiGroup VACACION
 * @apiDescription Obtiene todos los vacaiones de los servidores públicos dependientes.
 * @apiParam {String} servidor_publico_id identificador del servidor publico.
 *
 */

router.post('/vacaciones/servants-dependientes', middleware.ensureAuthenticated, (req, res, next) => {

  let json = JSON.parse(req.body.json);

  let servidor_publico_id = json.servidor_publico_id;
  mysqldb.query(`

  SELECT
  vac.id,
  sp.id as servidor_publico_id,
  sp.numero_documento,
  sp.nombres,sp.apellido_paterno,sp.apellido_materno,
  sp.genero,
  sp.fecha_nacimiento,
  sp.correo_electronico,
  sp.telefono_fijo,
  sp.telefono_movil,
  sp.estado_civil,
  sp.direccion,
  sp.departamento_id,
  sp.pais_id,
  sp.provincia_id,
  sp.distrito,
  sp.localidad,
  sp.licencia_conducir,
  de.nombre as departamento,
  de2.nombre as departamento_expedido,
  un.nombre as unidad,
  ar.nombre as area,
  ca.nombre as cargo,
  re.estado,
  es.tipo_contratacion,
  ifc.forma_ingreso,
  ifc.fecha_inicio,
  ifc.fecha_conclusion,
  ifc.motivo_conclusion,
  re.id as registro_id,
  re.observado,
  es.numero,
  es.id as estructura_id,
  cat.codigo as categoria_programatica_id,
  sp.codigo_biometrico,
  vac.fecha_inicio as fecha_inicio_vacacion,
  vac.fecha_conclusion as fecha_conclusion_vacacion,
  vac.estado as estado_vacacion,
  vac.numero_dias as numero_dias_vacacion
  FROM registros re INNER JOIN servidores_publicos sp ON re.servidor_publico_id=sp.id
                    LEFT JOIN departamentos de ON sp.departamento_id=de.id
                    LEFT JOIN departamentos de2 ON sp.numero_documento_expedido=de2.id
                    LEFT JOIN estructuras es ON es.id=re.estructura_id
                    LEFT JOIN escalas_salariales esa ON esa.id=es.escala_salarial_id
                    LEFT JOIN cargos ca ON ca.id=esa.cargo_id
                    LEFT JOIN unidades un ON un.id=es.unidad_id
                    LEFT JOIN inf_contratacion ifc ON re.id=ifc.registro_id
                    LEFT JOIN areas ar ON ar.id=un.area_id
                    LEFT JOIN categorias_programaticas cat ON cat.id=es.categoria_programatica_id
                    INNER JOIN vacaciones vac ON vac.registro_id=re.id
  WHERE re.mes_id =(select id from meses where selected=1)
  AND un.id=(select unidad_id from registros re inner join estructuras es on  re.estructura_id=es.id
              where re.mes_id =(select id from meses where selected=1) and re.servidor_publico_id=?
              )
  ORDER BY es.numero asc

  `, [servidor_publico_id], function (error, results) {

    if (error) throw error;

    res.status(200).send({success:results.length?true:false,result:results});
  });

});

module.exports = router;
