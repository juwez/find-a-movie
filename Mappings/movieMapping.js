async function mapAllMovies(row){
    console.log(row)
    let movies = []
    for (let i = 0; i < row.length; i++) {
        movies[i] = row[i]
    }
    return movies;

}
async function mapYears(row) {
    let years = []
    for (let i = 0; i < row.length; i++) {
        years[i] = row[i].year
    }
    return years
}

async function mapMetascore(row) {
    let metascore = []
    for (let i = 0; i < row.length; i++) {
        metascore[i] = row[i].metascore
    }
    return metascore
}

module.exports = {
    mapYears: mapYears,
    mapMetascore: mapMetascore,
    mapAllMovies:mapAllMovies
}
