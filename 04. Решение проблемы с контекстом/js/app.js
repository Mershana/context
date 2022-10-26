"use strict";

// Решение проблемы с контекстом в JavaScript
/* Первое решение проблемы
Решение следующее: во внешней функции запишем this в любую переменную и эта переменная будет доступна во внутренней функции, как и все переменные (обычно эту переменную называют self). Таким образом мы передадим this из внешней функции во внутреннюю:

"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this.value); // выведет 'text'
	
	let self = this; // запишем this в любую переменную, например, в self
	
	function child() {
		console.log(self.value); // выведет 'text'
	}
	child();
} */

/* №1⊗jsPmCtxSCP
Пусть дан такой код:

<input id="elem" value="3">
"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
	alert( square() );
	
	function square() {
		return this.value * this.value;
	}
}
Автор кода хотел, чтобы по потери фокуса на экран вывелся квадрат числа из value инпута. Однако, почему-то при потери фокуса в консоль выдается ошибка. Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка. */

/* let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
	let self = this;
	alert( square() );
	function square() {
		return self.value * self.value;
	}
} */

//во внешней функции не было присвоено this к переменной, поэтому теряеся контекст во внутренней фунции

// Второе решение проблемы

// №2⊗jsPmCtxSCP
// Возьмите код из предыдущей задачи и исправьте проблему кода с помощью изученного второго способа.
/* let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent (){
	func(this);
	function func(param) {
		alert( square() );
		function square() {
			return param.value * param.value;
		}
	} 
}
 */

// Третье решение проблемы

/* №3⊗jsPmCtxSCP
Возьмите код из предыдущей задачи и исправьте проблему кода с помощью изученного третьего способа. */

let elem = document.querySelector("#elem");
elem.addEventListener("blur", parent);

function parent() {
  this.value;
    let square = () => {
      console.log(this.value * this.value);
  }
  square()
}
