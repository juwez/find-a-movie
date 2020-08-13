async function mapGenres(row) {
    let genres=[]
    let i;
    for (i = 0; i < row.length; i++) {
        genres[i]=row[i].NAME
    }
return {
        genres
    }
}

module.exports = {mapGenres: mapGenres}
