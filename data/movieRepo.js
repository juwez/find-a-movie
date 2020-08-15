const db = require("../data/shared/connection")
const mapping=require("../Mappings/movieMapping")
async function getYear() {
    return await mapping.mapYears(await db.query("SELECT year FROM movies order by year"));
}

async function getMetascore() {
    return await mapping.mapMetascore(await db.query("SELECT metascore FROM movies order by metascore"));
}
module.exports = {
    getYear:getYear,
    getMetascore:getMetascore
}
