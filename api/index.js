const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user")

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('DB Connection Successfull!'))
    .catch(err => console.log(err))

app.use(express.json());
app.use("/api/user", userRoute);

app.listen(PORT, () => console.log('Backend server is running on port', PORT));