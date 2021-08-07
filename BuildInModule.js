const OS = require('os')
const uptime = OS.uptime()
const user = OS.userInfo()
const version = OS.version()
const totalmem = OS.totalmem()
const freemem = OS.freemem()
const homedir = OS.homedir()
const loadavg = OS.loadavg()
const networkInterfaces = OS.networkInterfaces()
const arch = OS.arch()
const cpus = OS.cpus()

console.log(user);
console.log(uptime);
console.log(version);
console.log(totalmem);
console.log(freemem);
console.log(homedir);
console.log(loadavg);
console.log(networkInterfaces);
// console.log(setPriority);
// const setPriority = OS.setPriority()
console.log(arch);
console.log(cpus);
// console.log();
// console.log();
// console.log();