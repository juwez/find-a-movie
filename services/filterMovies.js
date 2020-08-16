const validation = require("./validation")
const movieRepo = require("../data/movieRepo")
const HttpError = require("http-errors");
async function filterMovies(actor, genre, year, metascore) {
    if (await validation.validationInput(actor, genre, year, metascore) ===HttpError){
        return HttpError()}

    let movies= movieRepo.getAll(actor, genre, year, metascore)
    return movies
}
module.exports =
    {
        filterMovies: filterMovies
    }
