const express = require('express');
const router = express.Router();
const middleware = require('./../../middleware');
const mysqldb = require('./../../databaseMysql');
const multer = require('multer');
const upload = multer({ dest: __dirname + '/public/assets/photos' });
const fs = require('fs');
const moment = require('moment');


/**
 * @api {get} /servidores_publicos/get-all GET ALL
 * @apiName OBTIENE TODOS LOS SERVIDORES PÚBLICOS DEl SISTEMA
 * @apiGroup SERVIDORES PUBLICOS DEL SISTEMA
 *
 * @apiDescription Obtiene los documentos presentados de un registro
 *
 */

router.get('/servidores_publicos/get-all', middleware.ensureAuthenticated, (req, res, next) => {

  mysqldb.query(`
  SELECT
  sp.id,
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
  sp.autorizacion_formulario_informacion_personal,
  de.nombre as departamento,
  de2.nombre as numero_documento_expedido,
  sp.numero_documento_expedido as numero_documento_expedido_id,
  sp.codigo_biometrico
  FROM servidores_publicos sp LEFT JOIN departamentos de ON sp.departamento_id=de.id
                              LEFT JOIN departamentos de2 ON sp.numero_documento_expedido=de2.id
  ORDER BY sp.apellido_paterno asc
  `, function (err, result) {

      if (err) throw err;
      res.status(200).send(JSON.stringify({ success: result.length ? true : false, result }));

    });
});

/**
 *
 * @api {post} /servidores_publicos/update-informacion-general UPDATE INFORMACION GENERAL.
 * @apiName MODIFICA INFORMACION GENERAL
 * @apiGroup SERVIDORES PUBLICOS DEL SISTEMA
 * @apiDescription actualiza la informacion general de registro.
 * @apiParam {string} numero_documento numero del carnet de identidad.
 * @apiParam {string} profesion profesion.
 * @apiParam  {string} nivel_instruccion nivel de instruccion.
 * @apiParam  {strgin} matricula_colegio_profesionales matricula del colegio de profesionales.
 * @apiParam  {string} casa_estudios casa de estudios.
 * @apiParam  {string} numero_resolucion_titulo numero de resolucion del titulo.
 * @apiParam  {date} fecha_emision_titulo fecha de emision del titulo.
 * @apiParam  {string} numero_resolucion_provision_nacional numero de resolucion de provision nacional.
 * @apiParam  {date} fecha_emision_provision_nacional fecha de emision provision nacional.
 * @apiParam  {string} titulo_postgrado titulo del postgrado.
 * @apiParam  {string} casa_estudios_postgrado casa de estudios postgrado.
 * @apiParam  {string} numero_resolucion_postgrado numero de resolucion de postagrado.
 * @apiParam  {date} fecha_emision_postgrado fecha de emision postgrado.
 * @apiParam  {string} otros_conocimientos otros conocimientos.
 *
 */

