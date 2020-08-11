async function mapFilter(row1,row2) {

    let filters = []
   async function retrieveMappingData(row)
    {
        let i;
        let j=0;
        for (i = 0; i < row.length; i++) {
            if (row[i] !== "columnname") {
                console.log(row[i]);
                filters[j] = row[i].column_name
                j++
            }
        }
    }
    await retrieveMappingData(row1)
    await retrieveMappingData(row2)
    return {
        filters
    }
}
module.exports = {mapFilter: mapFilter}
