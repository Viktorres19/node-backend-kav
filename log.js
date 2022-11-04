// створюємо клас
const EventEmitter = require('events');
// замість класичного наслідування можна скористатися моделем util. Спочатку імпортуємо його в файл
const util = require('util');
// створюємо екземпляр класу - колистворили Logger цей емітер вже не потрібен
//const emitter = new EventEmitter();

// будемо наслідувати від EventEmitter. Це буде клас наслідник, котрий наслідує всі методи батька, та розширяє своїми кастомними методами
// після додавання модулю util можна видалити extends
// class Logger extends EventEmitter {
class Logger {
    log = (msg) => {
        console.log(msg);
        //звертаємось до його унаслідуваного методу emit
        this.emit('some_event', {id: 1, text: 'Event test text!' });
    }
}

// для використовуючи метод inherits ми розширяємо сам EventEmitter
util.inherits(Logger, EventEmitter);

// функція логування

/* const log = (msg) => {
    console.log(msg);
    //найчастіше другим аргументом передають об'єкт
    emitter.emit('some_event', {id: 1, text: 'Event test text!' });
} */

// після цього використовуються саме екземпляри цього класу потомку
module.exports = Logger;