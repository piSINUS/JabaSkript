Замыкание
function closureExample(){

  const arrOfFunc = [];
  let value = '';

  for (let i = 0; i<10; i++){
    value +=i;
    arrOfFunc.push(function() {
      console.log(value, i);
    });
  }
  return arrOfFunc;
}


const res = closureExample();
res[0]();
res[5]();
