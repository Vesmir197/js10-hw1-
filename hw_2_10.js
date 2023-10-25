'use strict';

for (let i = 1; i <= 14; i++) {
    const result =
        (i % 3 === 0 && i % 5 === 0) ? "ЛолКек" :
        (i % 3 === 0) ? "Лол" :
        (i % 5 === 0) ? "Кек" :
        i;
    console.log(result);
}


/*if (!isNaN(i)) {
    console.log("Змінна є числом");
        
}
 else {
    console.log('Таке чуство шо Бог десь наказує нас за шось');
}*/

let value = 14;

if (typeof value === 'number' && !isNaN(value)) {
    for (let i = 2; i < value; i += 2) {
        console.log(i);
    }

    let i = 2;
    while (i < value) {
        console.log(i);
        i += 2;
    }
} else {
    console.log('Таке чуство, що Бог десь наказує нас за щось');
}





