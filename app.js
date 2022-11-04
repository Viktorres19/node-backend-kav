// створюємо клас
//const EventEmitter = require('events');
// Вся логіка зараз міститься в конструкторі Logger
const Logger = require('./log');
// і тепер від зімпортованого конструктору створюємо екземпляр
const logger = new Logger();
// створюємо екземпляр класу
//const emitter = new EventEmitter();

// і тепер вікористовуємо цей екземпляр
logger.on('some_event', (args) => {
    // зробимо деструктуризацію аргументів
    const { id, text } = args;
    console.log(id, text);
});
// виклик події за допомогою методу emit
// першим аргументом ім'я нашої події, а другим аргументом буде текст
//emitter.emit('some_event', 'Event test text!');

logger.log('User Logged!');
// User Logged!
// 1 Event test text!