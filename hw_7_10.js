'use strict';
//1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval 


    function detonatorTimer(delay) {
        let counter = delay;
      
        const intervalId = setInterval(() => {
          if (counter > 0) {
            console.log(counter);
            counter--;
          } else {
            clearInterval(intervalId);
            console.log('BOOM!');
          }
        }, 1000);
      }

      detonatorTimer(3);


  //
  function detonatorTimer2(delay) {
    let counter = delay;

    function countdown() {
        if (counter > 0) {
            console.log(counter);
            counter--;
            setTimeout(countdown, 1000); 
        } else {
            console.log('BOOM!');
        }
    }
    countdown();
}

detonatorTimer2(3);

//3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять. 

let me = {
  name: 'Natalie',
  residency: 'Olomouc',
  gender: 'female',
  age: 35,
  hobby: 'sport',
  defaultMood: 'energetic',
  currentMood: 'relaxed',
  introduce() {
      console.log(`My name is ${this.name} and I live in ${this.residency}`);
  },
  prognose() {
      console.log(`I hope that next year I'm gonna be ${this.age + 1}`);
  },
  describeMyMood() {
      console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
  },
  updateMood(newMood) {
      this.currentMood = newMood;
      console.log(`My mood has been updated to ${newMood}`);
  },
  pursueHobby() {
      console.log(`I enjoy ${this.hobby} in my free time.`);
  },
  getActive() {
      console.log(`Time to be ${this.defaultMood}!`);
  }
};

me.introduce();
me.prognose();
me.describeMyMood();
me.updateMood('');
me.pursueHobby();
me.getActive();

//А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту
let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);
//Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:
setTimeout(securedSelfIntroduce, 1000);
setTimeout(securedSelfPrognose, 2000);
setTimeout(securedSelfDescribeMyMood, 3000);

//Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.
function someFunction(arg) {
  // Довільна робота з аргументом
  return `Result: ${arg}`;
}

function slower(func, seconds) {
  return function (...args) {
      console.log(`Chill out, you will get your result in ${seconds} seconds.`);
      
      setTimeout(() => {
          const result = func(...args);
          console.log(result);
      }, seconds * 1000);
  };
}

let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction('Your argument');



      
