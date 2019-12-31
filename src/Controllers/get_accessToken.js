const fetch = require('node-fetch');
const JsonConfig = require('../Models/Config.js');


async function AccessToken()
{
    const grant_type = JsonConfig.grant_type;
    const openid = JsonConfig.openid;
    const resource = JsonConfig.resource;
    const client_id = JsonConfig.client_id;
    const username = JsonConfig.username;
    const password = JsonConfig.password;
    const urlaccesstoken = JsonConfig.urlaccesstoken;
    
    const paramsAccess = `grant_type=${grant_type}&scope=${openid}&resource=${resource}&client_id=${client_id}&username=${username}&password=${password}`;
    const requestAccess =  
    {
        method: 'POST'
        ,headers: 
        {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        ,body: paramsAccess
    }
    var TokenAccess;
    await fetch(urlaccesstoken,requestAccess)
        .then((res)=> res.json())
        .then((json) => 
        {   
            TokenAccess = JSON.stringify(
                    {
                        ApplicationID: client_id,
                        Username:username,
                        Token_type: json.token_type,
                        Access_token: json.access_token,
                        Refresh_token: json.refresh_token,
                    });
            return  TokenAccess;
        })
        .catch((e)=>{
                res.send(e)
                TokenAccess = {error: 'Não Foi possivel pegar o Token de Acesso'}
            })
    return TokenAccess;
}
module.exports.AccessToken = AccessToken;