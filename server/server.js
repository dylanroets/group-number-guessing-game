const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

app.get('/number-game', (req, res) => { 
  console.log("in server, render function"); 
  randomNumberFunction(1,10); 
  res.send({randomNumberVariable});
});

app.post('/number-game', (req, res) => { 
  //console.log('in server, post, submitGuesses', req);
  let guessesObject = req.body;
  
})

//Server Data Section 
let randomNumberVariable = 0; 

let guessesArray = []; 

//Functions 
function randomNumberFunction(min, max){ 
  randomNumberVariable = Math.floor(Math.random() * (max - min + 1)) + min;
};



app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
});