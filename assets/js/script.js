// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    var passLength = parseInt(prompt("Enter password length from 8 to 128 characters"));
    
    if (passLength < 8 || passLength > 128) {
        alert("Invalid Length")
        return;
    }

    alert("A successful password includes lowercase letters, uppercase letters, numeric characters, and special characters")

    var lCase = confirm("Would you like to include lowercase characters?")
    var uCase = confirm("Would you like to include uppercase characters?")
    var iNum = confirm("Would you like to include numeric characters?")
    var iSpec = confirm("Would you like to include special characters?")













}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
