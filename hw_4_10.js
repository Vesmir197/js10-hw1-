'use strict';

//1.

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames.map(fullName => {
    let components = fullName.split(" ");
      const firstName = components[0][0]; // Витягуємо першу літеру імені
    const lastNameInitials = components.slice(1).map(component => component[0]).join("."); // Беремо ініціали прізвища
    return `${firstName}.${lastNameInitials}`;
});

initials.sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]



//2.
const userNames2 = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames2 = [];

const arr = "АЕОИІУЮЯаеоиіуюя";

for (let i = 0; i < userNames2.length; i++) {
    if (arr.includes(userNames2[i][0])) {
        filteredNames2.push(userNames2[i]) 
    }
}

console.log(filteredNames2); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']


const userNames3 = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const arr3 = ['А', 'О', 'E', 'I'];

const filteredNames = userNames3.filter((userName) => arr.includes(userName[0]));

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']



//3.
const currentMaxValue = 4589;

const reversedString = currentMaxValue.toString().split('').reverse().join('');
const reverseMaxValue = parseInt(reversedString);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'


//4.
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

// Flatten the nested array
const flattenedArray = resultsArray.flat(Infinity);

// Calculate the product using reduce
productOfArray = flattenedArray.reduce((acc, cur) => acc * cur, 1);

console.log(productOfArray); // 24


