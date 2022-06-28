let playerX = true;
let gameOver = false;

const field = document.querySelector('.field');
const textPlayer = document.querySelector('.textPlayer');
const player = document.querySelector('span');
const textResult = document.querySelector('.textResult');
const btnReset = document.querySelector('.btnReset');

for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    field.appendChild(square);
}

const squares = Array.from(field.querySelectorAll('.square'));

btnReset.addEventListener('click', function () {
    squares.forEach((elem) => {
        elem.innerText = '';
    });
    textResult.innerHTML = '';
    gameOver = false;
});

field.addEventListener('click', function listener(e) {
    if (e.target.innerText === '' && !gameOver) {
        if (playerX) {
            e.target.innerText = 'x';
            e.target.classList.remove('blue');
            e.target.classList.add('green');
            player.innerText = 'o';
            player.classList.remove('green');
            player.classList.add('blue');
            playerX = !playerX;
        } else {
            e.target.innerText = 'o';
            e.target.classList.remove('green');
            e.target.classList.add('blue');
            player.innerText = 'x';
            player.classList.remove('blue');
            player.classList.add('green');
            playerX = !playerX;
        };
    }

    if (checkWin(squares) && !gameOver) {
        textResult.innerHTML = `Player ${e.target.innerText} won!`;
        gameOver = true;
    } else if (checkWin(squares) !== squares.every(elem => elem.innerText !== '') && !gameOver) {
        textResult.innerHTML = `Tie`;
        gameOver = true;
    }
});

function checkWin(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[0].innerText === arr[1].innerText && arr[1].innerText === arr[2].innerText && arr[0].innerText !== '') ||
            (arr[3].innerText === arr[4].innerText && arr[4].innerText === arr[5].innerText && arr[3].innerText !== '') ||
            (arr[6].innerText === arr[7].innerText && arr[7].innerText === arr[8].innerText && arr[6].innerText !== '') ||
            (arr[0].innerText === arr[3].innerText && arr[3].innerText === arr[6].innerText && arr[0].innerText !== '') ||
            (arr[1].innerText === arr[4].innerText && arr[4].innerText === arr[7].innerText && arr[1].innerText !== '') ||
            (arr[2].innerText === arr[5].innerText && arr[5].innerText === arr[8].innerText && arr[2].innerText !== '') ||
            (arr[0].innerText === arr[4].innerText && arr[4].innerText === arr[8].innerText && arr[0].innerText !== '') ||
            (arr[2].innerText === arr[4].innerText && arr[4].innerText === arr[6].innerText && arr[2].innerText !== '')) {
            return true;
        } else {
            return false;
        }
    }
}


