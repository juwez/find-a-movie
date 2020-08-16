let db = require("../shared/connection");
let updateMovieGenres = "INSERT INTO movies_genres(movie_id,genre_id) VALUES ?";
let moviesGenres = [
    ["1","2"],
    ["2","1"],
    ["2","2"],
    ["2","3"],
    ["3","1"],
    ["3","2"],
    ["3","4"],
    ["4","4"],
    ["4","5"],
    ["4","6"],
    ["5","2"],
    ["5","7"],
    ["6","2"],
    ["6","4"],
    ["6","8"],
    ["7","1"],
    ["7","9"],
    ["8","2"],
    ["8","8"],
    ["8","10"],
    ["9","2"],
    ["9","3"],
    ["9","8"],
    ["10","2"],
    ["10","8"],
    ["10","10"],
]

async function seedMovieGenreTable() {
    await db.query(updateMoviesGenres, [moviesGenres])
}
async function truncateMovieGenreTable() {
    await db.query("TRUNCATE TABLE movies_genres")
}

module.exports = {
    seedMovieGenreTable: seedMovieGenreTable,
    truncateMovieGenreTable:truncateMovieGenreTable,
    updateMovieGenres,
    moviesGenres
}
