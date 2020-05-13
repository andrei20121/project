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
for (let i = 0; i < 2; i++) {
    let a = +prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько обойдется?", "");

    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

        console.log ("done");

        appData.expenses[a] = b;
    } else {                            
        console.log ("bad result");
        i--;
    }

};



// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);


appData.moneyPerDay = appData.budget / 30;


alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}





