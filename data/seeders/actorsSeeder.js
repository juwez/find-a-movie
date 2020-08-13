let db = require("../shared/connection");
let updateActor = "INSERT INTO actors(id,actor) VALUES ?";
let actors = [
    ["1","Brad Pitt"],
    ["2","Edward Norton"],
    ["3", "James McAvoy"],
    ["4","Bruce Willis"],
    ["5","Samuel L. Jackson"],
    ["6","Joaquin Phoenix"],
    ["7","George Clooney"],
    ["8","Tom Hanks"],
    ["9","Morgan Freeman"],
    ["10","Jackie Earle Haley"],
    ["11","Jake Gyllenhaal"],
    ]

async function seedActorsTable(updateActors, actors) {
    await db.query(updateActors, [actors])
}
async function truncateActorsTable(){
  await  db.query("TRUNCATE TABLE actors")
}
module.exports = {
    truncateActorsTable:truncateActorsTable,
    seedActorsTable: seedActorsTable,
    updateActor,
    actors

}
