const { group } = require('console');
const fs = require('fs');

const content = fs.readFileSync('day3input.txt', 'utf-8').split(/\r?\n/);

main();

function main() {

    let groupId = 0;
    const groups = [content.length]

    groups[groupId] = [];
    for (x in content) {

        groups[groupId].push(content[x]);
        if ((x + 1) % 3 === 0) {
            // console.log('every third')
            groupId++;
            groups[groupId] = [];
        }
    }

    groups.pop();

    console.log(groups);

    let sum = 0;
    groups.forEach(group => {
        const occurrences1 = getOccurrences(group[0]);
        const occurrences2 = getOccurrences(group[1]);
        const occurrences3 = getOccurrences(group[2]);

        const occurrenceInAll = Object.keys(occurrences1)
            .find(character => occurrences2[character] !== undefined &&
                occurrences3[character] !== undefined);
        console.log(occurrenceInAll);
        console.log(getCharCodeValue(occurrenceInAll.charCodeAt(0)));
        sum += getCharCodeValue(occurrenceInAll.charCodeAt(0))
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


