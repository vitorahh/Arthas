# Power BI API - Embedded Token.

Projeto em Node feito para consultas de Embedded Token e AccessToken da microsoft para uso no Power BI embedded.

### 1. Instala o NodeJS versão 10.11 ou maior  Link para download: https://nodejs.org/en/download/.
### 2. Instalar as Dependencias caso seja preciso, eu utilizei pelo yarn porem você pode usar o npm caso queira.
* yarn add **cors**
* yarn add **express**
* yarn add **fs**
* yarn add **node-fetch**
* yarn add **nodemon**
### 3. Modificar o arquivo JSON/config.json 
##### E ESSENCIAL QUE CONFIGURE ESTE ARQUIVO COM OS DADOS CORRETAMENTE
* Modificar Campo **client_id** - ID DE APLICACAO CRIADO NO AZURE PARA APLICACOES POWER BI EMBEDDED
* Modificar Campo **username** - EMAIL UTILIZADO NA CONTA POWER BI WEB ou SERVICE
* Modificar Campo **password** - SENHA DO EMAIL UTILIZADO
### 4. Comando para Iniciar o projeto:
* **nodemon** src/index.js ou **node** src/index.js 
### 5. chamadas para teste no Insomnia ou Postman
* localhost:3000/tokens/config
* localhost:3000/tokens/AccessToken
* localhost:3000/tokens/EmbeddedToken
```
**BODY-JSON:**
{
     "client_id":"67a7b75a-2f22-4b45-96aa-4ac88261a0a2"
     ,"group_id":"e0fc5fd5-eb12-478c-8e75-b52f6463eaf9"
}
```
##### Criado por Vitor Willian - Qualquer duvida redes sociais a baixo:
##### Facebook: vitor.willian.564
##### LinkedIn: vitorwillian

     
