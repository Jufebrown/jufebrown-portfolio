var gameOver = false

function gameOverAlert() {
  alert('GAME OVER')
}

// var gameOverAlert = function() {
//   alert('GAME OVER')
// }
//
// var gameOverAlert = () => {
//   alert('GAME OVER')
// }

var response = prompt("You walk into a room with a chair and a window. Type 'sit' to sit in the chair, type 'gaze' to gaze wistfully out the window and sigh");

if(response === "sit"){
    alert("Your house is obliterated by alien lasers.");
    gameOver = true
} else if (response === "gaze") {
    response = prompt("You gaze wistfully out the window. Suddenly a flying saucer comes into view. It lands and little green men come out. Type 'hi' to wave hello, type 'gun' to run and grab your shotgun.");
} else {
    alert("Please type in a valid input! Refresh the page to try again.");
}

if (!gameOver) {
  if (response === 'hi') {
    response = prompt("You wave hello to the little green men. They start jabbering at each other and take cover behind your bushes. Type 'hi' to open the window and say hello or type 'run' to run out the back door.")
  } else if (response === 'gun') {
    alert('You turn to run to the hallway closet to get your shotgun, but the aliens see your cowardice and start firing their ray guns at you. You are microwaved.')
    gameOver = true
  } else {
    alert("Please type in a valid input! Refresh the page to try again.");
  }
} else {
  gameOverAlert()
}

if (!gameOver) {
  if (response === 'hi') {
    alert("You open the window and shout hello to the little green men. They fire their ray guns at you and cook you from the inside out. How rude.")
    gameOver = true
    // alert('GAME OVER')
    gameOverAlert()
  } else if (response === 'run') {
    alert('You run out the back door. Seconds later your house is reduced to ash. Congratulations! Your quick thinking saved your life!')
    gameOver = true
    gameOverAlert()
  } else {
    alert("Please type in a valid input! Refresh the page to try again.");
  }
} else {
  gameOverAlert()
}
