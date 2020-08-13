let db = require("../data/shared/connection")
let mapping = require("../Mappings/genreMapping")
async function getAll() {

   return await mapping.mapGenres(await db.query("SELECT genre FROM genres"))
}
module.exports={
    getAll:getAll
}
