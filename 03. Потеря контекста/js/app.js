'use strict'
// Потеря контекста в JavaScript
/* Пусть у нас есть функция в функции. Давайте внешнюю функцию назовем parent, а внутреннюю - child:

function parent() {
	function child() {
		
	}
}
Из предыдущих уроков вы знаете, что если задать какую-либо переменную во внешней функции - она будет доступна во внутренней:

function parent() {
	let str = 'abcde';
	
	function child() {
		console.log(str); // выведет 'abcde'
	}
	child(); // вызываем внутреннюю функцию
}

parent(); // вызываем внешнюю функцию
Есть, однако, нюанс: внутренняя функция имеет доступ ко всем переменным внешней, но не имеет доступа this. То есть: если внешняя функция привязана к какому-то DOM элементу, то this в ней будет указывать на этот элемент, но this внутренней функции - не будет!

На что же тогда будет указывать this внутренней функции? Ответ: он будет равен undefined (в строгом режиме), так как функция ни к чему не привязана.

Давайте проверим на практике. Пусть у нас дан инпут:

<input id="elem" value="text">
Привяжем к этому инпуту функцию parent, которая будет вызываться по потери фокуса инпутом:

"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

// Вызовется по потери фокуса:
function parent() {
	// тут будет какой-то код
	
	function child() {
		// тут будет какой-то код
	}
	child(); // вызываем дочернюю функцию
}
Давайте выведем содержимое this в консоль в двух местах: внутри функции parent и внутри функции child:

"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this); // выведет ссылку на наш инпут
	
	function child() {
		console.log(this); // выведет undefined
	}
	child();
}
Запустите этот код, потеряйте фокус инпуту и посмотрите в консоль - вы увидите, что первый console.log выведет в консоль ссылку на наш инпут, а второй - просто undefined. Такая ситуация, когда this неожиданным для нас образом указывает не на то, что нам нужно, называется потеря контекста. */

/* "use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this); // выведет ссылку на наш инпут
	
	function child() {
		console.log(this); // выведет undefined
	}
	child();
} */

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this.value); // что выведет? // содержимое input - 'text'
	
	function child() {
		console.log(this.value); // что выведет? ошибку в строгом режим, не в строгом undefined
	}
	child();
}