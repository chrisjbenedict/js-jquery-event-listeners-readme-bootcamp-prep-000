//define functions here

$(document).ready(function(){

// call functions here
  getIt();


});

function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  });
}

function framIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  });
}
