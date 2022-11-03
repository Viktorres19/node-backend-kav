/* setTimeout(() => {
    console.log('Hello!');
}, 2000); */

//whole way to executing file
/* console.log(__dirname); */

//whole way to file including its name
/* console.log(__dirname); */

// багато різних параметрів, включаючи оточення
/* console.log(process);
console.log(process.env); */

//аргументи командної строки
//console.log(process.argv);


//Глобальний об'єкт щоб працювати з url адресами, що надходять з сервера
const url = new URL('https://webDev.com');
//console.log(url);
//result:
/* URL {
    href: 'https://webdev.com/',
    origin: 'https://webdev.com',
    protocol: 'https:',
    username: '',
    password: '',
    host: 'webdev.com',
    hostname: 'webdev.com',
    port: '',
    pathname: '/',
    search: '',
    searchParams: URLSearchParams {},
    hash: ''
} */

//console.log(url.hostname); //webdev.com

