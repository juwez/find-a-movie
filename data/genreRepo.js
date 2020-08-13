let db = require("../data/shared/connection")
let mapping = require("../Mappings/genreMapping")
async function getAll() {

   return await mapping.mapGenres(await db.query("SELECT NAME FROM genres"))
}
module.exports={
    getAll:getAll
}
