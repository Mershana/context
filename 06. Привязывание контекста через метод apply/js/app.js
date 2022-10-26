'use strict'

// Привязывание контекста через метод apply в JavaScript

/* №1⊗jsPmCtxAM
Пусть дан следующий код:

<input id="elem" value="hello">
let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func(); // тут должно вывести 'hello, John Smit'
Добавьте в последнюю строчку метод apply так, чтобы на экран вывелось 'hello, John Smit'. Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями. */

let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func.apply(elem, ['Jonh', 'Smit']); // тут должно вывести 'hello, John Smit'