'use strict';
/*1. Створіть 2 змінні з типом number. 
Проведіть з ними такі математичні операції:   
*/
const num1 = 10;
const num2 = 5;
const num3 = 20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num3 / num2);

// Приведемо число 6 до 2ї степені
const result = Math.pow(6, 2);
console.log(result); // Виведе 36

console.log(Math.sqrt(16));    // 4

/* 2. Створіть змінну довільного типу. 
Проведіть наступні перетворення з нею:
перетворіть її на рядок
перетворіть її на число
перетворіть її на булеве значення */

/*let a = 5; //число
let b = "5"; // string
let c = a + b; 
//alert(typeof(c))// виведе string
console.log(c);*/


const a = 170;
 console.log(a.toString());

let participants = +"5";
console.log(participants);


console.log(Boolean(5)); //  true
//or
console.log(!!5); //  true










