// Import modules
import express from "express";
import dotenv from "dotenv";

// Load the env
dotenv.config();

// Set app
const app = express();

// Define the port
const port = process.env.PORT;

// Define routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Start the server
app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});