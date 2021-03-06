// Task 4-1
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота будут специально переданы как строки.
// Нецелые числа могут быть заданы в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массы тела необходимо округлить до одной цифры после запятой;
const bmi = calcBMI('88,3', '1.75');
function calcBMI(weight, height) {
    weight = weight.replaceAll(",", ".");
    height = height.replaceAll(",", ".");
    return (weight / (height ** 2)).toFixed(1);
}
console.log(bmi); // 28.8

// Task 4-2
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}
const max = (a, b) => a > b ? a : b;
console.log(max(2, 5)); // 2
console.log(max(3, -1)); // -1
console.log(max(1, 1)); // 1

// Task 4-3
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами,
// значения которых будут переданы в параметр dimensions в виде строки.Значения гарантированно разделены пробелом.
function getRectArea(dimensions) {}

console.log(getRectArea('8 11'));

// Task 4-4
// Напиши функцию logItems(items), которая получает массив и использует цикл for,
    // который для каждого элемента массива будет выводить в консоль сообщение в формате < номер элемента > - <значение элемента >.
// Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива ['Mango', 'Poly', 'Ajax']
// с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.
function logItems(items) {}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Task 4-5
// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя.
// В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.Количество имен и телефонов гарантированно одинаковое.
function printContactsInfo(names, phones) {}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
);

// Task 4-6
// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.
function findLargestNumber(numbers) {}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// Task 4-7
// Напишите функцию calAverage() которая принимает произвольное кол - во аргументов и возвращает их среднее значение.
// Все аругменты будут только числами.
function calAverage() {}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// Task 4-8
// Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.


// Task 4-9
// Напишите функции для работы с коллекцией обучающих курсов courses:
// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое



const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close

const dishes = document.querySelectorAll(".dishes > li");
dishes.forEach((dish) => {
  console.log(dish.dataset.id);
});