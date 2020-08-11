let db = require("../data/shared/connection")

async function getAll() {
     let actors= await db.query(`select * from actors`);
     return actors
}

module.exports = {
    getAll: getAll
}

