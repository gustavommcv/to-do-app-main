import app from './app.js';
import dotenv from 'dotenv';

import fs from 'fs';
import https from 'https';

dotenv.config();

const PORT = process.env.PORT;

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

https.createServer(options, app).listen(PORT, () => {
    console.log('Server running on https://localhost:' + PORT);
});
