//Get Express
const express = require("express");

//Config
const app = express();

// New Project Name Generator
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(
      `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
    );
  });
  


