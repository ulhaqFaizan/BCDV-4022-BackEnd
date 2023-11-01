const fsModule = require('./modules/fileSystem');
const EventEmitterModule = require('./modules/eventEmitter');
const cryptoModule = require('./modules/crypto');

fsModule.writeToFile('example.txt', 'Hello, files');
const content = fsModule.readFromFile('example.txt');
console.log(`File  content: ${content}`);


EventEmitterModule.listenForCustomEvent((message) => {
    console.log(`Received custom event: ${message}`);
});
EventEmitterModule.emitCustomEvent('Hello, Node.js');

const hashedPassword = cryptoModule.hashPassword('MySecurePassword');
console.log(`Hashed password: ${hashedPassword}`);
