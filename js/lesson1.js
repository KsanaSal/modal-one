// Task 1-1
// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.
const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total)
const diff = apples - grapes;
console.log(Math.abs(diff))

// Task 1-2
// Замени выражение переопределения комбинированным оператором +=.
let students = 100;
students += 50;
console.log(students);

// Task 1-3
// Разбери приоритет операторов в инструкции присвоения значения переменной result.
const result = 108 + 223 - 2 * 5;
console.log(result);

// Task 1-4
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value.
// Используй методы Math.floor(), Math.ceil() и Math.round().Проверь что будет в консоли при значениях 27.3 и 27.9.
const value = 27.9;
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));

// Task 1-5
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `Cyberdyne Systems has ${repairBots + defenceBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Task 1-6
// Напиши скрипт который рассчитывает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк(специально для задачи).
// Нецелые числа могут быть заданы в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массиы тела необходимо округлить до одной цифры после запятой;
let weight = '88,3';
let height = '1.75';
newWeight = Number(weight.replace(",", "."));
newHeight = Number(height);
const bmi = (newWeight / (newHeight ** 2)).toFixed(1);
console.log(bmi); // 28.8

// Task 1-7
// Каким будет результат выражений?
console.log(5 > 4, true); 

console.log(10 >= '7', true); 

console.log('2' > '12', true); 

console.log('2' < '12', false);

console.log('4' == 4, true);

console.log('6' === 6, false);

console.log('false' === false, false);

console.log(1 == true, true);

console.log(1 === true, false);

console.log('0' == false, true);

console.log('0' === false, false);

console.log('Papaya' < 'papaya', true);

console.log('Papaya' === 'papaya', false);

console.log(undefined == null, true);

console.log(undefined === null, false);

// Task 1-8
// Каким будет результат выражений?
console.log(true && 3, 3);

console.log(false && 3, false);

console.log(true && 4 && 'kiwi', 'kiwi');

console.log(true && 0 && 'kiwi', 0);

console.log(true || 3, true);

console.log(true || 3 || 4, true);

console.log(true || false || 7, true);

console.log(null || 2 || undefined, 2);

console.log((1 && null && 2) > 0, false);

console.log(null || (2 && 3) || 4, 3);

// Task 1-9
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.
// Проверь работу скрипта для слепдующих значений переменной incomingValue:
// null, undefined, 0, false.Используй оператор ?? (nullish coalescing operator).
const incomingValue = false;
const defaultValue = 10;
const value1 = incomingValue ?? defaultValue;
console.log(value1);

// Task 1-10
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01
const totalMinutes = 725;
const hours = Number.parseInt(totalMinutes / 60);
const minutes = totalMinutes % 60;
const doubleDigitHours = hours.toString().padStart(2, 0);
const doubleDigitMinutes = minutes.toString().padStart(2, 0);
// console.log(doubleDigitHours)

console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);