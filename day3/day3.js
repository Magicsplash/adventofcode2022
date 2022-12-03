const fs = require('fs');

const content = fs.readFileSync('day3input.txt', 'utf-8');

main();

function main() {

    let sum = 0;
    content.split(/\r?\n/).forEach((line) => {

        const compartment1 = getOccurrences(line.substring(0, line.length / 2));
        const compartment2 = getOccurrences(line.substring(line.length / 2));
        const occurrenceInBoth = Object.keys(compartment1)
            .find(character => compartment2[character] !== undefined)

        const charCodeValue = getCharCodeValue(occurrenceInBoth.charCodeAt(0));
        console.log(charCodeValue);
        sum += Number(charCodeValue)
    });
    console.log(sum);
}

function getOccurrences(input) {
    const result = [];

    for (x in input) {
        const character = input[x];
        result[character] = result[character] === undefined ? 1 : result[character] + 1;
    }
    return result;
}

function getCharCodeValue(charCode) {
    return (charCode - (charCode > 97 ? 96 : 38));
}


