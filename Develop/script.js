// Assignment code here

// The following code represents all possible characters to use in the password. Special characters provided by https://owasp.org/www-community/password-special-characters
// The answer array is empty in order to store the selected character sets based on the user criteria selection. 
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!'#$%&()*+,-./:;<>=?@[]^`{}~";
var answer = [];

// Get references to the #generate element
// This line of code selects the generate css id selector found in the HTML code. It will assign to the generateBtn variable.
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// This code is a function for when the button is clicked, it will retrieve the generated password because of the generate password function
// The css selector that set for this is the password id and this is set to the generate password function. 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

function generatePassword() {
  var characterLength = prompt('How many characters would you like your password to be? Must contain anywhere between 8-128 characters.')
  if (characterLength < 8 || characterLength > 128 || isNaN(characterLength)) {
    alert('Invalid! Password must contain a length anywhere between 8-128 characters. Please do not include letters when choosing password length.');
    return generatePassword();
  }
  var useUpperCase = confirm('Would you like your password to have uppercase letters?');
  if (useUpperCase === true) {
    answer.push(upperCase);
  }
  var useLowerCase = confirm('Would you like your password to have lower case letters?');
  if (useLowerCase === true) {
    answer.push(lowerCase);
  }
  var useNumber = confirm('Would you like your password to have numbers?'); 
  if (useNumber === true) {
    answer.push(number);
  }
  var useSymbol = confirm('Would you like your password to have symbols?');
  if (useSymbol === true) {
    answer.push(symbol);
  }

  if (useUpperCase == false && useLowerCase == false && useNumber == false && useSymbol == false) {
    alert('Invalid! Please select ATLEAST one character type for password.');
    return generatePassword();
  }

  if (useUpperCase === false) {
    var index = answer.indexOf(upperCase);
    if (index !== -1) {
      answer.splice(index, 1);
    }
  }

  if (useLowerCase === false) {
    var index = answer.indexOf(lowerCase);
    if (index !== -1) {
      answer.splice(index, 1);
    }
  }

  if (useNumber === false) {
    var index = answer.indexOf(number);
    if (index !== -1) {
      answer.splice(index, 1);
    }
  }

  if (useSymbol === false) {
    var index = answer.indexOf(symbol);
    if (index !== -1) {
      answer.splice(index, 1);
    }
  }

  console.log(answer);

  //initializing password 
  var password = "";

  // This code generates random characters for password 
  for (var i = 0; i < characterLength; i++) {
  // Write the logic in here
    var randomAnswer = answer[Math.floor(Math.random() * answer.length)];
    var randomCharacter = randomAnswer[Math.floor(Math.random() * randomAnswer.length)];
    password += randomCharacter;
  }
  // password = password + randomCharacter 
  return password;
  }

 

  
