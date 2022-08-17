// Замыкание
// function closureExample(){

//   const arrOfFunc = [];
//   let value = '';

//   for (let i = 0; i<10; i++){
//     value +=i;
//     arrOfFunc.push(function() {
//       console.log(value, i);
//     });
//   }
//   return arrOfFunc;
// }


// const res = closureExample();
// res[0]();
// res[5]();
//Методы  объектов
// let obj1 = {
//   name:"Den",
//   secondname:"Vsailev",
//   info:{
//     skills:['html','css']
//   }
// };
// let obj2={
//   age:22
// };
// let newObj = Object.assign({},obj1,obj2);
// newObj = Object.assign({},obj1);
// newObj = JSON.stringify(obj1);
// console.log(newObj);
// console.log(newObj.info === obj1.info)
// let keys = Object.keys(obj1);
// console.log(keys)
// let values =  Object.values(obj1);
// console.log(values);
//Деструктуризация
// const user={
//   firstName:'Den',
//   lastName:"Mech",
//   age :25,
//   info:{
//     skills:['html','css'],
//     work:'easyCode'
//   }
// };

// const firstName = user.firstName;
// const lastName =user.lastName;
// console.log(firstName)
// const {firstName: fname = '',lastName,age:years = 30} = user;
// console.log(fname,years);
// const {
//   info:{work,skills},} = user;
// console.log(work,skills);

// const colors= ['white','balck','red'];
// const[w,b,red,green ="green"]= colors;
// console.log(b,w,red)

// const names = ['Den','Ivan','Maks'];
// const[name1, ...otherNames] =names;
// console.log(name1,otherNames);
// const nesedArr = ['hello world',['Pi','door']];
// const [,[key,value]]= nesedArr;
// console.log(key,value);
// const newNames = [...names];
// const [...newNames] = names;
// console.log(...newNames);
// const colorNames = [...names,...colors];
// console.log(colorNames)
// const newUser = {...user,age: 40};
// console.log(newUser);
// const {
//   info: {
//     skills:[html,css]
//   },
// } = newUser;
// console.log(html,css);
// function myPerson({firstName='KFC',lastName="itd",info:{skills}={}}={}){
//   console.log(lastName,firstName,skills);
// };
// myPerson(newUser);
// function foo (x,y,...others){
//   console.log(arguments);
//   console.log(others);
// };
// foo(1,2,3,4);
// const num = [1,2,3];
//  function foo2 (x,y){
//   console.log(x,y);
//  };
//  foo2(...num);


//Object descriptor
// const car = {
//   brand: "Audi",
//   year:'2017',
//   get age(){
//     return `is ${this.year}`
//   },
//   set age(value){
//     this.year = value;
//   }
// };

// Object.defineProperty(car,'age',{
//   // configurable: false,
//   //enumerable:false,
//   // writable: false,
//   get: function(){
//     return `Is ${this.year}`;
//   }
// })
// Object.defineProperty(window , 'globalVar',{
//   set: function(value){
//     console.log(value);
//     debugger;
//   },
// });

// function foo(){
//   globalVar = 10;
// }
// foo();

//Объекты и обертки

// let str = 'hello world';
// console.dir(String);
// const strObj = new String('hello');
// console.log(strObj);
// console.dir(Number);