$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  onRender (); 
}

function onRender (){ 
  $.ajax({ 
    method: 'GET', 
    url: '/number-game'
  })
}
