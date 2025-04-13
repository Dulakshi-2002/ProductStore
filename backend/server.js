import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoute from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Set the port to 5000 or use the environment variable PORT

app.use(express.json()); // Middleware to parse JSON data

app.use("/api/products", productRoute); // Mount the product routes

app.listen(PORT, () => {
    connectDB();
    console.log('server started at http://localhost:' + PORT); 
});