
let button = document.getElementById('main-button'); // Main Button


document.getElementById('button-text').addEventListener('input',function(){
    let buttonTextInput = document.getElementById('button-text').value; // Get input value
    button.textContent = buttonTextInput;
})