// Assignment Code
var generateBtn = document.querySelector("#generate");
var abcCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var lengths;

// created function to gather all info needed for user to create password 
function getMyPasswordOptions() {
  var picks = [];
  // get user input of length of password
  // make sure length is a number; not a string
  lengths = parseInt(prompt("Length of password?"));

  // make sure password length is not a letter
  if (isNaN(lengths) === true) {
    alert("Password length must be a number. Start over.");
  }

  // make sure password length is at least 8 characters long; no more than 128 characters
  if (lengths < 8 === true) {
    alert("Yo! That's too short! Password length must be at least 8 characters. Start over.");
  }

  if (lengths > 128 === true) {
    alert("Yo! That's waaaaay to long for a password. Password length must be no more than 128 characters. Start over.")
  }

  //if user does one of these, user will start over and must click the button to enter the correct information needed
  if (isNaN(lengths) || lengths < 8 || lengths > 128) {
    return
  }

  // confirm user input on uppercase
  var confirmUpperCase = confirm("Would you like to add uppercase to your password?");
  if (confirmUpperCase) {
    alert(confirmUpperCase);
  } else {
    alert("That's on you's!");
  }

  // confirm user input on lowercase
  var confirmLowerCase = confirm("Would you like to add lowercase to your password?");
  if (confirmLowerCase) {
    alert(confirmLowerCase);
  } else {
    alert("That's on you's!");
  }

  // confirm user input on numeric
  var confirmNumeric = confirm("Would you like to add numbers to your password?");
  if (confirmNumeric) {
    alert(confirmNumeric);
  } else {
    alert("That's on you's!");
  }

  // confirm symbols
  var confirmSymbols = confirm("Would you like to add symbols to your password?");
  if (confirmSymbols) {
    alert(confirmSymbols);
  } else {
    alert("That's on you's!");
  }


  // pushes options confirmed 
  var options = [confirmUpperCase, confirmLowerCase, confirmNumeric, confirmSymbols]

  if (options[0]) {
    picks.push.apply(picks, abcCaps)
  }
  if (options[1]) {
    picks.push.apply(picks, abc)
  }
  if (options[2]) {
    picks.push.apply(picks, numbers)
  }
  if (options[3]) {
    picks.push.apply(picks, symbols)
  }

  // confirms at least one option or user must start over and click the button.
  if (options[0] || options[1] || options[2] || options[3]) {
    alert("Yeah buddy! You picked at least one option");
    console.log(options)
  } else {
    alert("You need to pick at least one of the 4 options for your password. Start over.");
    return;
  }

  return picks;
}

// Password then created here. 
function generatePassword() {
  var result = [];

  var userpicks = getMyPasswordOptions() 
  for (var i = 0; i < lengths; i++) {
    var userpicked = userpicks[Math.floor(Math.random() * userpicks.length)];
    
    result.push(userpicked)
    }
    return result.join("");
    
  } 

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 