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
}

