const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

const port =  process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_DB_URI;


app.get('/', (req, res) =>{
    res.send("Server is running")
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


// mongoose.connect(URI,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("MongoDB connection established")
// })

mongoose.connect(MONGO_URI).then(() => {
    console.log("MongoDB connection established")
});
