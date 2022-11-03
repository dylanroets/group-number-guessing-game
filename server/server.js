const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

app.get('/render-game', (req, res) => { 
  console.log("in server, render function"); 
  randomNumberFunction(1,10); 
  res.send({randomNumberVariable});
});

app.post('/number-game', (req, res) => { 
  //console.log('in server, post, submitGuesses', req);
  let guessesObject = req.body;
  guessesArray.push(guessesObject); 
  console.log('GuessesArray content:', guessesArray);
  res.sendStatus(200); 
})

app.get('/number-game', (req, res) => { 
  console.log("in submitGuesses GET,");
  conditionalLogic();
})

//Server Data Section 
let randomNumberVariable = 0; 

let guessesArray = []; 

//Functions 
function randomNumberFunction(min, max){ 
  randomNumberVariable = Math.floor(Math.random() * (max - min + 1)) + min;
};
let endingData = []; 
//Conditional Logic 
function conditionalLogic(){ 
  console.log("Random Number:", randomNumberVariable); 
  console.log("guessesArray:", guessesArray); 
  if (guessesArray[guessesArray.length-1].player1guess > 0 ){ 
    endingData.push({p1result: guessesArray[guessesArray.length-1].player1guess})
  }
  console.log('endingData array:', endingData);
}



app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
});