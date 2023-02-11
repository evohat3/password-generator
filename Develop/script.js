var pwLength = 8;
var pwChoice = [];
var lowLet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var capLet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var syms = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '/', '|', '{', '}', '`', '~'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var properInfo = getInfo();
  var passwordText = document.querySelector("#password");
  var myPassword = generatePassword()
  if (properInfo) {
    
    passwordText.value = myPassword;

  } else {
    passwordText.value = "";
  }

}

function generatePassword(){
  var password = "";
  
    for (var i = 0; i < pwLength; i++) {
  var randomPw = Math.floor(Math.random() * pwChoice.length); 
    password = password + pwChoice[randomPw];
    }
  
      return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}

function getInfo(){
  pwLength = parseInt(prompt('How many characters would you like in your password? (between 8 - 128 characters'));

    if(isNaN(pwLength) || pwLength < 8 || pwLength > 128){
      alert("Password will not meet minimum requirements, make sure it is between 8 - 128 characters please try again!");
      return false;
    }

    if (confirm('Would you like lower case letters? (a-z)')) {
      pwChoice = pwChoice.concat(lowLet);
    }
    if (confirm('Would you like upper case letters?(A-Z)')) {
      pwChoice = pwChoice.concat(capLet);
    }
    if (confirm('Would you like numbers? (1234567890)')) {
      pwChoice = pwChoice.concat(nums);
    }
    if (confirm('Would you like symbols? (`~!@#$%^&*()_-+=)')) {
      pwChoice = pwChoice.concat(syms);
    }
      return true;
}
