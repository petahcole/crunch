const express = require ("express");
const app = express();
const foods = require ("./data.json");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, function() {
  console.log("listening on port 3000");
})

function speak()  {
  console.log(foods);
}
speak();
