import express from 'express';
import router from './routes/index.js';
import cors from 'cors';

const app = express();

// Middlewares
app.use(express.json());

app.use(cors({
    origin: '*',  
}));

app.use('/api', router);

export default app;
