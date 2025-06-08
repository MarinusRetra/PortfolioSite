const {Sequelize, DataTypes, Model} = require('sequelize'); 
const cors = require('cors'); const path = require('path');
const express = require('express'); 
const mysql = require('mysql2'); 
const app = express(); 
const port = 3001;

class Project extends Model {};

//Middleware stuff
app.use(express.static(path.join(__dirname, "public"))); // Als een request een bestand matched in de public folder serve dat bestand.
app.use(cors());
app.use(express.json());

const db = new Sequelize("tutorialdb", "root", "Awesome", {
  host: "localhost",
  dialect: "mysql"
});

async function startServer() {
  try {
    await db.authenticate();
    console.log("Database connected");
    app.listen(port, ()=> { console.log('Listening on port %s', port); });
  } 
  catch (error) { 
    console.error("Database unable to connect", error); 
  }
}

startServer();

Project.init(
  {
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ImageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    // Model options object configuratie hier.
    sequelize: db, // db is de sequelize instance.
    modelName: 'Project'
  }
);

db.sync();


app.get("", (req, res) => {
  res.send("swag");
});
