import mysql2 from 'mysql2/promise';

//create connection
const mySqlPool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ems',
}); 

export default mySqlPool;