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
// This code adds an event listener to the generate button that will allow it to be clicked and function properly.
// This will initilize the writePassword function found within the paranthesis. 
generateBtn.addEventListener("click", writePassword); 

// This code is the generate password function and initializes the user to enter the desired password character length from 8-128 characters. 
// The value is stored in the character length variable below.
// The prompt function allows for a message to appear for the user to read which gives instruction of how many characters to choose. No more than 128 and no less than 8.
function generatePassword() {
  var characterLength = prompt('How many characters would you like your password to be? Must contain anywhere between 8-128 characters.')
  
  // This code ensures that the entered length will be between 8 - 128 characters. If the number is selected is outside of this range, an alert will show up to include a proper number. 
  if (characterLength < 8 || characterLength > 128 || isNaN(characterLength)) {
    alert('Invalid! Password must contain a length anywhere between 8-128 characters. Please do not include letters when choosing password length.');
    return generatePassword();
  }
  // This code allows users use to have uppercase characters in generated password if selected in the prompt.
  // These are added to the answer array. 
  var useUpperCase = confirm('Would you like your password to have uppercase letters?');
  if (useUpperCase === true) {
    answer.push(upperCase);
  }
  // This code allows users use to have lowercase characters in generated password if selected in the prompt.
  // These are added to the answer array. 
  var useLowerCase = confirm('Would you like your password to have lower case letters?');
  if (useLowerCase === true) {
    answer.push(lowerCase);
  }
  // This code allows users use to have numerical characters in generated password if selected in the prompt.
  // These are added to the answer array. 
  var useNumber = confirm('Would you like your password to have numbers?'); 
  if (useNumber === true) {
    answer.push(number);
  }
  // This code allows users use to have symbol characters in generated password if selected in the prompt.
  // These are added to the answer array. 
  var useSymbol = confirm('Would you like your password to have symbols?');
  if (useSymbol === true) {
    answer.push(symbol);
  }

  // This code alerts users if they do not choose ANY criteria for a new password that atleat one criteria must be chosen in order for a password to be generated. 
  if (useUpperCase == false && useLowerCase == false && useNumber == false && useSymbol == false) {
    alert('Invalid! Please select ATLEAST one character type for password.');
    return generatePassword();
  }

  // This code allows users to not have the upper case letter criteria if chosen and will not display once generated password is revealed. 
  // If user excludes this from their criteria options, it will be removed from the answer array.
  if (useUpperCase === false) {
    var index = answer.indexOf(upperCase);
    if (index !== -1) {
      answer.splice(index, 1);
    }
  }

  // This code allows users to not have the lower case letter criteria if chosen and will not display once generated password is revealed. 
  // If user excludes this from their criteria options, it will be removed from the answer array.
  if (useLowerCase === false) {
    var index = answer.indexOf(lowerCase);
    if (index !== -1) {
      answer.splice(index, 1);
    }
  }

  // This code allows users to not have the numbers criteria if chosen and will not display once generated password is revealed. 
  // If user excludes this from their criteria options, it will be removed from the answer array.
  if (useNumber === false) {
    var index = answer.indexOf(number);
    if (index !== -1) {
      answer.splice(index, 1);
    }
  }

  // This code allows users to not have the symbol characters criteria if chosen and will not display once generated password is revealed. 
  // If user excludes this from their criteria options, it will be removed from the answer array.
  if (useSymbol === false) {
    var index = answer.indexOf(symbol);
    if (index !== -1) {
      answer.splice(index, 1);
    }
  }

  // Thise code logs the answer array or the generated password to the console. 
  console.log(answer);

  //initializing password 
  var password = "";

  // This code generates random characters for password 
  // This for loop code will generate random characters for the password. The for loop will generate a password passwed on the amount chosne in the character length variable.
  // A random character sets will be selected from the answer array based off the Math.random method.
  for (var i = 0; i < characterLength; i++) {
  // Write the logic in here
    var randomAnswer = answer[Math.floor(Math.random() * answer.length)];
    var randomCharacter = randomAnswer[Math.floor(Math.random() * randomAnswer.length)];
    password += randomCharacter;
  }

  // This line of code will return the randomly generated password from the generate password function after the button is clicked, characters length chose, and criteria is selected. 
  return password;
  }

 

  
