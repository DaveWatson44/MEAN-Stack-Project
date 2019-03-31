const express = require('express');

const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts")


mongoose.connect("mongodb+srv://dave:4JHsFUCL2UCZiaAm@cluster0-d4cp5.mongodb.net/node-angular?retryWrites=true")
.then(() =>{
  console.log('Connected to a database!')
})
.catch(() => {
  console.log('Connection failed!')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-Width, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.use("/api/posts", postsRoutes);


module.exports = app;

// 4JHsFUCL2UCZiaAm
