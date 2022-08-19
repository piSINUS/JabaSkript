let firstName = "";
let lastName = '';
let value;

value = firstName + lastName;
value = firstName + ' ' + lastName;
value += ' I am ' + age;

value = firstName.length;//
value = firstName[2];//
value = firstName[4];//
value = lastName[lastName.length - 1];//
value = firstName[firstName.length - 1];//

value = firstName.toUpperCase();//В верхний регистр
value = firstName.concat(' ', lastName);//Склеивание строк и тп

value = str.indexOf('n', 10);//индекс  в строке 1 индекс чего нужен 2 после какого индекса искать
value = str.indexOf('!');//
value = str.includes('');//проверка на наличие возвращает бульево выражение

value = str.slice(0, 5);// обрезание от какогото число до указанного 2
value = str.slice(0, -3);//

value = str.replace('Denis', 'Den');// замена
