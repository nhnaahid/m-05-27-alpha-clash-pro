function gameLoop() {
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBgColorById(alphabet);
}

function play() {
    hideElementById('home');
    hideElementById('score');
    showElementById('play-ground');

    setElementValueById('current-score', 0);
    setElementValueById('current-life', 3);

    gameLoop();
}

function gameOver(value) {
    hideElementById('play-ground');
    showElementById('score');

    const finalScore = getElementValueIntById('current-score');
    setElementValueById('final-score', finalScore);

    const currentAlphabet = getElementValueTextById('current-alphabet');
    removeBgColorById(currentAlphabet);

}

function handleKeyboardPress(event) {
    const userPressedKey = event.key;
    if (userPressedKey === 'Escape')
        gameOver();
    const currentAlphabet = document.getElementById('current-alphabet');
    const expectedKey = currentAlphabet.innerText.toLowerCase();
    if (userPressedKey === expectedKey) {
        const currentScore = getElementValueIntById('current-score');
        const newScore = currentScore + 1;
        setElementValueById('current-score', newScore);
        removeBgColorById(userPressedKey);
        gameLoop();
    }
    else {
        const currentLife = getElementValueIntById('current-life');
        const newLife = currentLife - 1;
        setElementValueById('current-life', newLife);
        if (newLife === 0) {
            gameOver();
        }
    }

}
document.addEventListener('keyup', handleKeyboardPress);