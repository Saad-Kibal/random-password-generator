const lengthInput = document.getElementById('length');
const upperInput = document.getElementById('upper');
const lowerInput = document.getElementById('lower');
const numberInput = document.getElementById('numbers');
const symbolInput = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const passwordDisplay = document.getElementById('password');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

function generatePassword() {
    let characterList = '';
    if (upperInput.checked) {
        characterList += upperLetters;
    }
    if (lowerInput.checked) {
        characterList += lowerLetters;
    }
    if (numberInput.checked) {
        characterList += numbers;
    }
    if (symbolInput.checked) {
        characterList += symbols;
    }
    let password = '';
    for (let i = 0; i < lengthInput.value; i++) {
        password += characterList.charAt(Math.floor(Math.random() * characterList.length));
    }
    passwordDisplay.textContent = password;
}