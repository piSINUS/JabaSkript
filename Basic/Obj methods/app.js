
let obj1 = {
  name:"Den",
  secondname:"Vsailev",
  info:{
    skills:['html','css']
  }
};
let obj2={
  age:22
};
let newObj = Object.assign({},obj1,obj2);
newObj = Object.assign({},obj1);
newObj = JSON.stringify(obj1);
console.log(newObj);
console.log(newObj.info === obj1.info)
let keys = Object.keys(obj1);
console.log(keys)
let values =  Object.values(obj1);
console.log(values);