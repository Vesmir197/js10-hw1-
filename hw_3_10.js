'use strict';

// Задача 2.

function iterativeOddSumTo(number) { //параметр
    let sum = 0; // на початку сума всіх непарних чисел дорівнює нулю
    for (let i = 1; i < number; i += 2) {   // Після кожного проходу циклу, значення i збільшуємо на 2 щоб перейти до наступного непарного числа
        sum += i;
    }
    return sum;
}
const result = iterativeOddSumTo(10);
console.log(`Сума всіх непарних чисел до 10: ${result}`);

const result2 = iterativeOddSumTo(1);
console.log(`Сума всіх непарних чисел до 1: ${result2}`);

// i = 1 вказує, з якого числа починаємо обчислення суми всіх непарних чисел


// Задача 1.Напишіть функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.

function recursiveOddSumTo(number) {
    if (number <= 0) {
        return 0; // Базовий випадок: якщо число менше або дорівнює 0, повертаємо 0
    }
    if (number % 2 === 0) {
        number--; // Якщо число парне, зменшуємо його на 1, щоб отримати непарне
    }
    return number + recursiveOddSumTo(number - 2); // Додаємо поточне число та результат рекурсивного виклику для меншого числа
}

console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25

    

    