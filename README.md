# Power BI API - Embedded Token.

Projeto em Node feito para consultas de Embedded Token e AccessToken da microsoft para uso no Power BI embedded.

### 1. Instalar o NodeJS versão => 10.11 Link para download: https://nodejs.org/en/download/.
### 2. Instalar as Dependencias caso seja preciso
##### UTILIZEI O YARN POREM VOCÊ PODE USAR O NPM CASO QUEIRA.
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
### 5. Chamadas para teste no Insomnia ou Postman
* POST - localhost:3000/tokens/config
* POST - localhost:3000/tokens/AccessToken
* POST - localhost:3000/tokens/EmbeddedToken
```
**BODY-JSON:**
{
     "client_id":"ID_DOREPORT_OU_RELATORIO_POWERBI"
     ,"group_id":"ID_DO_GRUPO_DO_REPORT_OU_RELATORIO_POWERBI"
}
```
##### Criado por Vitor Willian - Qualquer duvida redes sociais a baixo:
##### Facebook: vitor.willian.564
##### LinkedIn: vitorwillian
 
     
