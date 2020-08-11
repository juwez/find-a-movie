const util= require("util");
const mysql = require("mysql");

let connection = mysql.createPool({
    host:"localhost",
    database:"moviesnode",
    user:"root",
    password:"",
    insecureAuth :true,
})
connection.getConnection((error,config)=>{
    if (error){
       console.log(error);
    }
    if (config) config.release();
    });
connection.query = util.promisify(connection.query);
module.exports=connection;
