const express = require("express");
const app = express();
const routes = require("./routes/ToDoRoute");
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();

const PORT = process.env.PORT || 5000; // Corrected the typo here from 'port' to 'PORT'
app.use(express.json());
app.use(cors());
app.use(routes);
mongoose.connect(process.env.MONGODB_URL).then(() => console.log(`connected`)).catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Corrected the console log to show the port number
