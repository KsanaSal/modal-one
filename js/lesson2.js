// Task 2-1
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// "Какое официальное название JavaScript?".Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!",
// в противном случае - "Не знаете? ECMAScript!"
// const input = prompt("Какое официальное название JavaScript?");

// if (input === "ECMAScript") {
//     alert("Верно!");
// } else {
//     alert("Не знаете? ECMAScript!");
// }

// Task 2-2
// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.".
// Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.
// const hours = 13;
// const minutes = 35;
// let timestring;

// if (minutes > 0) {
//     timestring = `${hours} год. ${minutes} хв.`;
// } else {
//     timestring = `${hours} год.`;
// }
// console.log(timestring);

// Task 2-3
// Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля.
// Если был введен ноль, выводи в консоль строку "Это ноль".
// Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".
// const userInput = prompt('Введіть число');

// if (userInput > 0) {
//     alert("Це дотатнє число");
// } else if (userInput < 0) {
//     alert("Це відємне число");
// } else {
//     alert("Це нуль");
// }

// Task 2-4
// Напиши скрипт, который сравнивает числа в переменных a и b.Если оба значения больше 100, то выведи в консоль максимальное из них.
// В противном случае в консоли должна быть сумма значения b и числа 512.
const a = 250;
const b = 30;
let result;

if (a > 100 && b > 100) {
    result = a > b ? a : b;
} else {
    result = b + 512;
}
console.log(result);

// Task 2-5
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ.Используй конструкцию if...else.
let link = 'https://my-site.com/about';

if (!link.endsWith("/")){
    link += "/";
}
console.log(link);

// Task 2-6
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site".
// Используй конструкцию if...else.
let link1 = 'https://my-site.com/about';

if (!link1.endsWith("/") && link1.includes("my-site")) {
    link1 += "/";
}
console.log(link1);

// Task 2-7
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.
let link2 = 'https://somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
link2 = link2.includes('my-site') && !link2.endsWith('/') ? link2 + '/' : link2;
console.log(link2);

// Task 2-8
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.
// Если значение переменной hours:
// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"
const hours = 17;
if (hours < 17) {
  console.log("Pending");
} else if (hours >= 17 && hours <= 24) {
  console.log("Expires");
} else {
  console.log("Overdue");
}

const task_2_8 = (h) => {

  if (h < 17) {
  return "Pending";
} else if (h >= 17 && h <= 24) {
  return "Expires";
}
  return "Overdue";
}
console.log(task_2_8(25));

// Task 2-9
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.
// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
const daysUntilDeadline = 5;



// Test autocheck 41
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
    addPotion(newPotion) {
        
        let a = false;
        for (const potion of this.potions) {
           
            if (potion.name === newPotion.name) {
                a = true;
          }

      }
    if (a) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

     this.potions.push(newPotion);
  },
    removePotion(potionName) {
        let potionIndex = -1;
        for (i = 0; i < this.potions.length; i += 1){
            if (this.potions[i].name === potionName) {
                potionIndex = i;
                break
}
        }
    const potionIndex1 = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
    updatePotionName(oldName, newName) {
      let potionIndex = -1;
        for (i = 0; i < this.potions.length; i += 1){
            if (this.potions[i].name === oldName) {
                potionIndex = i;
                break
}
        }
    // const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }
        console.log(this.potions[potionIndex]);
        this.potions[potionIndex].name = newName;
    // this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.getPotions());


