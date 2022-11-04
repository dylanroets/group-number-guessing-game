$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submit-btn').on('click', submitGuesses)
  onRender (); 
  $('#game-results').on('click', '#restart-btn', onRender );
}


function onRender () { 
  $.ajax({ 
    method: 'GET', 
    url: '/render-game'
  })
  .then(function (response) {
    console.log('in the onRender, response: ', response);
    let randomNumberVariable = response;
    $('#details').empty(); 
    $('#game-results').empty(); 
    console.log('changed response to randomNumberV:', randomNumberVariable);
  })
    .catch(function (error) {
      alert('Number Load Failed', error)
    });
}

function submitGuesses() {
  console.log('in submitGuesses');
  $.ajax({
    method: 'POST',
    url: '/number-game',
    data: {
      player1guess: $('#p1-input').val(),
      player2guess: $('#p2-input').val()
    }
  }).then(function(response){
    console.log('Send Status okay,', response);
    $.ajax({ 
      method: "GET", 
      url: '/number-game'
    }).then(function(response){
      console.log('The response is:,', response);
      $('#details').append(`
      <p>Player One's guess of  ${response[response.length-1].player1guess} is ${response[0].p1result}</p>
      <p>Player Two's guess of  ${response[response.length-1].player2guess} is ${response[1].p2result}</p>
      `)
      winnerFunction(response); 
    }).catch(function(error){
      alert('Couldn\'t retrieve number')
    }) 
  }).catch(function(error){
    alert('Error number didn\'t submit')
  })

}

function winnerFunction(response){ 
  if(response[0].p1result === 'equal' || response[1].p2result === 'equal')
  $('#game-results').append(`
  <h3>WE HAVE A WINNER!!!</h3>
  <button id="restart-btn">Restart</button>
  `)
}