router.post('/servidores_publicos/update-informacion-general', middleware.ensureAuthenticated, (req, res, next) => {

  json = JSON.parse(req.body.json);
  const numero_documento = json.numero_documento.toUpperCase();
  const profesion = json.profesion ? json.profesion.toUpperCase() : null;
  const nivel_instruccion = json.nivel_instruccion ? json.nivel_instruccion.toUpperCase() : null;
  const matricula_colegio_profesionales = json.matricula_colegio_profesionales ? json.matricula_colegio_profesionales.toUpperCase() : null;
  const casa_estudios = json.casa_estudios ? json.casa_estudios.toUpperCase() : null;
  const numero_resolucion_titulo = json.numero_resolucion_titulo ? json.numero_resolucion_titulo.toUpperCase() : null;
  const fecha_emision_titulo = json.fecha_emision_titulo;
  const numero_resolucion_provision_nacional = json.numero_resolucion_provision_nacional ? json.numero_resolucion_provision_nacional.toUpperCase() : null;
  const fecha_emision_provision_nacional = json.fecha_emision_provision_nacional;
  const titulo_postgrado = json.titulo_postgrado ? json.titulo_postgrado.toUpperCase() : null;
  const casa_estudios_postgrado = json.casa_estudios_postgrado ? json.casa_estudios_postgrado.toUpperCase() : null;
  const numero_resolucion_postgrado = json.numero_resolucion_postgrado ? json.numero_resolucion_postgrado.toUpperCase() : null;
  const fecha_emision_postgrado = json.fecha_emision_postgrado;
  const otros_conocimientos = json.otros_conocimientos ? json.otros_conocimientos.toUpperCase() : null;

  mysqldb.query(`
  update inf_academica set profesion=?,
                       nivel_instruccion=?,
                       matricula_colegio_profesionales=?,
                       casa_estudios=?,
                       numero_resolucion_titulo=?,
                       fecha_emision_titulo=?,
                       numero_resolucion_provision_nacional=?,
                       fecha_emision_provision_nacional =?,
                       titulo_postgrado=?,
                       casa_estudios_postgrado=?,
                       numero_resolucion_postgrado=?,
                       fecha_emision_postgrado=?,
                       otros_conocimientos=?
  where registro_id=(select id from registros
                      where numero_documento=?)`, [profesion,
      nivel_instruccion,
      matricula_colegio_profesionales,
      casa_estudios,
      numero_resolucion_titulo,
      fecha_emision_titulo,
      numero_resolucion_provision_nacional,
      fecha_emision_provision_nacional,
      titulo_postgrado,
      casa_estudios_postgrado,
      numero_resolucion_postgrado,
      fecha_emision_postgrado,
      otros_conocimientos,
      numero_documento], function (err, results) {

        if (err)
          throw err;

        res.status(200).send({ success: results.affectedRows ? true : false });
      });
});



/**
 *
 * @api {post} /servidores_publicos/update-autorizacion-formulario UPDATE AUTORIZACION FORMULARIO.
 * @apiName MODIFICA AUTORIZACION FORMULARIO
 * @apiGroup SERVIDORES PUBLICOS DEL SISTEMA
 * @apiDescription actualiza la autorizacion del formulario.
 * @apiParam {string} numero_documento numero del carnet de identidad.
 * @apiParam {string} autorizacion_formulario_informacion_personal autorizacion del formulario personal.
 *
 */



router.post('/servidores-publicos/update-autorizacion-formulario', middleware.ensureAuthenticated, (req, res, next) => {

  json = JSON.parse(req.body.json);
  const numero_documento = json.numero_documento ? json.numero_documento.toUpperCase() : 0;
  const autorizacion_formulario_informacion_personal = !json.autorizacion_formulario_informacion_personal;


  mysqldb.query(`
  update servidores_publicos set autorizacion_formulario_informacion_personal=?
  where numero_documento=?`, [autorizacion_formulario_informacion_personal, numero_documento], function (err, results) {

      if (err)
        throw err;

      res.status(200).send({ success: results.affectedRows ? true : false });
    });
});

/**
 *
 * @api {post} /servidores_publicos/update UPDATE SERVIDOR PUBLICO.
 * @apiName MODIFICA SERVIDOR PUBLICO
 * @apiGroup SERVIDORES PUBLICOS DEL SISTEMA
 * @apiDescription modifica la informacion de los servidores publicos.
 * @apiParam {string} numero_documento numero del carnet de identidad.
 * @apiParam {string} numero_documento_expedido numero de documento expedido.
 * @apiParam  {string} nombres nombres.
 * @apiParam  {string} apellido_paterno apellido paterno.
 * @apiParam  {string} apellido_materno apellido materno.
 * @apiParam  {string} estado_civil estado civil.
 *
 */


