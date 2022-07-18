require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

//middleware
app.use(express.json());
app.use(express.static('client/dist'));



app.listen(4000,()=>{
  console.log('listening on port 4000');
})


