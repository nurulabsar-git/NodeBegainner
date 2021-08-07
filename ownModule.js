
const names = require('./ownModule1');
// const {johnSmith, peter} = require('./ownModule1');
// console.log(names);
const sayHiDear = require('./ownModuleF');
const data = require('./ownAlternative');
console.log(data);
require('./ownWithRequire')

console.log(data.multiplePerson);
// console.log(data.multiplePerson.img);


sayHiDear(names.johnSmith);
sayHiDear(names.peter);
sayHiDear('killer');