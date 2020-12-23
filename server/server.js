const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();
const mongoose = require("mongoose");


const PORT = process.env.PORT || 5000;

// parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/savedbooks");

app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});
