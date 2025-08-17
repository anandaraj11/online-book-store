const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const bookRoutes = require("./routes/bookRoutes");

const app = express();
app.use(cors(
    { 
        origin : "http://localhost:5173"
    }
));
app.use(bodyParser.json());
app.use(express.json());

// db connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database connected");
})
.catch((err)=>{
    console.error("Error connecting to the database "+err);
})

app.get('/',(req,res)=>{
    res.send("Express app is running");
});

// use routes
app.use("/api",bookRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server is listening on PORT "+process.env.PORT);
})