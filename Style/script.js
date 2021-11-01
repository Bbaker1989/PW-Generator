// UpperCase Letters
var upperCase = ["Q", "W", "E", "R", "T","Y","U","I","O","P","A","S","D","F","G", "H", "J", "K", "L","Z","X","C","V","B","N","M"];
//LowerCase Letters
var lowerCase = ["q", "w", "e", "r", "t","y","u","i","o","p","a","s","d","f","g", "h", "j", "k", "l","z","x","c","v","b","n","m"];
//Numbers
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]
//Special Characters
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//Password Generator

function generatePassword() {

// Length of password

  var pwLength = window.prompt("Please enter the length of your password.  It must be between 8 and 128 characters.");

  if(pwLength <8 || pwLength >128 ) {
    alert ("The password must be between 8 and 128 characters.");

    console.log(pwLength);
  }


}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

