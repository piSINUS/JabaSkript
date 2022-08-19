const car = {
  brand: "Audi",
  year:'2017',
  get age(){
    return `is ${this.year}`
  },
  set age(value){
    this.year = value;
  }
};

Object.defineProperty(car,'age',{
  // configurable: false,
  //enumerable:false,
  // writable: false,
  get: function(){
    return `Is ${this.year}`;
  }
})
Object.defineProperty(window , 'globalVar',{
  set: function(value){
    console.log(value);
    debugger;
  },
});

function foo(){
  globalVar = 10;
}
foo();