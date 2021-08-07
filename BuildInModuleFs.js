const {redFileSync, writeFileSync, readFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);
setInterval(() => {
    writeFileSync('./content/iDoNotWrite.txt', `Here is the result: ${first}, ${second}... \n\t`, {flag: 'a'} )
}, 1000)

writeFileSync('./content/iDoNotWrite.js', `//Here is the result: ${first}, ${second}`)
