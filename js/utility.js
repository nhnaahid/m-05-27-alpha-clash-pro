function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const index = Math.round(Math.random() * 25);
    return alphabets[index];
}
function getElementValueIntById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueInt = parseInt(element.innerText);
    return elementValueInt;
}
function getElementValueTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueInt = element.innerText;
    return elementValueInt;
}
function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
