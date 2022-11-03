// os допомагає отримати різноманітні відомості про операційну систему
const os = require('os');
const { userName: user, sayHi } = require('./test');

const name = 'Tommy';

console.log(os.platform(), os.release());

console.log(sayHi(name));