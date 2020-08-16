let db = require("../shared/connection");
let updateMovies = "INSERT INTO movies(id, title, year, metascore, plot) VALUES ?";
let movies = [
    ["1", "Fight Club", "1999", "66", "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."],
    ["2", "Glass", "2019", "43", "Security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities."],
    ["3", "Joker", "2019", "59", "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."],
    ["4", "O Brother, Where Art Thou?", "2002", "69", "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them."],
    ["5", "Saving Private Ryan", "1998", "91", "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."],
    ["6", "Se7en", "1995", "65", "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."],
    ["7", "Split", "2016", "62", "Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th."],
    ["8", "Watchmen", "2009", "56", "In 1985 where former superheroes exist, the murder of a colleague sends active vigilante Rorschach into his own sprawling investigation, uncovering something that could completely change the course of history as we know it."],
    ["9", "Unbreakable", "2000", "62", "A man learns something extraordinary about himself after a devastating accident."],
    ["10", "Source Code", "2011", "74", "A soldier wakes up in someone else's body and discovers he's part of an experimental government program to find the bomber of a commuter train within 8 minutes."],
]

async function seedMovieTable() {
    await db.query(updateMovies, [movies])
}
async function truncateMovieTable() {
    await db.query("TRUNCATE TABLE movies")
}
module.exports = {
    seedMovieTable: seedMovieTable,
    truncateMovieTable:truncateMovieTable,
    updateMovies,
    movies
}
