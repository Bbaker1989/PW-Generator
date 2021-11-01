// UpperCase Letters
var upperCaseLetters = ["Q", "W", "E", "R", "T","Y","U","I","O","P","A","S","D","F","G", "H", "J", "K", "L","Z","X","C","V","B","N","M"];
//LowerCase Letters
var lowerCaseLetters = ["q", "w", "e", "r", "t","y","u","i","o","p","a","s","d","f","g", "h", "j", "k", "l","z","x","c","v","b","n","m"];
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
  window.alert("Your password will be " + pwLength + " characters long.");

  // Include upperCase Letters
  var pwUpperCase = window.confirm("Would you like to include upper case letters?");

  // Include lowerCase Letters
  var pwLowerCase = window.confirm("Would you like to include lower case letters?");

  // Include numbers
  var pwNumbers = window.confirm("Would you like to include numbers?");

  //Include special character
  var pwSpecialChar =window.confirm("Would you like to include special characters?");


// Store Password
 var genPassword = [];

//Generates password with uppercase letters
  if (pwUpperCase) {

    genPassword = genPassword.concat(upperCaseLetters);

    console.log("Upper case letters are included in password.");

    console.log(upperCaseLetters);

// Generates password without upper case letters
  } else {

    console.log("No upper case letters added.");
    }

//Generates password with lowercase letters
if (pwLowerCase) {

  genPassword = genPassword.concat(lowerCaseLetters);

  console.log("Upper case letters are included in password.");

  console.log(lowerCaseLetters);

//Generates password without lower case letters
} else {

  console.log("No lower case letters added.");
  }

//Generates password with numbers

if (pwNumbers) {

  genPassword = genPassword.concat(numbers);

  console.log("Upper case letters are included in password.");

  console.log(numbers);

  //Generates password without numbers

} else {

  console.log("No numbers added.");
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