router.post('/servidores-publicos/update', middleware.ensureAuthenticated, (req, res, next) => {


  json = JSON.parse(req.body.json);

  const numero_documento = json.numero_documento;
  const numero_documento_expedido = json.numero_documento_expedido;
  const nombres = json.nombres.toUpperCase();
  const apellido_paterno = json.apellido_paterno.toUpperCase();
  const apellido_materno = json.apellido_materno.toUpperCase();
  const estado_civil = json.estado_civil.toUpperCase();


  mysqldb.query(`
  update servidores_publicos set
                              numero_documento_expedido=?,
                              nombres=?,
                              apellido_paterno=?,
                              apellido_materno=?,
                              estado_civil=?
  where numero_documento=?`, [numero_documento_expedido,
      nombres, apellido_paterno, apellido_materno,
      estado_civil,
      numero_documento], function (err, results) {

        if (err)
          throw err;
        res.status(200).send({ success: results.affectedRows ? true : false });
      });
});


/**
 *
 * @api {post} /servidores_publicos/update-autorizacion-formulario-informacion-personal UPDATE AUTORIZACION FORMULARIO INFORMACION PERSONAL.
 * @apiName MODIFICA LA AUTORIZACION FORMULARIO INFORMACION PERSONAL
 * @apiGroup SERVIDORES PUBLICOS DEL SISTEMA
 * @apiDescription modifica la autorizacion del formulario.
 * @apiParam {string} numero_documento numero del carnet de identidad.
 *
 */


router.post('/servidores-publicos/update-autorizacion-formulario-informacion-personal', middleware.ensureAuthenticated, (req, res, next) => {


  json = JSON.parse(req.body.json);

  const numero_documento = json.numero_documento;

  mysqldb.query(`
  update servidores_publicos set autorizacion_formulario_informacion_personal=?
  where numero_documento=?`, [1,
      numero_documento], function (err, results) {

        if (err)
          throw err;


        res.status(200).send({ success: results.affectedRows ? true : false });
      });
});


/**
 *
 * @api {post} /servidores_publicos/update-informacion-contratacion UPDATE AUTORIZACION INFORMACION CONTRATACION.
 * @apiName MODIFICA LA AUTORIZACION INFORMACION CONTRATACION
 * @apiGroup SERVIDORES PUBLICOS DEL SISTEMA
 * @apiDescription modifica la informacion de la contracion.
 * @apiParam {string} numero_documento numero del carnet de identidad.
 * @apiParam  {string} numero_documento_registro numero de documento del registro.
 * @apiParam  {string} relacion_laboral relacion laboral.
 * @apiParam  {string} numero_contrato numero de contratacion.
 * @apiParam  {string} cargo cargo.
 * @apiParam  {number} nivel_salarial nivel salarial.
 * @apiParam  {number} haber_basico haber basico.
 * @apiParam  {string} lugar_trabajo  lugar de trabajo.
 * @apiParam {date} fecha_ingreso fecha de ingreso.
 * @apiParam {date} fecha_conclusion fecha de conclusion.
 * @apiParam {string} motivo_conclusion motivo de la conclusion.
 * @apiParam {string} estado estado.
 * @apiParam  {string} forma_ingreso forma de ingreso.
 * @apiParam {string} unidad_trabajo unidad de trabajo.
 * @apiParam  {string} secretaria secretaria.
 * @apiParam  {string} programa_proyecto programa/proyecto.
 * @apiParam {string} es_tecnico_campo es tecnico de campo.
 *
 */

