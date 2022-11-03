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
  player1Logic();
  player2Logic(); 
  res.send(guessesArray); 
})

//Server Data Section 
let randomNumberVariable = 0; 

let guessesArray = []; 

//Functions 
function randomNumberFunction(min, max){ 
  randomNumberVariable = Math.floor(Math.random() * (max - min + 1)) + min;
};
let endingData = []; 
//player1 Logic 
function player1Logic(){ 
  console.log("Random Number:", randomNumberVariable); 
  console.log("guessesArray:", guessesArray); 
  if (guessesArray[guessesArray.length-1].player1guess > randomNumberVariable ){ 
    endingData.push({p1result: guessesArray[guessesArray.length-1].player1guess})
    console.log(endingData, "greater than", randomNumberVariable);
  } else if (guessesArray[guessesArray.length-1].player1guess < randomNumberVariable ){ 
    endingData.push({p1result: guessesArray[guessesArray.length-1].player1guess}) 
    console.log(endingData, "lesser than", randomNumberVariable);
  } else { endingData.push({p1result: guessesArray[guessesArray.length-1].player1guess})
  console.log(endingData, "equal to ", randomNumberVariable);}
}

function player2Logic(){ 
  console.log("Random Number:", randomNumberVariable); 
  console.log("guessesArray:", guessesArray); 
  if (guessesArray[guessesArray.length-1].player2guess > randomNumberVariable ){ 
    endingData.push({p2result: guessesArray[guessesArray.length-1].player2guess})
    console.log(endingData, "greater than", randomNumberVariable);
  } else if (guessesArray[guessesArray.length-1].player2guess < randomNumberVariable ){ 
    endingData.push({p2result: guessesArray[guessesArray.length-1].player2guess}) 
    console.log(endingData, "lesser than", randomNumberVariable);
  } else { endingData.push({p2result: guessesArray[guessesArray.length-1].player2guess})
  console.log(endingData, "equal to ", randomNumberVariable);}
}

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
});