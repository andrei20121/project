'use strict'; //для стандарта ES6

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null; //ссылка на несуществующую вещь
undefined; // не определил
var obj = {};

//let person = {
 //   name : "andrei",
 //   age : 24
//};
 //console.log(person.name);
 //console.log(person.age);

/* let arr = ['first','second','third']
 console.log(arr[1]);*/

//alert("Hello world");
/*let answer = confirm("And you here?");
console.log(answer);
Задается вопрос в окне браузера, если ответ да-true ,если нет-false*/ 
/*let answer = prompt("Есть ли Вам 18?", "Да");
console.log(answer); Выводит в консоль значение*/

/*let answer = prompt("Есть ли Вам 18?", "Да");
console.log(typeof(arr)); typeof-Указывает тип данных*/
//let incr = 10,
//    decr = 10;
//incr++;
//decr--;
//console.log(incr);
//console.log(decr);

//console.log(15%4);/* Проверка на остаток */
//console.log("2"== 2); /* проверка на равенство */
//console.log("2"=== 2); /* проверка на равенство типов данных */

//let isCheked = true,
//    isClose = true;
//console.log(isCheked && isClose); //&&- знак имперстант и ||-или

/*let isCheked = false,
    isClose = true;
console.log(isCheked || isClose);*/

let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30); 







