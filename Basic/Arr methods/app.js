const numArr = [2, 32, 1234, 54, 323];
const numArr2 = [2, 32, 1234, 54, 323];

let value;

value = numArr.length;
// numArr.length = 0;
// numArr.length = 100;

value = Array.isArray(numArr);//проверка является ли объектом
value = numArr[2];
numArr[2] = 12;
value = numArr.indexOf(32);//индекс эл-та спска

value = numArr.push(100);//Добавить в ар в конец массива
value = numArr.pop();//удаление последнего эл списка
value = numArr.unshift(111);//Добавить эл в ар в начало списка
value = numArr.shift();//Удаление эл из  начала ар
value = numArr.slice(0, 2);//обрезание эл списка по списку
value = numArr.splice(1, 0, "one", "two");//
value = numArr.reverse();// переворот эл массива
value = numArr.concat(numArr, numArr2);//обйеденение массивов
value = numArr.join(" ");//Из str в  arr
value = "hello world".split(" ");//Из  arr в str
console.log(value, numArr);
