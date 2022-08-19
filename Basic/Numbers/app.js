// Numbers
const num1 = 10;
const num2 = 20;
let value;

// + * / - %
value = num1 + num2;
value = value + 100;
value += 100;
// value = 5 % 2;
value++;
value--;
++value;
--value;

value = 0.6 + 0.7;
// value = parseFloat(value.toFixed(1));
value = ( 0.6 * 10 + 0.7 * 10 ) / 10;

// Math
value = Math.PI;// число пи
value = Math.random();// случайное число
value = Math.round(2.4);// округление по мат правилам
value = Math.ceil(2.1);//округление всегда в большую сторону
value = Math.floor(2.9);//округление всегда в меньшую сторону
value = Math.min(2, 12, 15, 0, 12);//минимальное число 

value = Math.floor(Math.random() * 10 + 1);

const arr = ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'orange', 'green'];
value = Math.floor(Math.random() * arr.length);

console.log(value, arr[value]);