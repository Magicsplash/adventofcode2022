const fs = require('fs');

const content = fs.readFileSync('day2input.txt', 'utf-8');


const enemyWin = {
    A: 'Z',
    B: 'X',
    C: 'Y'
}

const selfWin = {
    X: 'C',
    Y: 'A',
    Z: 'B'
}

let score = 0;

main();

function main() {
    content.split(/\r?\n/).forEach((line) => {
        const currentResult = getRPSScore(line[0], line[2]) + getChoiceValue(line[2]);
        // console.log(currentResult);
        score += currentResult;
    });
    console.log(score);
}

function getRPSScore(enemy, own) {
    if (enemyWin[enemy] === own)
        return 0;
    else if (selfWin[own] === enemy)
        return 6;
    else return 3;
}

function getChoiceValue(choice) {
    switch (choice) {
        case 'X':
            return 1;
        case 'Y':
            return 2;
        case 'Z':
            return 3;
    }
}
