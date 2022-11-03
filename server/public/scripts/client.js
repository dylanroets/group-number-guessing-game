$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submit-btn').on('click', submitGuesses)
  onRender (); 
}

function onRender (){ 
  $.ajax({ 
    method: 'GET', 
    url: '/number-game'
  })
  .then(function (response) {
    console.log('in the onRender, response: ', response);
    let randomNumberVariable = response;
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
    console.log('Ajax is working!')
  }).catch(function(error){
    alert('Error number didn\'t submit')
  })
}

