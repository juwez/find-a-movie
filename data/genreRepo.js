let db = require("../data/shared/connection")
async function getAll() {

    let query = await db.query("SELECT NAME FROM genres");
    return query;
}



module.exports={
    getAll:getAll
}