router.post('/servidores_publicos/update-informacion-contratacion', middleware.ensureAuthenticated, (req, res, next) => {

  json = JSON.parse(req.body.json);
  const numero_documento_registro = json.numero_documento_registro.toUpperCase();
  const relacion_laboral = json.relacion_laboral ? json.relacion_laboral.toUpperCase() : null;
  const numero_documento = json.numero_documento ? json.numero_documento.toUpperCase() : null;
  const numero_contrato = json.numero_contrato ? json.numero_contrato.toUpperCase() : null;
  const cargo = json.cargo ? json.cargo.toUpperCase() : null;
  const nivel_salarial = json.nivel_salarial ? json.nivel_salarial : null;
  const haber_basico = json.haber_basico ? json.haber_basico : null;
  const lugar_trabajo = json.lugar_trabajo ? json.lugar_trabajo.toUpperCase() : null;
  const fecha_ingreso = json.fecha_ingreso ? json.fecha_ingreso.toUpperCase() : null;
  const fecha_conclusion = json.fecha_conclusion ? json.fecha_conclusion.toUpperCase() : null;
  const motivo_conclusion = json.motivo_conclusion ? json.motivo_conclusion.toUpperCase() : null;
  const estado = json.estado ? json.estado.toUpperCase() : null;
  const forma_ingreso = json.forma_ingreso ? json.forma_ingreso.toUpperCase() : null;
  const unidad_trabajo = json.unidad_trabajo ? json.unidad_trabajo.toUpperCase() : null;
  const secretaria = json.secretaria ? json.secretaria.toUpperCase() : null;
  const programa_proyecto = json.programa_proyecto ? json.programa_proyecto.toUpperCase() : null;
  const es_tecnico_campo = json.es_tecnico_campo ? json.es_tecnico_campo.toUpperCase() : null;

  mysqldb.query(`
  update inf_contratacion set relacion_laboral=?,
                       numero_documento=?,
                       numero_contrato=?,
                       cargo=?,
                       nivel_salarial=?,
                       haber_basico=?,
                       lugar_trabajo=?,
                       fecha_ingreso=?,
                       fecha_conclusion =?,
                       motivo_conclusion=?,
                       estado=?,
                       forma_ingreso=?,
                       unidad_trabajo=?,
                       secretaria=?,
                       programa_proyecto=?,
                       es_tecnico_campo=?
  where registro_id=(select id from registros
                      where numero_documento=?)`, [relacion_laboral,
      numero_documento,
      numero_contrato,
      cargo,
      nivel_salarial,
      haber_basico,
      lugar_trabajo,
      fecha_ingreso,
      fecha_conclusion,
      motivo_conclusion,
      estado,
      forma_ingreso,
      unidad_trabajo,
      secretaria,
      programa_proyecto,
      es_tecnico_campo,
      numero_documento_registro], function (err, results) {

        if (err)
          throw err;


        res.status(200).send({ success: results.affectedRows ? true : false });
      });
});

/**
 *
 * @api {post} /servidores_publicos/update-informacion-contratacion UPDATE AUTORIZACION INFORMACION CONTRATACION.
 * @apiName MODIFICA LA AUTORIZACION INFORMACION CONTRATACION
 * @apiGroup SERVIDORES PUBLICOS DEL SISTEMA
 * @apiDescription modifica la informacion de la contracion.
 * @apiParam {string} numero_documento numero del carnet de identidad.
 * @apiParam  {string} numero_documento_registro numero de documento del registro.
 * @apiParam  {string} relacion_laboral relacion laboral.
 * @apiParam  {string} numero_contrato numero de contratacion.
 * @apiParam  {string} cargo cargo.
 * @apiParam  {number} nivel_salarial nivel salarial.
 * @apiParam  {number} haber_basico haber basico.
 * @apiParam  {string} lugar_trabajo  lugar de trabajo.
 * @apiParam {date} fecha_ingreso fecha de ingreso.
 * @apiParam {date} fecha_conclusion fecha de conclusion.
 * @apiParam {string} motivo_conclusion motivo de la conclusion.
 * @apiParam {string} estado estado.
 * @apiParam  {string} forma_ingreso forma de ingreso.
 * @apiParam {string} unidad_trabajo unidad de trabajo.
 * @apiParam  {string} secretaria secretaria.
 * @apiParam  {string} programa_proyecto programa/proyecto.
 * @apiParam {string} es_tecnico_campo es tecnico de campo.
 *
 */

