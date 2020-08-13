let db = require("../shared/connection");
let updateMoviesActors = "INSERT INTO movies_actors(movie_id,actor_id) VALUES ?";
let moviesActors = [
    ["1","1"],
    ["1","2"],
    ["2","3"],
    ["2","4"],
    ["2","5"],
    ["3","6"],
    ["4","7"],
    ["5","8"],
    ["6","1"],
    ["6","9"],
    ["7","3"],
    ["8","10"],
    ["9","4"],
    ["9","5"],
    ["10","11"],
]
async function seedMoviesActorsTable(updateMoviesActors, moviesActors) {
    await db.query(updateMoviesActors, [moviesActors])
}
async function truncateMoviesActorsTable() {
    await db.query("TRUNCATE TABLE movies_actors")
}
module.exports = {
    seedMoviesActorsTable: seedMoviesActorsTable,
    truncateMoviesActorsTable:truncateMoviesActorsTable,
    updateMoviesActors,
    moviesActors
}
