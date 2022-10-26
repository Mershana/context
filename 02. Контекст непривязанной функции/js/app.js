'use strict'

/* // Контекст непривязанной функции в JavaScript
Давайте посмотрим, что будет, если в функции указать this, но не привязать ее ни к какому элементу, вот так:

function func() {
	console.log(this);
}

func();
В этом случае результат зависит от того, строгий у нас режим или нет. Если режим нестрогий, то в this будет хранится ссылка на window:

function func() {
	console.log(this); // ссылка на окно window
}

func();
А если режим строгий, то в this будет хранится undefined:

"use strict";

function func() {
	console.log(this); // undefined
}

func();
Подводные камни
Из сказанного выше может показаться, что в строгом режиме this всегда будет undefined. Как бы не так! Если просто вывести this вне функции, то в нем будет ссылка на window независимо от режима:

"use strict";
console.log(this); // в this ссылка на window
Давайте подведем итог
В любой функции можно написать this, это не приведет к каким-либо ошибкам JavaScript. Но вот что именно будет лежать в этом this не определено до момента вызова функции. Причем при разных вызовах функции this может принимать разное значение. Все зависит от контекста, в котором была вызвана функция. */