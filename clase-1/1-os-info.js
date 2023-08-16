const os = require('node:os');

console.log('Info del sistema operativo:')
console.log('-----------------------------');
console.log('Version:', os.version());
console.log('Arquitectura:', os.arch());
console.log('CPU:', os.cpus());
console.log('Memoria libre:', os.freemem() / 1024 / 1024);