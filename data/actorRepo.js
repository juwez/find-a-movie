let db = require("../data/shared/connection")
let mapping=require("../Mappings/actorMapping")
async function getAll() {
   return mapping.mapActors(await db.query(`select actor from actors order by actor`));
}

module.exports = {
    getAll: getAll
}

