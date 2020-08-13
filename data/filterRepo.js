const db = require("../data/shared/connection")
const filterMapper = require("../Mappings/FilterMapping")
//here i get every column name except for id and plots so when in the future other field are added this querry does not affect it
async function getFiltersFromDB() {
  let column=  await db.query("select *\n" +
        "from(\n" +
        "select column_name\n" +
        "FROM information_schema.columns\n" +
        "WHERE table_name = 'movies'\n" +
        "   or table_name = 'genres'\n" +
        "   or TABLE_NAME = 'actors')as filter\n" +
        "where COLUMN_NAME != 'id' and COLUMN_NAME !='plot' and COLUMN_NAME !='title'\n")
    return await filterMapper.mapFilters(column)
}

module.exports = {
    getFiltersFromDB: getFiltersFromDB
}
