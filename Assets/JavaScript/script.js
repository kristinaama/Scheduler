// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt the user to indicate the password length
  //(Minimum of 8 characters, maximum of 128)
  let passwordLength = parseInt(prompt("How long should the password be? \nNote: Password must be 8-128 characters in length"));
  
  // Validate length of the password meets criteria
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. \nPlease choose a password greater than 8 and less than 128 character.");
    return "";
  }

  // Ask the user for the types of characters to include: uppercase, lowercase, numbers, or special characters
  var includeLowercase = confirm("Include lowercase letters in password?");
  var includeUppercase = confirm("Include uppercase letters in password?");
  var includeNumbers = confirm("Include numbers in password?");
  var includeSpecialCharacters = confirm("Include special characters in password?");

  // Validate types of characters meets criteria
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
  alert("Invalid character types.\nPlease include at least one type of character.")
  return "";
  }

  // Specify the types of characters
  let Lowercase = "abcdefghijklmnopqrstuvwxyz";
  let passwordLowercase = "";

  let Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordUppercase = "";

  let Numbers = "0123456789";
  let passwordNumbers = "";

  let specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let passwordCharacters = "";

  // Handle character types
  if (includeLowercase) {
    passwordLowercase = Lowercase.split("");
  };

  if (includeUppercase) {
    passwordUppercase = Uppercase.split("");
  };

  if (includeNumbers) {
    passwordNumbers = Numbers.split("");
  };

  if (includeSpecialCharacters) {
    passwordCharacters = specialCharacters.split("");
  };

  // Create new arrays for each character type
  let resultsRandomLowercase = [];
  let resultsRandomUppercase = [];
  let resultsRandomNumbers = [];
  let resultsRandomCharacters = [];
   
  // Randomly select elements for each character type
  for (var i = 0; i < passwordLength; i++) {
    let randomIndexLowercase = Math.floor(Math.random() * passwordLowercase.length);
    let randomLowercase = passwordLowercase[randomIndexLowercase];
    resultsRandomLowercase += randomLowercase;
  }

  for (var i = 0; i < passwordLength; i++) {
    let randomIndexUppercase = Math.floor(Math.random() * passwordUppercase.length);
    let randomUppercase = passwordUppercase[randomIndexUppercase];
    resultsRandomUppercase += randomUppercase;
  }

  for (var i = 0; i < passwordLength; i++) {
    let randomIndexNumbers = Math.floor(Math.random() * passwordNumbers.length);  
    let randomNumbers = passwordNumbers[randomIndexNumbers];
    resultsRandomNumbers += randomNumbers;
  }

  for (var i = 0; i < passwordLength; i++) {
    let randomIndexCharacters = Math.floor(Math.random() * passwordCharacters.length);
    let randomCharacter = passwordCharacters[randomIndexCharacters];
    resultsRandomCharacters += randomCharacter;
  }

  // Collect the randomized elements in each character type arrays and condense them into one array
  let randomIndex = [];
  let flatRandomIndex = [];

  if (includeLowercase) {
    randomIndex.push(resultsRandomLowercase.split(""));
  }
  if (includeUppercase) {
    randomIndex.push(resultsRandomUppercase.split(""));
  }
  if (includeNumbers) {
    randomIndex.push(resultsRandomNumbers.split(""));
  }
  if (includeSpecialCharacters) {
    randomIndex.push(resultsRandomCharacters.split(""));
  }

  // Turn the randomized index into a new array with all sub-array elements concatenated into it
  flatRandomIndex = randomIndex.flat();

  // Generate password of uder-defined length by randomly selecting elements from the flat index
  let result = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomized = Math.floor(Math.random() * flatRandomIndex.length);
    let results = flatRandomIndex[randomized];
    result += results;
  }
  return result;
}
      
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
