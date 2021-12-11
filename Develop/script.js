//Ask user what type of pass they want
// a. how long do you want the pass to be? Prompt -> depending on  response -> set password length
// -> if statement
// -> store the requested length into Password Object

// b. Do you want lowercase letters in your pass? -> depending on  response -> set lowercase
// -> if statement
// -> store the requested answer into Password Object

// c. Do you want uppercase letters in your pass? -> depending on  response -> set uppercase 
// -> if statement
// -> store the requested answer into Password Object

// d. Do you want numbers in your pass? -> depending on  response -> set numbers
// -> if statement
// -> store the requested answer into Password Object

// e. Do you want special characters in your pass? -> depending on  response -> set special characters
// -> if statement
// -> store the requested answer into Password Object

// Assignment code here
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





 