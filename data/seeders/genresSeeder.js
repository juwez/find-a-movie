let db = require("../shared/connection");
let updateGenres = "INSERT INTO genres(id,name) VALUES ?";
let genres = [
    ["1","Thriller"],
    ["2","Drama"],
    ["3","Sci-Fi"],
    ["4","Crime"],
    ["5","Adventure"],
    ["6","Comedy"],
    ["7","war"],
    ["8","Mystery"],
    ["9","Horror"],
    ["10","Action"],
    ]

async function seedGenreTable(updateGenres, genres) {
    await db.query(updateGenres, [genres])
}
async function truncateGenreTable() {
    await db.query("TRUNCATE TABLE genres")
}

module.exports = {
    seedGenreTable: seedGenreTable,
    truncateGenreTable:truncateGenreTable,
    updateGenres,
    genres
}
