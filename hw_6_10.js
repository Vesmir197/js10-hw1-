'use strict';


function addThemAll (...args) {
    let sum = 0;

    for (let arg of args){
        sum += arg;
    }

    return sum;
}

console.log(addThemAll(2,4));//6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20


//2. Задача на використання замикання.

function multiply(a) {


    return function (b) {
        return a * b;
    }

}
console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))    // -4
console.log(multiply(4)(3))		// 12

/*3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів 

Функція буде приймати два аргумента:

— властивість за якою треба посортувати. 

— опцію напрямку сортування (зростання чи спадання)
*/



const movies = [
  {
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 109,
  },
  {
    movieName: 'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
  },
  {
    movieName: 'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
  },
  {
    movieName: 'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
  },
];

function byProperty(property, direction) {
    return function(a, b) {
      const valueA = a[property];
      const valueB = b[property];
  
      if (direction === 'asc') {           
        return valueA - valueB;
        
      } else if (direction === 'desc') {
        return valueB - valueA;
      }
  
      return 0;
    };
  }


console.log(movies.sort(byProperty('releaseYear', 'desc')));
console.log(movies.sort(byProperty('runningTimeInMinutes', 'asc')));
console.log(movies.sort(byProperty('movieName', 'desc')));


//4. Напишіть функцію яка відфільтрує масив унікальних значень

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {

  const uniqueSet = new Set(array);
  const uniqueArray = [...uniqueSet];

  return uniqueArray;

  }

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];



