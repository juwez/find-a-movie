let db = require("../data/shared/connection")
async function getAll() {
    return await db.query("select * from genres");
}
module.exports={
    getAll:getAll()
}
