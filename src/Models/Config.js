const configJson = require("fs");


const Jsondados = configJson.readFileSync("./src/Json/config.json", "utf8");

module.exports.grant_type = JSON.parse(Jsondados).grant_type;;
module.exports.openid = JSON.parse(Jsondados).openid;;
module.exports.resource = JSON.parse(Jsondados).resource;;
module.exports.client_id = JSON.parse(Jsondados).client_id;;
module.exports.username = JSON.parse(Jsondados).username;;
module.exports.password = JSON.parse(Jsondados).password;;
module.exports.urlaccesstoken = JSON.parse(Jsondados).urlaccesstoken;;