// Assignment Code
var generateBtn = document.querySelector("#generate");
var checkedBoxes = [false, false, false, false] //bool array for checkboxes

function resetForm() {
  document.getElementById("plength").style.backgroundColor = "white";
}

function checkPassword() {
  let passLength = parseInt(document.getElementById("plength").value); //gets the password length value
  let passInput = document.getElementById("plength") //plength element

  //checks length of password 
  if (passLength < 8 || passLength > 128) {
    return false;
  } else {
    return true;     
  }
}

function checkCharacter() {
  let chars = document.getElementsByClassName("chars"); //checkbox elements

  //updates checkedBoxes with checked value
  for (let i=0; i < 4; i++) {
    checkedBoxes[i] = chars[i].checked 
  }

  //checks if value is false in checkedBoxes
  function allFalse(check) {
    return check === false;
  }
  
  //checks if no boxes are checked and returns bool
  if (checkedBoxes.every(allFalse)) {
    return false;
  } else {
    return true;
  }
}

function generatePassword() {
  resetForm() //resets form style
  let passwordValidation = checkPassword() //check for valid password
  let checkBoxes = checkCharacter()

  if (passwordValidation && checkBoxes) {
    console.log(checkedBoxes, true)
  } else {
    console.log(false, checkedBoxes)
  }
}

// Write password to the #password input
function writePassword() {
  document.getElementById("character-prompt").style.display = "none"; 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
