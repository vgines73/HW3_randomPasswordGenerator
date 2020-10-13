// Assignment Code
var generateBtn = document.querySelector("#generate");

function getMyPasswordOptions(){

  // get user input of length of password
  // make sure length is a number; not a string
  var length = parseInt(prompt("Length of password?"));
  // console.log(typeof length);
  
  // make sure password length is not a letter
  if (isNaN(length) === true) {
    alert("Password length must be a number.");
  } //console.log(length)
  
  // make sure password length is at least 8 characters long; no more than 128 characters
  if (length < 8 === true) {
    alert("Yo! That's too short! Password length must be at least 8 characters.");
    //console.log (length)
  }
  if (length > 128 === true) {
    alert("Yo! That's waaaaay to long for a password. Password length must be no more than 128 characters.")
  } console.log(length)

 // confirm user input on uppercase

 var confirmUpperCase = (confirm("Would you like to add uppercase to your password?"));
 //console.log(confirmUpperCase)
 if (confirmUpperCase) {
   alert(confirmUpperCase);
   console.log(confirmUpperCase)
 } else {
   prompt("That's on you's!");
   console.log(confirmUpperCase)
 }

 var confirmLowerCase = (confirm("Would you like to add lowercase to your password?"))
 //console.log(confirmLowerCase);
 if (confirmLowerCase) {
   alert(confirmLowerCase);
   console.log(confirmLowerCase)
 } else {
   prompt("That's on you's!");
   console.log(confirmLowerCase)
 }

 // confirm numeric
 var confirmNumeric = (confirm("Would you like to add numbers to your password?"))
 console.log(confirmNumeric)
 // confirm symbols

 var confirmSymbols = (confirm("Would you like to add symbols to your password?"));
 //console.log(confirmSymbols)
 if (confirmSymbols) {
   alert(confirmSymbols);
   //k console.log(confirmSymbols)
 } else {
   prompt("That's on you's!");
   //k console.log(confirmSymbols)
 }
}

function generatePassword() {
  getMyPasswordOptions()
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
