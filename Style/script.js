// Assignment code here

//Prompts to generate password
function generatePassword() {
// password length
var passwordLength = prompt("Please enter number of characters required for password. Password must be between 8 and 128 characters.");
// numbers in password
var numbers = confirm("Would you like to include numbers in your password?");
// uppercase letters
var upperCaseLetters = confirm("Would you like to include upper case letters?");
// lowercase letters
var lowerCaseLetters = confirm("Would you like to include lower case letters?");
//special characters
var specialCharacters = confirm("Would you like to include special characters?");
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
