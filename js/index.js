function gameLoop() {
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBgColorById(alphabet);
}
function play() {
    hideElementById('home');
    showElementById('play-ground');
    gameLoop();
}