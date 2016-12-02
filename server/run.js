const express = require ("express");
const app = express();
const foods = require ("./data.json");
const bodyParser = require('body-parser');
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, function() {
  console.log("listening on port 3000");
});

app.get('/foods', cors(), function(req, res, next) {
  res.json(foods);
});