router.post('/servidores_publicos/update-informacion-politica', middleware.ensureAuthenticated, (req, res, next) => {

  json = JSON.parse(req.body.json);
  const numero_documento_registro = json.numero_documento_registro.toUpperCase();
  const distrito_municipio = json.distrito_municipio ? json.distrito_municipio.toUpperCase() : null;
  const region = json.region ? json.region.toUpperCase() : null;
  const organizacion_respaldo = json.organizacion_respaldo ? json.organizacion_respaldo.toUpperCase() : null;
  const representante = json.representante ? json.representante.toUpperCase() : null;

  mysqldb.query(`
  update inf_politica set distrito_municipio=?,
                       region=?,
                       organizacion_respaldo=?,
                       representante=?
  where registro_id=(select id from registros
                      where numero_documento=?)`, [distrito_municipio,
      region,
      organizacion_respaldo,
      representante,
      numero_documento_registro], function (err, results) {

        if (err)
          throw err;


        res.status(200).send({ success: results.affectedRows ? true : false });
      });
});

/**
 *
 * @api {post} /servidores_publicos/update-image UPDATE IMAGE
 * @apiName MODIFICA LA IMAGEN
 * @apiGroup SERVIDORES PUBLICOS DEL SISTEMA
 * @apiDescription modifica la imagen de un servidor publico.
 * @apiParam {file} file archivo de imagen.
 * @apiParam  {string} body.propietario propietario.
 *
 */

router.post('/servidores_publicos/update-image', upload.single('imagen'), (req, res, next) => {


  mysqldb.query(`
  UPDATE inf_politica SET imagen=?
  WHERE registro_id=(SELECT id FROM registros
                      WHERE numero_documento=?)`, [
      fs.readFileSync(req.file.path), req.body.propietario.toUpperCase()], function (err, results) {

        if (err)
          throw err;


        res.status(200).send({ success: results.affectedRows ? true : false, result: req.file });
      })
});


/**
 *
 * @api {post} /servidores_publicos/get-image GET IMAGE
 * @apiName OBTENER IMAGEN
 * @apiGroup SERVIDORES PUBLICOS DEL SISTEMA
 * @apiDescription obtiene la imagen de un servidor publico.
 * @apiParam  {string} numero_documento numero del carnet de identidad.
 *
 */

router.post('/servidores_publicos/get-image', upload.single('imagen'), (req, res, next) => {


  const json = JSON.parse(req.body.json);
  const numero_documento = json.numero_documento;


  mysqldb.query(`
  SELECT  imagen FROM inf_politica
  WHERE registro_id=(SELECT id FROM registros
                      WHERE numero_documento=?)`, [numero_documento], function (err, results) {

      if (err)
        throw err;


      res.status(200).send({ success: results.length ? true : false, result: results[0] });
    })
});


