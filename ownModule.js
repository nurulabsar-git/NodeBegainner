
const names = require('./ownModule1');
// console.log(names);
const sayHiDear = require('./ownModuleF');
const data = require('./ownAlternative');
console.log(data);
console.log(data.items[0].item1);


sayHiDear(names.johnSmith);
sayHiDear(names.peter);
sayHiDear('killer');