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

//Declare Password variables

    // Lowercase characters
    var lowercase = "abcdefghijklmnopqrstuvwxyz";

    // Possible uppercase characters
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Possible numeric characters
    var numeric = "0123456789";

    // Possible special characters
    var special = "!#$%&\'()*+,-./:;<=>?[\\]^_`{|}~";


//Function to generate password
function generatePassword(){

   // Intial an empty string for the possible characters contained in their password
   var characters = "";

  //ask user for pass length and store in a variable
  var passLength = prompt("How long do you want the pass to be?");

  //make sure the pass length is between 8-128 characters
  while (passLength !== null && (isNaN(passLength)) || passLength < 8 || passLength > 128){
    alert("You must put a number length between 8 and 128 characters")
    passLength = prompt("How long do you want the pass to be?");
  }

  // warning that user must choose one option 
    alert("You will be asked if you want the password to have lowercase, uppercase, numeric ands/or special characters in your password. You must choose atleast one option.")


  //  Ask the user if pass should contain lowercase characters
  var containsLowercase = confirm("Would you like lowercase characters in your password?")
  if (containsLowercase) {
      characters += lowercase;
  }
  
  // Ask the user if pass should contain uppercase characters
  var containsUppercase = confirm("Would you like uppercase characters in your password?")
  if (containsUppercase) {
      characters += uppercase;
  }

  // Ask the user if pass should contain numeric values
  var containsNumeric = confirm("Would you like numeric characters in your password?")
  if (containsNumeric) {
      characters += numeric;
  }

  // Ask the user if pass should contain special characters
  var containsSpecial = confirm("Would you like special characters in your password?")
  if (containsSpecial) {
      characters += special;
  }

  // Tell the user they must contain atleast one type of character in pass
  if (characters === "") {
    alert("Your pass must contain atleast one type of character!")
    }

    
 // Declares a variable as an empty string to be added to
 let password = "";
// A for loop continues until for the duration of the length of the password
for (var i = 0; i < passLength; i++) {
// A random index is chosen from the string of characters and added to the empty password string
// This continues until the entire password is created
password = password+ characters[Math.floor(Math.random() * characters.length)]
}
return password
    
}



 