/* router.post('/servidores_publicos/update-informacion-inamovilidad', middleware.ensureAuthenticated, (req, res, next) => {

  json = JSON.parse(req.body.json);
  const numero_documento_registro = json.numero_documento_registro.toUpperCase();
  const discapacidad = json.discapacidad ? json.discapacidad : null;
  const asignacion_familiar = json.asignacion_familiar ? json.asignacion_familiar : null;
  const persona_con_discapacidad = json.persona_con_discapacidad ? json.persona_con_discapacidad.toUpperCase() : null;
  const tipo_discapacidad = json.tipo_discapacidad ? json.tipo_discapacidad.toUpperCase() : null;
  const porcentaje_discapacidad = json.porcentaje_discapacidad ? json.porcentaje_discapacidad : null;
  const numero_carnet_discapacidad = json.numero_carnet_discapacidad ? json.numero_carnet_discapacidad.toUpperCase() : null;
  const fecha_emision = json.fecha_emision ? json.fecha_emision : null;
  const fecha_vencimiento = json.fecha_vencimiento ? json.fecha_vencimiento : null;
  const prenatal_inicio = json.prenatal_inicio ? json.prenatal_inicio : null;
  const prenatal_conclusion = json.prenatal_conclusion ? json.prenatal_conclusion : null;
  const natalidad = json.natalidad ? json.natalidad : null;
  const lactancia_inicio = json.lactancia_inicio ? json.lactancia_inicio : null;
  const lactancia_conclusion = json.lactancia_conclusion ? json.lactancia_conclusion : null;
  const nombre_del_ninho = json.nombre_del_ninho ? json.nombre_del_ninho.toUpperCase() : null;

  mysqldb.query(`
  update inf_inamovilidad set discapacidad=?,
                       persona_con_discapacidad=?,
                       tipo_discapacidad=?,
                       porcentaje_discapacidad=?,
                       numero_carnet_discapacidad=?,
                       fecha_emision=?,
                       fecha_vencimiento=?,
                       prenatal_inicio=?,
                       prenatal_conclusion=?,
                       natalidad=?,
                       lactancia_inicio=?,
                       lactancia_conclusion=?,
                       nombre_del_ninho=?,
                       asignacion_familiar=?

  where registro_id=(select id from registros
                      where numero_documento=?)`, [discapacidad,
      persona_con_discapacidad,
      tipo_discapacidad,
      porcentaje_discapacidad,
      numero_carnet_discapacidad,
      fecha_emision,
      fecha_vencimiento,
      prenatal_inicio,
      prenatal_conclusion,
      natalidad,
      lactancia_inicio,
      lactancia_conclusion,
      nombre_del_ninho,
      asignacion_familiar,
      numero_documento_registro], function (err,results) {

        if (err)
          throw err;


        res.status(200).send({ success: results.affectedRows?true:false });
      });
}); */

/*

router.post('/servidores_publicos/update-informacion-afiliacion', middleware.ensureAuthenticated, (req, res, next) => {

  json = JSON.parse(req.body.json);
  const numero_documento_registro = json.numero_documento_registro.toUpperCase();
  const entidad_caja = json.entidad_caja ? json.entidad_caja.toUpperCase() : null;
  const fecha_ingreso_caja = json.fecha_conclusion_caja ? json.fecha_ingreso_caja : null;
  const fecha_conclusion_caja = json.fecha_conclusion_caja ? json.fecha_conclusion_caja : null;
  const motivo_conclusion_caja = json.motivo_conclusion_caja ? json.motivo_conclusion_caja.toUpperCase() : null;
  const entidad_afp = json.entidad_afp ? json.entidad_afp.toUpperCase() : null;
  const fecha_ingreso_afp = json.fecha_ingreso_afp ? json.fecha_ingreso_afp : null;

  mysqldb.query(`
  update inf_afiliacion set entidad_caja=?,
                       fecha_ingreso_caja=?,
                       fecha_conclusion_caja=?,
                       motivo_conclusion_caja=?,
                       entidad_afp=?,
                       fecha_ingreso_afp=?
  where registro_id=(select id from registros
                      where numero_documento=?)`, [entidad_caja,
      fecha_ingreso_caja,
      fecha_conclusion_caja,
      motivo_conclusion_caja,
      entidad_afp,
      fecha_ingreso_afp,
      numero_documento_registro], function (err,results) {

        if (err)
          throw err;


        res.status(200).send({ success: results.affectedRows?true:false });
      });
}); */


/**
 *
 * @api {post} /servidores-publicos/add ADD SERVIDOR PUBLICO
 * @apiName ADICIONA SERVIDOR PÚBLICO
 * @apiGroup SERVIDOR PÚBLICO
 * @apiDescription Adiciona servidor publico
 * @apiParam  {string} numero_documento numero de carnet de identidad.
 * @apiParam  {string} numero_documento_expedido numero de documento expedido.
 * @apiParam  {string} nombre nombres.
 * @apiParam  {string} apellido_paterno apellido paterno.
 * @apiParam  {string} apellido_materno apellido materno.
 * @apiParam  {string} estado_civil estado civil.
 *
 */

