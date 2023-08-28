// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let valid = false;
  while (!valid) {
    let passwordLength = prompt("Please enter your desired password length (8-128)");
    var passwordInt = parseInt(passwordLength)
    console.log(passwordInt)

    if (passwordInt >= 8 && passwordInt <= 128) {
      alert("Choose at least one special character to include in your password!")

      document.getElementById("character-prompt").style.display = "flex"; 
      document.getElementById("character-prompt").style.direction = "row";
      valid = true;
    } else {
      alert("Please choose a number between 8 and 128!")
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
