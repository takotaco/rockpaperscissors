// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function() {
  const input = $("#input");
  const choice = input.val();

  $("#userChoice").append(`<div class="userChoice">${choice}</div>`);

  input.val("");
});
