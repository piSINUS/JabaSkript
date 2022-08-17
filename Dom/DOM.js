// const div = document.querySelector('div');
// const titels = document.querySelectorAll('h1');
// const h1 = document.getElementsByTagName('h1');
// console.log(h1);
// console.dir(titels);
// console.log([...titels]);
//Brouser Object Model (Bom)

// console.log(div.parentElement);**Свойство parentElement возвращает родитель-элемент, а parentNode возвращает «любого родителя»

//  const link = div.querySelector('.link');
// console.log(link.parentElement);
// console.log(link.closest('.content'));
// console.log(div.classList);

// div.classList.add('article','custom')
// console.log(div.classList);
// div.classList.remove('article');
// div.classList.toggle('toggle');
// console.log(div.classList);
// console.dir(link);

// div.setAttribute("id","myid");
// div.getAttribute("id");
// div.hasAttribute('id');
// div.removeAttribute('id');


// div.dataset
// div.getAttribute("data-myattr")
// div.dataset.mattyr = "my a";

//  Манипуляция DOM

// const title = document.querySelector('h1');
// title.innerHTML ="<span>txt</span>";
// title.textContent = "new text";
// title.insertAdjacentHTML("beforebegin","<h2>title</h2>");
// title.insertAdjacentElement
// title.innerHTML += "<span>new text</span>";
// const span = title.querySelector("span");
// console.log(span);
// title.innerHTML += "<span>new text2</span>";
// title.innerHTML += "ababab";

// Создание жлемента

// const span = document.createElement("span");
// span.textContent ="span created";
// span.classList.add('myClass');
// console.log(span);
// title.appendChild(span);

//  div.appendChild(span);

// const fragment = document.createDocumentFragment();
// const colors =['seagreen','yellow','red'];
// colors.forEach((color) =>{
//   const item = document.createElement("div");
//   div.classList.add(`bg-${color}`)
//   item.style.background = color;
//   item.textContent = color;
//   fragment.acppendChild(item);
// });

// document.body.appendChild(fragment);

// Удаление элементов
// title.remove()
// title.parentElement.removeChild(title);

// Обработка событий
// const btn = document.querySelector('button');
// const link =  document.querySelector('a');
// btn.addEventListener('click',e => {
//   console.log(this);
//    console.log(e);
//  })

// function clickhandler(e){
//   console.log(this);
//   e.preventDefault();
//   console.log('click');
// };

// link.addEventListener('click',clickhandler);
// link.removeEventListener('click',clickhandler);
// btn.onclick = function(){
//   console.log('click');
// };
// btn.addEventListener("click",function(e){
//   console.log(e);
// });

//  Всплытие и погрyжение события


// const btn = document.querySelector('.btn');
// const wrap = document.querySelector('.wrap')

// btn.addEventListener('click',(e) =>{
//   e.stopPropagation();
//   console.log('click btn');
// });

// wrap.addEventListener("click",e =>{
//   console.log('click wrap')
// },);

// document.body.addEventListener('click',e =>{
//   console.log('click body');
// },);


// wrap.addEventListener("click",e =>{
//   console.log('click wrap')
// },true);

// document.body.addEventListener('click',e =>{
//   console.log('click body');
// },{capture:true});
