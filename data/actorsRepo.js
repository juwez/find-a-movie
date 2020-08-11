let db = require("../data/shared/connection")
async function insertActor(){
    return await db.query(`INSERT INTO actors(NAME) VALUES ("leo")`)
}
module.exports={
    insertActor:insertActor
}
