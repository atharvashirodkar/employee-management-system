import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import empRoutes from './routes/employee.routes.js';
import notFound from './middlewares/notFound.middleware.js';

const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1/employees', empRoutes);

app.use(notFound)

app.get('/test', (req, res) => {
    res.send('server is running well and fine');
});

export default app