router.post('/servidores-publicos/add', middleware.ensureAuthenticated, (req, res, next) => {

  json = JSON.parse(req.body.json);
  const numero_documento = json.numero_documento.toUpperCase();
  const numero_documento_expedido = json.numero_documento_expedido;
  const nombres = json.nombres.toUpperCase();
  const apellido_paterno = json.apellido_paterno.toUpperCase();
  const apellido_materno = json.apellido_materno.toUpperCase();
  const estado_civil = json.estado_civil.toUpperCase();
  const fecha_modificacion = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');


  //se asume que es de bolivia - chuquisaca

  mysqldb.query(`
    INSERT INTO servidores_publicos(numero_documento,numero_documento_expedido,nombres,apellido_paterno,
      apellido_materno,estado_civil,fecha_modificacion,pais_id,departamento_id)
    SELECT ?,?,?,?,?,?,?,?,?
    WHERE NOT EXISTS(SELECT 1 FROM servidores_publicos
                    WHERE numero_documento=? )`,
    [numero_documento, numero_documento_expedido, nombres, apellido_paterno, apellido_materno, estado_civil, fecha_modificacion, 1, 9, numero_documento], function (err, results) {

      if (err) throw err;

      mysqldb.query(`
            insert into inf_afiliacion_afp(servidor_publico_id)
            select ?
            where not exists(select 1 from inf_afiliacion_afp where servidor_publico_id=?)`, [results.insertId, results.insertId], function (err) {
          if (err) throw err;

        });

      mysqldb.query(`
          insert into inf_afiliacion_caja_salud(servidor_publico_id)
          select ?
          where not exists(select 1 from inf_afiliacion_caja_salud where servidor_publico_id=?)`, [results.insertId, results.insertId], function (err) {
          if (err) throw err;

        });



      mysqldb.query(`
              insert into inf_discapacidad(servidor_publico_id)
              select ?
              where not exists(select 1 from inf_discapacidad where servidor_publico_id=?)`, [results.insertId, results.insertId], function (err) {
          if (err) throw err;

        });



      mysqldb.query(`
          insert into inf_militar(servidor_publico_id)
          select ?
          where not exists(select 1 from inf_militar where servidor_publico_id=?)`, [results.insertId, results.insertId], function (err) {
          if (err) throw err;

        });



      mysqldb.query(`
          insert into inf_redes_sociales(servidor_publico_id)
          select ?
          where not exists(select 1 from inf_redes_sociales where servidor_publico_id=?)`, [results.insertId, results.insertId], function (err) {
          if (err) throw err;

        });

      res.status(200).send({ success: results.insertId ? true : false, result: results.insertId });




    });

});

/**
 *
 * @api {post} /servidores-publicos/edit-codigo-biometrico EDIT CODIGO BIOMETRICO
 * @apiName MODIFICA El CODIGO BIOMETRICO
 * @apiGroup SERVIDOR PÚBLICO
 * @apiDescription Modifica el codigo biometrico
 * @apiParam  {string} numero_documento numero de carnet de identidad.
 * @apiParam  {string} codigo_biometrico codigo biometrico.
 *
 */

router.post('/servidores_publicos/edit-codigo-biometrico', middleware.ensureAuthenticated, (req, res, next) => {


  let json = JSON.parse(req.body.json);

  let _numero_documento = json.numero_documento;
  let _codigo_biometrico = json.codigo_biometrico;

  mysqldb.query(`update servidores_publicos set codigo_biometrico=?
	where numero_documento = ?`, [_codigo_biometrico, _numero_documento], function (error, results) {

      if (error) throw error;

      res.status(200).send({ success: results.affectedRows ? true : false });
    });

});


module.exports = router;
