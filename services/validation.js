const movieRepo = require("../data/movieRepo");
const genreRepo = require('../data/genreRepo')
const actorRepo = require('../data/actorRepo')
const HttpError = require("http-errors");

async function validationInput(actorParam, genreParam, yearParam, metaScoreParam) {
    let genre = await genreRepo.getAll()
    let year = await movieRepo.getYear()
    let actor = await actorRepo.getAll()
    let metascore = await movieRepo.getMetascore()
    if (!(genre.includes(genreParam) || genreParam === "empty")||
        !(year.includes(yearParam) || yearParam === "empty")||
        !(actor.includes(actorParam) || actorParam === "empty")||
        !(metascore.includes(metaScoreParam) || metaScoreParam === "empty")) {
           return  HttpError
        }
}
module.exports = {
    validationInput: validationInput
}
