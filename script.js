/*
1. Get character types from checkboxes.
2. Loop length times:
   1. Pick random character from chosen types.
   2. Add to password.
3. Display password. */

const lengthInput = document.getElementById('length');
const upperInput = document.getElementById('upper');
const lowerInput = document.getElementById('lower');
const numberInput = document.getElementById('numbers');
const symbolInput = document.getElementById('symbols');
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
        if (lengthInput.value < 4 || lengthInput.value > 30) {
            passwordDisplay.textContent = 'Length must be between 4 and 20!';
            return;
        }
        password += characterList.charAt(Math.floor(Math.random() * characterList.length));
    }
    passwordDisplay.textContent = password;
}