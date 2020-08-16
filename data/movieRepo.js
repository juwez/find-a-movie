const db = require("../data/shared/connection")
const mapping = require("../Mappings/movieMapping")

async function getYear() {
    return mapping.mapYears(await db.query("SELECT year FROM movies order by year"));

}

async function getAll(actor, genre, year, metascore) {
    let isFirst =true
    let whereString=""
    if (actor!=='empty'){
            whereString+=" where"
            isFirst=false;
        whereString+=` actor="${actor}" `
    }
    if (genre!=='empty'){
        if (isFirst){
            whereString+="where"
            isFirst=false;
        }else {
            whereString+="and"
        }
        whereString+=` genre="${genre}" `
    }
    if (year!=='empty'){
        if (isFirst){
            whereString+="where"
            isFirst=false;
        }else {
            whereString+="and"
        }
        whereString+=` year="${year}" `
    }
    if (metascore!=='empty'){
        if (isFirst){
            whereString+="where"

        }else {
            whereString+="and"
        }
        whereString +=` metascore="${metascore}" `
    }
    return mapping.mapAllMovies(await db.query("select title,year,metascore,plot,actor,genre\n" +
        "from movies\n" +
        "left join movies_actors ma on movies.id = ma.movie_id\n" +
        "left join actors a on ma.actor_id = a.id\n" +
        "left join movies_genres mg on movies.id = mg.movie_id\n" +
        "left join genres g on mg.genre_id = g.id"+whereString))
}

async function getMetascore() {
    return mapping.mapMetascore(await db.query("SELECT metascore FROM movies order by metascore"));
}

module.exports = {
    getYear: getYear,
    getMetascore: getMetascore,
    getAll: getAll
}
