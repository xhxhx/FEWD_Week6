//store the human player score and the computer (bot)
//score in variables
var humanScore = 0;
var computerScore = 0;

//write a 'play' function that handles the different conditions of gameplay
//depending on being passed an argument string for "rock", "paper",
//or "scissors" - the human user choice
function play(humanPlay) {
  //call the return function to get a random 'bot' choice
  var computerPlay = getComputerPlay();

  //update the #status to display who played what
  //use jQuery .html()

  $("#status").html("You selected "+humanplay+". The bot selected "+computerPlay);

  //write a conditional block for a human "rock" choice
  //this will have a nested conditional for the "computer" choice
  //use jQuery .append() to update the #status at the end
  //or jQuery.prepend to update at the start

  //write a conditional block for a human "paper" choice
  //this will have a nested conditional for the "computer" choice
  //use jQuery .append()

  //write a conditional block for a human "scissors" choice
  //this will have a nested conditional for the "computer" choice
  //use jQuery .append()

  //update the #humanScore and #computerScore elements
  //use jQuery .html()

}


//write a function that randomly picks a 'bot' choice from
//an array of options and returns it
// function getComputerPlay() {
//   var plays = ["rock", "paper", "scissors"];
//   // math.floor rounds down
//   // math.round rounds off to nearest whole number
//   // math.ceil rounds up
//   var i = Math.floor(Math.random()*plays.length);
//
//   var play = plays[i];
//
//
//
//   return play;
// }

function getComputerPlay(){
    var plays = ["rock", "paper", "scissors"];

    var randomNumber = Math.random(); //value between 0-1
    var l = plays.length;

    var randomPlayNumber = Math.floor(randomNumber *l) ;

    // return 3 + randomPlayNumber; -> returns value between 3-5
    return play = plays[randomPlayNumber];

    return play;
}

var play = getComputerPlay();
console.log(play);

//define three click handler functions for the
//#rock, #paper and #scissors buttons. They should all call a
//generic 'play' function, passing in "rock", "paper", or "scissors"
//as a string argument.
function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

//bind the #rock, #paper and #scissors buttons to their
//relevant click handler functions
$('#rock').click(playRock);
$('#paper').click(playPaper);
$('#scissors').click(playScissors);
