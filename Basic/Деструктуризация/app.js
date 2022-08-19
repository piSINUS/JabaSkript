const user={
  firstName:'Den',
  lastName:"Mech",
  age :25,
  info:{
    skills:['html','css'],
    work:'easyCode'
  }
};

const firstName = user.firstName;
// const lastName =user.lastName;
console.log(firstName)
const {firstName: fname = '',lastName,age:years = 30} = user;
console.log(fname,years);
const {
  info:{work,skills},} = user;
console.log(work,skills);

const colors= ['white','balck','red'];
const[w,b,red,green ="green"]= colors;
console.log(b,w,red)

const names = ['Den','Ivan','Maks'];
const[name1, ...otherNames] =names;
console.log(name1,otherNames);
const nesedArr = ['hello world',['Pi','door']];
const [,[key,value]]= nesedArr;
console.log(key,value);
// const newNames = [...names];
// const [...newNames] = names;
console.log(...newNames);
const colorNames = [...names,...colors];
console.log(colorNames)
const newUser = {...user,age: 40};
console.log(newUser);
const {
  info: {
    skills:[html,css]
  },
} = newUser;
console.log(html,css);
function myPerson({firstName='KFC',lastName="itd",info:{skills}={}}={}){
  console.log(lastName,firstName,skills);
};
myPerson(newUser);
function foo (x,y,...others){
  console.log(arguments);
  console.log(others);
};
foo(1,2,3,4);
const num = [1,2,3];
 function foo2 (x,y){
  console.log(x,y);
 };
 foo2(...num);
