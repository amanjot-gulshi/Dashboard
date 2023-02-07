const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const app = express()

mongoose.connect(process.env.MONGO, {useNewUrlParser: true});


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, function () {
    console.log("Server has been started on port 3000.");
  });