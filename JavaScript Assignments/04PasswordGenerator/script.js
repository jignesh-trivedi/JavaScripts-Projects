const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
   const textarea = document.createElement("textarea");
   const password = resultEl.innerText;

   if(!password){
    return;
   }

   textarea.value = password;
   document.body.appendChild(textarea);
   textarea.select();
   document.execCommand("copy");
   textarea.remove();
   alert("Password copied to clipboard!")
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;  // + is added to make it an integer

    // resultEl.innerText = generatePassword(randomFunc.lower, randomFunc.upper, randomFunc.number, randomFunc.symbol, length);

    resultEl.innerText = generatePassword(length);

    if (resultEl.innerText == "") {
        resultEl.innerText = "Please select a criteria";
      }
})

// function generatePassword(lower, upper, number, symbol, length) 
function generatePassword(length){
  let generatedPassword = "";

  for(let i = 0; i < length; i++){
    if (lowercaseEl.checked) {
        generatedPassword = generatedPassword + getRandomLower();
      }
  
      if (uppercaseEl.checked) {
        generatedPassword = generatedPassword + getRandomUpper();
      }
  
      if (numbersEl.checked) {
        generatedPassword = generatedPassword + getRandomNumber();
      }
  
      if (symbolsEl.checked) {
        generatedPassword = generatedPassword + getRandomSymbol();
      }
  
      if (generatedPassword.length >= length) {
        break;
      }
  }
     return generatedPassword.slice(0, length);
}

function getRandomLower() {
    // There are 26 aplhabeths so we used math.random *26 and add 97 because lowercase alpahbet starts from 97 to 122 in character set
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    // There are 26 aplhabeths so we used math.random *26 and add 65 because lowercase alpahbet starts from 65 to 90 in character set
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    // In character set numbers are from 48 to 57 thats why we added 48
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)]
}