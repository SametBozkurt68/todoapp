import mysql from "mysql";

function dbBaglan(){
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'todo'
    });

     connection.connect();
     return connection;
}
export default dbBaglan;
