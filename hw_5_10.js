'use strict';
 
//1. Задача про обчислення різниці часу


function durationBetweenDates(start_date = '01 Jan 2000', end_date = '01 Jan 2023', unit = 'days') {
    
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    const timeDifference = endDate - startDate;

  
    const calculateUnit = (unit, timeDifference) => {
        switch (unit) {
            case 'days':
                return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            case 'hours':
                return Math.floor(timeDifference / (1000 * 60 * 60));
            case 'minutes':
                return Math.floor(timeDifference / (1000 * 60));
            case 'seconds':
                return Math.floor(timeDifference / 1000);
        }
    };

    return calculateUnit(unit, timeDifference);
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); 

  
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




 





  





  









