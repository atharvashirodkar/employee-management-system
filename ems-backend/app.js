import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import empRoutes from './routes/empRoutes.js';

const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1/employees', empRoutes);

app.get('/test', (req, res) => {
    res.send('server is running well and fine');
});

export default app