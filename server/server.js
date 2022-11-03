const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

app.get('/number-game', () => { 
  console.log("in server, render function"); 
  randomNumberFunction(1,10); 
  console.log(randomNumberVariable); 
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

let randomNumberVariable = 0; 
function randomNumberFunction(min, max){ 
  randomNumberVariable = Math.floor(Math.random() * (max - min + 1)) + min;
};