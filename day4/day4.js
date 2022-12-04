const fs = require('fs');

const content = fs.readFileSync('day4testinput.txt', 'utf-8').split(/\r?\n/);



main();

function main() {

    let counter = 0;
    for (x in content) {
        const splitContent = content[x].split(',');
        const values1 = splitContent[0].split('-');
        const values2 = splitContent[1].split('-');
        if (fullyContains(values1, values2)) {
            console.log(splitContent[0] + ' and ' + splitContent[1])
            counter++;
        }
    }
    console.log(counter);
}

function fullyContains(c1, c2) {
    return containedIn(c1, c2) || containedIn(c2, c1);
}

function containedIn(v1, v2) {
    return (Number(v1[0]) <= Number(v2[0])) && (Number(v1[1]) >= Number(v2[1]));
}