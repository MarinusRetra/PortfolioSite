const sequelize = require('sequelize');
const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const port = 3001


app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Awesome",
  database: "PortfolioDB"
});

app.listen(port, ()=>{
  console.log('Listening on port %s', port);
})

app.get("", (req, res) => {
  res = "swag";
});