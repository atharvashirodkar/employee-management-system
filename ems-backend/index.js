import express from 'express';

//rest object
const app = express();

//middleware

//root
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//port
const PORT = 8080;

//server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});