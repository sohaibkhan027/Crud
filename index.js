const express = require('express')
const app = express()
const mongoose = require("mongoose")
const port = 3000
const router = require('./router/route')
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path')
const publicImagePath = path.join(__dirname, 'photo');

app.use(express.json())
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",router)
app.use('/images', express.static(publicImagePath));





mongoose.connect(
    "mongodb://127.0.0.1:27017/Login", 
    {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});





app.get("/in",(req,res)=>{
    res.send("hello")
})


app.listen(port,()=>{
    console.log("server is running",port)
})