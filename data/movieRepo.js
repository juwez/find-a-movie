let db = require("../data/shared/connection")

async function getFiltersFromMovie() {
    let query = await db.query("select column_name FROM information_schema.columns WHERE table_name='movies' limit 3,5");
    return query
}

module.exports = {}
