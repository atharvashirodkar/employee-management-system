import dotenv from 'dotenv';
import app from './app.js';
import mySqlPool from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 8030;

//conditionally listen
mySqlPool
    .query('SELECT 1')
    .then(() => {

        console.log("MySQL DB connected");
        
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    }).catch((error) => {
        console.log(error);
    })