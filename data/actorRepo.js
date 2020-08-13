let db = require("../data/shared/connection")
let mapping=require("../Mappings/actorMapping")
async function getAll() {
   return await mapping.mapActors(await db.query(`select actor from actors`));
}

module.exports = {
    getAll: getAll
}

