const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load env variables
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 5000; // fallback if PORT not set
//Hey resolve later
app.use(cors({
    
}

));
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hi Prada");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
