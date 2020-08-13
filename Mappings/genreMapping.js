async function mapGenres(row) {
    let genres = []
    for (let i = 0; i < row.length; i++) {

        genres[i] = row[i].genre
    }
    return await genres
}

module.exports = {mapGenres: mapGenres}
