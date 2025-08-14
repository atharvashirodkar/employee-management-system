import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mySqlPool from './config/db.js';

//configure dotenv
dotenv.config();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//root
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//port
const PORT = process.env.PORT || 8030;

//conditionally listen
mySqlPool
    .query('SELECT 1')
    .then(() => {
        //MySQL
        console.log("MySQL DB connected");
        //server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }).catch((error) => {
        console.log(error);
    })