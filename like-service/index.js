import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './utils/database.js';
import router from './route/routes.js';

const app = express();
dotenv.config();

// Connect to the database
connectDb();

// routes
app.use(router);

// port initialization
const PORT = process.env.PORT || 3004;

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
});
