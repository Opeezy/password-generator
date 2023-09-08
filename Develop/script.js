// Assignment Code
var generateBtn = document.querySelector("#generate");
var checkedBoxes = [false, false, false, false] //bool array for checkboxes

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const alphaUpper = alphabet.map((letter) => letter.toUpperCase())

const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "-", "=",
                   "+", ",", ".", ";", "'", "/", "[", "]"];

const allCharacters = [alphabet, alphaUpper, nums, specials]

function resetForm() {
  document.getElementById("plength").style.backgroundColor = "white";
}

function checkPassword() {
  let passLength = parseInt(document.getElementById("plength").value); //gets the password length value
  let passInput = document.getElementById("plength") //plength element

  //checks length of password 
  if (passLength < 8 || passLength > 128) {
    return [false, passLength];
  } else {
    return [true, passLength];     
  }
}

function checkCharacter() {
  let chars = document.getElementsByClassName("chars"); //checkbox elements
  let amount = 0;

  //updates checkedBoxes with checked value
  for (let i=0; i < 4; i++) {
    checkedBoxes[i] = chars[i].checked
    if (chars[i].checked) {
      amount++
    } 
  }

  //checks if value is false in checkedBoxes
  function allFalse(check) {
    return check === false;
  }
  
  //checks if no boxes are checked and returns bool
  if (checkedBoxes.every(allFalse)) {
    return [false, amount];
  } else {
    return [true, amount];
  }
}

function createCharString(ratio, arr) {
  let charString = "";
  
  for (let i=0; i < ratio; i++) {
    let ranIndex = Math.floor(Math.random() * arr.length);
    charString = charString + arr[ranIndex];
  }
  return charString;
}

function scramble(pass) {
  let scrambledPass = "";

  for (let i=0; i < pass.length; i++) {
    let ranPassIndex = Math.floor(Math.random() * pass.length);
    scrambledPass = scrambledPass + pass[ranPassIndex]
  }
  return scrambledPass;
}

function generatePassword() {
  let passGenerated = "";
  resetForm(); //resets form style
  let passwordValidation = checkPassword()[0]; //check for valid password
  let checkBoxes = checkCharacter()[0];
  let passLength = checkPassword()[1];
  let checkAmount = checkCharacter()[1];

  if (passwordValidation && checkBoxes) {
    let weight = 100/checkAmount * .01
    let ratio = Math.floor(passLength * weight)

    for (i in checkedBoxes) {
      if (checkedBoxes[i]) {
        passGenerated = passGenerated + createCharString(ratio, allCharacters[i])
      }
    }
    
    while (passGenerated.length < passLength) {
      let ranCheckIndex = Math.floor(Math.random() * checkAmount)
      if (checkedBoxes[ranCheckIndex]) {
        let ranCharArray = allCharacters[ranCheckIndex]
        console.log(ranCharArray)
        let ranCharIndex = Math.floor(Math.random() * ranCharArray.length)
        passGenerated = passGenerated + ranCharArray[ranCharIndex]
      }   
    }
  return scramble(passGenerated)
  } else {
    console.log(checkBoxes)
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
