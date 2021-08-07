
const names = require('./ownModule1');
// console.log(names);
const sayHiDear = require('./ownModuleF');

sayHiDear(names.johnSmith);
sayHiDear(names.peter);
sayHiDear('killer');