// Assignment Code
var generateBtn = document.querySelector("#generate");
var abcCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var lengths;

function getMyPasswordOptions() {
  var picks = [];
  // get user input of length of password
  // make sure length is a number; not a string
  var lengths = parseInt(prompt("Length of password?"));
  console.log(lengths);

  // make sure password length is not a letter
  if (isNaN(lengths) === true) {
    alert("Password length must be a number.");
  }


  // make sure password length is at least 8 characters long; no more than 128 characters
  if (lengths < 8 === true) {
    alert("Yo! That's too short! Password length must be at least 8 characters.");
    //console.log (length)
  }

  if (lengths > 128 === true) {
    alert("Yo! That's waaaaay to long for a password. Password length must be no more than 128 characters.")
    //console.log(length)
  }

  if (isNaN(lengths) || lengths < 8 || lengths > 128) {
    return
  }
  // confirm user input on uppercase

  var confirmUpperCase = confirm("Would you like to add uppercase to your password?");
  //console.log(confirmUpperCase)
  if (confirmUpperCase) {
    alert(confirmUpperCase);
    console.log(confirmUpperCase)
  } else {
    alert("That's on you's!");
    console.log(confirmUpperCase)
  }

  var confirmLowerCase = confirm("Would you like to add lowercase to your password?");
  //console.log(confirmLowerCase);
  if (confirmLowerCase) {
    alert(confirmLowerCase);
    console.log(confirmLowerCase)
  } else {
    alert("That's on you's!");
    console.log(confirmLowerCase)
  }

  // confirm numeric
  var confirmNumeric = confirm("Would you like to add numbers to your password?");
  //console.log(confirmNumeric)
  if (confirmNumeric) {
    alert(confirmNumeric);
    console.log(confirmNumeric)
  } else {
    alert("That's on you's!");
    console.log(confirmNumeric)
  }

  // confirm symbols

  var confirmSymbols = confirm("Would you like to add symbols to your password?");
  //console.log(confirmSymbols)
  if (confirmSymbols) {
    alert(confirmSymbols);
    console.log(confirmSymbols)
  } else {
    alert("That's on you's!");
    console.log(confirmSymbols)
  }


  // confirm at least one character
  var options = [confirmUpperCase, confirmLowerCase, confirmNumeric, confirmSymbols]

  if (options[0] || options[1] || options[2] || options[3]) {
    alert("Yeah buddy! You picked at least one option");
    console.log(options)
  } else {
    alert("You need to pick at least one of the 4 options for your password.");
    return;
  }

   
  // if user picks all 4 options
  if (options[0] && options[1] && options[2] && options[3]) {
    //console.log(abcCaps, abc, numbers, symbols)
    picks.push(abcCaps, abc, numbers, symbols);
    console.log("This is your picks: " + picks);
  }
  // if user picks 3 options
  else if (options[0] && options[1] && options[2]) {
    //console.log(abcCaps, abc, numbers)
    picks.push(abcCaps, abc, numbers);
    console.log("This is your picks: " + picks);

  }
  else if (options[0] && options[1] && options[3]) {
    //console.log(abcCaps, abc, symbols)
    picks.push(abcCaps, abc, symbols);
    console.log("This is your picks: " + picks);

  }
  else if (options[1] && options[2] && options[3]) {
    //console.log(abc, numbers, symbols)
    picks.push(abc, numbers, symbols);
    console.log("This is your picks: " + picks);

  }
  else if (options[2] && options[0] && options[3]) {
    //console.log(numbers, abcCaps, symbols)
    picks.push(numbers, abcCaps, symbols);
    console.log("This is your picks: " + picks);

  }

  // if user pickss 2 options
  else if (options[0] && options[1]) {
    //console.log(abcCaps, abc)
    picks.push(abcCaps, abc);
    console.log("This is your picks: " + picks);

  }
  else if (options[0] && options[2]) {
    //console.log(abcCaps, numbers)
    picks.push(abcCaps, numbers);
    console.log("This is your picks: " + picks);

  }
  else if (options[0] && options[3]) {
    //console.log(abcCaps, symbols)
    picks.push(abcCaps, symbols);
    console.log("This is your picks: " + picks);

  }
  else if (options[1] && options[2]) {
    //console.log(abc, numbers)
    picks.push(abc, numbers);
    console.log("This is your picks: " + picks);

  }
  else if (options[1] && options[3]) {
    //console.log(abc, symbols)
    picks.push(abc, symbols);
    console.log("This is your picks: " + picks);

  }
  else if (options[2] && options[3]) {
    //console.log(numbers, symbols)
    picks.push(numbers, symbols);
    console.log("This is your picks: " + picks);

  }

  // if user picks 1 option
  else if (options[0]) {
    //console.log(abcCaps)
    picks.push(abcCaps);
    console.log("This is your pick: " + picks);

  }
  else if (options[1]) {
    //console.log(abc)
    picks.push(abc);
    console.log("This is your pick: " + picks);

  }
  else if (options[2]) {
    //console.log(numbers)
    picks.push(numbers);
    console.log("This is your pick: " + picks);

  }
  else if (options[3]) {
    //console.log(symbols)
    picks.push(symbols);
    console.log("This is your pick: " + picks);

  }
  return picks

}



function generatePassword() {
  var userpicks =getMyPasswordOptions() 
  console.log("This is your USERPICKS: " + userpicks);  
  for (var i = 0; i < lengths; i++) {
    var userpicked = userpicks[Math.floor(Math.random() * userpicks.length)];
    console.log("password: " + userpicked);
    }
  } 










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
