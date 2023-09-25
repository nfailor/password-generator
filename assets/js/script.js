// this variable is used to create the "generate password" button on the webpage
var generateBtn = document.querySelector("#generate");

// this function is what is used in order to prompt the user on their desired password specifications
function generatePassword() {
    // this alert is used to send a message to the user during the prompt
    alert("A strong password includes lowercase letters, uppercase letters, numeric characters, and special characters");
    // the passLength variable is used to properly use the below 'if' statement
    var passLength = parseInt(prompt("Enter password length from 8 to 128 characters"));
    // this 'if' statement is used so that if the user provides an input that is not a number between 8 and 128, it will return as invalid
    if (passLength < 8 || passLength > 128) {
        alert("Invalid Length")
        return;
    };
    // these below variables and confirmation forms are used to prompt the user on the specific requirements of their password
    var lCase = confirm("Would you like to include lowercase characters?");
    var uCase = confirm("Would you like to include uppercase characters?");
    var iNum = confirm("Would you like to include numeric characters?");
    var iSpec = confirm("Would you like to include special characters?");
    // in order to promote strong password usage, if all are not selected, the user will be shown the following alert message
    if (!lCase || !uCase || !iNum || !iSpec) {
        alert("Please accept all choices to generate a strong password");
        return;
    };
    // these variables are used to give the below 'for' loop the proper elements to work, specifically to provide a randomized password with the following character possibilities
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
// the below function is used in order to run the password generation prompt and then properly display the freshly generated randomized password on the webpage
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// the below event listener is used to make the "Generate Password" button on the webpage clickable, and upon clicking it, will activate the 'writePassword' function in line 44
generateBtn.addEventListener("click", writePassword);
