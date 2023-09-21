// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    alert("A strong password includes lowercase letters, uppercase letters, numeric characters, and special characters");
    
    var passLength = parseInt(prompt("Enter password length from 8 to 128 characters"));
    
    if (passLength < 8 || passLength > 128) {
        alert("Invalid Length")
        return;
    };

    var lCase = confirm("Would you like to include lowercase characters?");
    var uCase = confirm("Would you like to include uppercase characters?");
    var iNum = confirm("Would you like to include numeric characters?");
    var iSpec = confirm("Would you like to include special characters?");

    if (!lCase || !uCase || !iNum || !iSpec) {
        alert("Please accept all choices to generate a strong password");
        return;
    };

    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var inputNum = "0123456789";
    var inputSpec = "!@#$%^&*()_-+=<>?";

    var allChars = lowerCase + upperCase + inputNum + inputSpec;

    var generatedPassword = '';
    
    for (var i = 0; i < passLength; i++) {
        var rIndex = Math.floor(Math.random() * allChars.length);
        generatedPassword += allChars[rIndex];
    };

    return generatedPassword;

};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
