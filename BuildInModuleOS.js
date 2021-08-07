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
const release = OS.release()
const type = OS.type()
const hostname = OS.hostname()
const endianness = OS.endianness()
const platform = OS.platform()


console.log(user);
console.log(uptime);
console.log(version);
console.log(totalmem);
console.log(freemem);
console.log(homedir);
console.log(loadavg);
console.log(networkInterfaces);
console.log(arch);
console.log(cpus);
console.log('Release:', release);
console.log(type);
console.log(hostname); 
console.log(endianness);
console.log(platform);