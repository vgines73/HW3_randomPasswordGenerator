// Assignment Code
var generateBtn = document.querySelector("#generate");

function getMyPasswordOptions(){

  // get user input of length of password
  // make sure length is number; not string
  var length = parseInt(prompt("Length of password?"));
  console.log(typeof length);



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
