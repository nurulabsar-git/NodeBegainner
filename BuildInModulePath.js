const path = require('path');
// console.log(path.sep);
// console.log(path.join);
// console.log(path.delimiter);
// console.log(path. win32);


// join() method join file location

const filePath = path.join('/content', 'subContent', 'test.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log("Base:", base);

const absolute = path.resolve(__dirname, 'content', 'SubContent', 'test.txt');
console.log(absolute);