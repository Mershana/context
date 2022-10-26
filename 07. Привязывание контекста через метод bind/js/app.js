'use strict'

// Привязывание контекста через метод bind в JavaScript
/* №1⊗jsPmCtxBM

Пусть дан следующий код:

<input id="elem" value="привет">
let elem = document.getElementById('elem');

function func(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

// тут напишите конструкцию с bind()

func('John', 'Smit'); // тут должно вывести 'hello, John Smit'
func('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'
Напишите в указанном месте конструкцию с методом bind так, чтобы this внутри функции func всегда указывал на инпут из переменной elem. */

let elem = document.getElementById('elem');

function func(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname);
}
let newFunc = func.bind(elem)
newFunc('John', 'Smit')
newFunc('Eric', 'Luis')
