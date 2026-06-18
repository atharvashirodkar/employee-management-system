import dotenv from 'dotenv';
import mySqlPool from './config/db.js';

//configure dotenv
dotenv.config();

const PORT = process.env.PORT || 8030;

//conditionally listen
mySqlPool
    .query('SELECT 1')
    .then(() => {
        //MySQL
        console.log("MySQL DB connected");
        //server
        app.listen(PORT, '0.0.0.0',() => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }).catch((error) => {
        console.log(error);
    })