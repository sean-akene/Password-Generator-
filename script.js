// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", returnPassword);




// Write password to the #password input
function returnPassword() {
  var password = returnPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordText.append(password);

}
//Generate Password Characteristics

function returnPassword() {
  var passLength = getPassLength();
  var passParameter = getPassCharacters();
  var passGet = generatePassword(passParameter, passLength);

  var passDiv = document.querySelector("#password");

  passDiv.value = passGet;
  passDiv.append(passGet);

  return passGet;
}

//Prompt a reminder for valid password length 

function getPassLength() {
  var passLength = parseInt(prompt("Please enter password length 8 and 128 characters long"));
  while (passLength < 8 || passLength > 128 || !Number.isInteger(passLength)) {
    passLength = parseInt(prompt("Please enter a number between 8 and 128"))
  }
  return passLength;
}

//Prompt user to optionally include case-sensitive and special characters 

function getPassCharacters() {
  var passParameter = [];

  passParameter.push(confirm("Would you like to use uppercase chracters?"));
  passParameter.push(confirm("Would you like to use lowercase chracters?"));
  passParameter.push(confirm("Would you like to include numbers?"));
  passParameter.push(confirm("Would you like to use special characters?"));

  //Prompt user to try again if a case sensitive or special character is not selected
  if (!passParameter.includes(true)) {
    alert("Please choose at least one special character or Uppercase character");
    passParameter = getPassCharacters
  }
  return passParameter;
}

//Include a 5 part array containing characters the user can include

function setCharacters(passElements) {
  var passArray = ["AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz", "0123456789",
    "!?$.,#+=&*_-@%?/^"];
  var charactersSelected = "";
  for (var i = 0; i < passElements.length; i++) {
    if (passElements[i]) {
      charactersSelected = charactersSelected + passArray[i];
    }
  }

  return charactersSelected;
}

//Input string and return a random character
function genRandomChar(charactersSelected) {
  var randomIndex = Math.floor(Math.random() * charactersSelected.length);
  return charactersSelected[randomIndex];
}

//Return password using set parameters. 

function generatePassword(passElements, passLength) {
  var charactersSelected = setCharacters(passElements);
  var password = "";

  for (var i = 0; i < passLength; i++) {
    password = password + genRandomChar(charactersSelected);
    console.log(password);
  }
  return password;
}




