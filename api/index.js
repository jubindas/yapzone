// server.js or index.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/Db.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

// Load environment variables
dotenv.config();

// Initialize express app (⚠️ Must come BEFORE app.use)
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON

// Routes
app.use("/api", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
