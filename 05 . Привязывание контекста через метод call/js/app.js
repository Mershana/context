'use strict'

// Привязывание контекста через метод call в JavaScript
/* №1⊗jsPmCtxCM

Дана функция:

function func() {
	console.log(this.value);
}
Даны три инпута:

<input id="elem1" value="text1">
<input id="elem2" value="text2">
<input id="elem3" value="text3">
С помощью метода call и функции func выведите на экран value каждого из инпутов. */
/* let elems1 = document.querySelector('#elem1');
let elems2 = document.querySelector('#elem2');
let elems3 = document.querySelector('#elem3');


function func() {
	console.log(this.value);
}
func.call(elems1);
func.call(elems2);
func.call(elems3); */

// Метод call с параметрами


/* №2⊗jsPmCtxCM
Пусть дан следующий код:
<input id="elem" value="hello">
let elem = document.querySelector('#elem');
function func(surname, name) {
	console.log(this.value + ', ' + name + ' ' + surname);
}
func(); // тут должно вывести 'hello, John Smit'
Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'hello, John Smit'. Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями. */
/* let elem = document.querySelector('#elem');
function func(surname, name) {
	console.log(this.value + ', ' + name + ' ' + surname);
}
func.call(elem, 'Jonh', 'Smit'); */

