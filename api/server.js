require("dotenv").config();
const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect(process.env.MONGO, {useNewUrlParser: true});


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(5000, function () {
    console.log("Server has been started on port 5000.");
  });