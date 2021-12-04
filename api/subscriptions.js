const express = require('express');
const axios = require('axios').default;
const router  = express.Router();


router.post('/nueva', async (request, response) => {
    const nombre = request.body.nombre;
    const correo = request.body.correo;
    const key = request.body.key;
    const url = request.body.url;

    let respuesta = null;

    let headersList = {
        "Reveniu-Secret-Key": key,
        "Content-Type": "application/json"
    }

    let reqOptions = {
        url: url,
        method: "POST",
        headers: headersList,
        data: '{\n    "plan_id":"580",\n    "field_values":{\n        "email": "' + correo + '",\n        "name": "' + nombre + '"\n    }\n}',
    }

    await axios.request(reqOptions).then(function (response) {
        respuesta = response.data;
    })  

    if (respuesta) {
        response.status(200).send(respuesta);
    } else {
        response.status(418).send({
            mensaje: "Error inesperado"
        });
    }

});

router.post('/respuesta', (request, response) =>{
    const data = request.body;

    response.status(200).send(data);
});

module.exports = router;