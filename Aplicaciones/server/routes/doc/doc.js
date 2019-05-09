const express = require('express');
const router = express.Router();


/**
 *
 * @api {get} /doc DOC
 * @apiName VISUALIZA LA DOCUMENTACION
 * @apiGroup DOC
 * @apiDescription Muestra la documentacion de la API.
 *
 */

router.get('/doc', (req, res, next) => {

  res.status(200).sendFile(require('path').join(__dirname, './../../doc/index.html'));

});

module.exports = router;
