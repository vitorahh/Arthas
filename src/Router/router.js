const express = require('express');
const router = express.Router();
const accesstoken = require('../Controllers/get_accessToken.js');
const EmbeddedToken = require('../Controllers/get_embeddedToken.js');
const config = require('../Controllers/get_config.js');


router.get('/AccessToken', async (req, res) => 
{
    try
    {   
        const Access =  await accesstoken.AccessToken();
        console.log('Access Token Solicitado.');
        return res.send(Access);
    }
    catch (err)
    {
        return res.status(400).send({ error: 'Erro ao comunicar com Rota da API'});
    }
});

router.get('/EmbeddedToken', async (req, res) => 
{
    try
    {   
        const client_ID = req.body.client_id;
        const group_id = req.body.group_id;
        const Access =  await accesstoken.AccessToken();
        const Embedded = await EmbeddedToken.EmbeddedToken(client_ID,group_id,JSON.parse(Access).Access_token);
        console.log('Embedded Token Solicitado.');
        return res.send(Embedded);
    }
    catch (err)
    {
        return res.status(400).send({ error: 'Erro ao comunicar com Rota da API'});
    }
});

router.get('/config', async (req, res) =>
{
    console.log('Configurações de Acesso Solicitadas.');
    res.send(config.JsonConfig);
});


module.exports = app => app.use('/tokens', router);