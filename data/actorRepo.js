let db = require("../data/shared/connection")
async function getAll(){
return await db.query(`select * from actors`);
}
module.exports={
    getAll:getAll()
}
