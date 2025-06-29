import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/Db.js';  
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json()); // Middleware to parse JSON bodies



app.use('/api', userRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
