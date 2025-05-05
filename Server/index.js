const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes"); // ✅ Correct route

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Use blogRoutes
app.use("/api", blogRoutes);

// ✅ Connect to DB and start server
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
  });
