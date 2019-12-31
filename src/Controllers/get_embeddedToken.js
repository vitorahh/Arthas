const fetch = require('node-fetch');
const JsonConfig = require('../Models/Config.js');

async function EmbeddedToken(client_id, group_id, access_token)
{
    const username = JsonConfig.username;
    const urlaccesstoken = `https://api.powerbi.com/v1.0/myorg/groups/${group_id}/reports/${client_id}/GenerateToken`;
    const paramsEmbedded = JSON.stringify(`{'accessLevel': 'View','identities': [{'username': '${username}', 'roles': ['sales'],'datasets': [${client_id}]}]}}`); 
    const requestAccess =  
        {
            method: 'POST'
            ,headers: 
            {
                'Authorization': 'Bearer ' + access_token
                ,'Access-Control-Allow-Origin': '*'
                ,'Content-Type': 'application/x-www-form-urlencoded'
            }
            ,body: paramsEmbedded
        }
        var TokenAccess;
        await fetch(urlaccesstoken,requestAccess)
        .then((res)=> res.json())
        .then((json) => 
        {   
            TokenAccess = JSON.stringify(
                {   ReportID:client_id,
                    GroupID:group_id,
                    TokenId:json.tokenId,
                    EmbeddedToken: json.token,
                    Expiration: json.expiration
                });
            return  TokenAccess;
        })
        .catch((e)=>{
                res.send(e)
                TokenAccess = {error: 'Não Foi possivel pegar o Token Embedded'}
            })
        return TokenAccess;
}
module.exports.EmbeddedToken = EmbeddedToken;