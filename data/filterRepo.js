const db = require("../data/shared/connection")
const filterMapper = require("../Mappings/FilterMapping")

async function getFiltersFromMovie() {
    return await db.query("select column_name FROM information_schema.columns WHERE table_name='movies' limit 1,4");
}
async function getfiltersFromGenre() {
    return await db.query("select column_name FROM information_schema.columns WHERE table_name='actors' limit 1,1");
}
async function getAllFilters() {
    let movieFilters = await getFiltersFromMovie();
    let genreFilters = await getfiltersFromGenre();
    return filterMapper.mapFilter(movieFilters,genreFilters)

}

module.exports = {
    getAllFilters: getAllFilters
}
