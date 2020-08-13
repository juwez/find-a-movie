const actorSeeder = require('../data/seeders/actorsSeeder')
const genreSeeder = require('../data/seeders/genresSeeder')
const movie_genreSeeder = require('../data/seeders/movies_genresSeeder')
const movies_actorsSeeder = require('../data/seeders/movies_actorsSeeder')
const movieSeeder = require('../data/seeders/movieSeeder')

async function seedAllTables(){
   await movieSeeder.seedMovieTable(movieSeeder.updateMovies,movieSeeder.movies)
   await actorSeeder.seedActorsTable(actorSeeder.updateActor,actorSeeder.actors)
   await genreSeeder.seedGenreTable(genreSeeder.updateGenres,genreSeeder.genres)
   await movie_genreSeeder.seedMovieGenreTable(movie_genreSeeder.updateMovieGenres,movie_genreSeeder.moviesGenres)
   await movies_actorsSeeder.seedMoviesActorsTable(movies_actorsSeeder.updateMoviesActors,movies_actorsSeeder.moviesActors)
}
async function truncateAllTables(){
    await movieSeeder.truncateMovieTable()
    await actorSeeder.truncateActorsTable()
    await genreSeeder.truncateGenreTable()
    await movie_genreSeeder.truncateMovieGenreTable()
    await movies_actorsSeeder.truncateMoviesActorsTable()
}
module.exports={
    seedAllTables:seedAllTables,
    truncateAllTables:truncateAllTables
}
