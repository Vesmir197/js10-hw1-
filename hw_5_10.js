'use strict';
 
//1. Задача про обчислення різниці часу

  function durationBetweenDates(startDate, endDate) {
    startDate = new Date('02 Aug 1985');
    endDate = new Date('03 Aug 1985');
    let diffTime = Math.abs(endDate - startDate);

    const diffSeconds = Math.floor(diffTime / 1000);
  
    console.log(diffSeconds + ' seconds');
}

durationBetweenDates('02 Aug 1985', '03 Aug 1985');



function durationBetweenDates2(date1, date2) {
    date1 = new Date('01/31/2022');
    date2 = new Date('02/03/2021');

    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffDays + " days");
  }

  durationBetweenDates2 ('Jan 31 2022','Fab 03 2021' );

  
  //2. Задача про перетворення об'єкту

  const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

function optimizer(data) {
    const newData = {};

    for (let key in data) {
        const lowercaseKey = key.toLowerCase();
        const roundedValue = parseFloat(data[key]).toFixed(2);
        newData[lowercaseKey] = roundedValue;
    }

    return newData;
}

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData);




 





  





  









