async function mapFilters(row) {
    let filters = []
    for (let i = 0; i < row.length; i++) {
        filters[i] = row[i]["column_name"]
    }
    return filters

}

module.exports = {mapFilters: mapFilters}
