import express from 'express';
import router from './routes/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'https://localhost:5173',
    credentials: true
}));

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the To-Do Application!',
        info: 'Navigate to /api for API endpoints.',
    });
});

app.use('/api', router);

export default app;
