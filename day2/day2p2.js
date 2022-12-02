const fs = require('fs');

const content = fs.readFileSync('day2input.txt', 'utf-8');

const enemyWin = {
    A: 'Z',
    B: 'X',
    C: 'Y'
}

const drawEnemy = {
    A: 'X',
    B: 'Y',
    C: 'Z'
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
        const enemyInput = line[0];
        const encodedEnding = line[2];

        const howToEnd = getHowToEnd(enemyInput, encodedEnding)
        const endingScore = getChoiceValue(howToEnd);
        const rpsScore = getRPSScore(enemyInput, howToEnd);
        score += rpsScore + endingScore;
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

function getHowToEnd(enemy, own) {
    switch (own) {
        case 'X': // console.log('enemy win');
            return enemyWin[enemy];
        case 'Y': // console.log('draw');
            return drawEnemy[enemy];
        case 'Z': // console.log('self win');
            return getKeyByValue(selfWin, enemy);
    }
}

function getChoiceValue(choice) {
    switch (choice) {
        case 'X': return 1;
        case 'Y': return 2;
        case 'Z': return 3;
    }
}

function getKeyByValue(enumeration, value) {
    const indexOfEnum = Object.values(enumeration).indexOf(value);
    return Object.keys(enumeration)[indexOfEnum];
}
