async function mapActors(row) {
    let actors = []
    for (let i = 0; i < row.length; i++) {
        actors[i] = row[i].actor
    }
    return await actors
}

module.exports = {mapActors: mapActors}
