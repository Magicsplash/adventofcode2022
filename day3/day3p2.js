const fs = require('fs');

const content = fs.readFileSync('day3input.txt', 'utf-8').split(/\r?\n/);

main();

function main() {

    let sum = 0;
    for (let x = 0; x < (content.length / 3); x = x + 1) {

        let occurrences1 = getOccurrences(content[(x * 3)]);
        let occurrences2 = getOccurrences(content[(x * 3 + 1)]);
        let occurrences3 = getOccurrences(content[(x * 3 + 2)]);

        let occurrenceInAll = Object.keys(occurrences1)
            .find(character => {
                return occurrences2[character] !== undefined &&
                    occurrences3[character] !== undefined
            });
        console.log(occurrenceInAll);
        console.log(getCharCodeValue(occurrenceInAll.charCodeAt(0)));
        sum += getCharCodeValue(occurrenceInAll.charCodeAt(0))
    };


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


