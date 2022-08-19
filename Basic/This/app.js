function getThis() {
  console.log(this);
}
// getThis();
// window.getThis();
// console.log(window.getThis);

function getPrice(currency = '$') {
  console.log(currency + this.price);
  return this;
}

function getName() {
  console.log(this.name);
  return this;
}

const prod1 = {
  name: 'Intel',
  price: 100,
  getPrice,
  getName() {
    console.log(this.name);
  },
  info: {
    information: ['2.3ghz'],
    getInfo: function() {
      console.log(this);
    },
  },
};

const prod2 = {
  name: 'AMD',
  price: 50,
  getPrice,
};

prod2.getName = prod1.getName;

let str = 'Hello world';
const reversStr = str
  .split('') 
  .join(''); 
const prod3 = {
  name: 'ARM',
  price: 200,
  getPrice,
  
};


const getPriceBind = prod3.getPrice.bind(prod3, '*');
console.log(getPriceBind);
setTimeout(getPriceBind, 1000);
