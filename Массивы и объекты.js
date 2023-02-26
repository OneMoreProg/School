"use strict"; // Строгий код

//console.log("Fire in the hole!!!");

 //const _apiBase = 'asdqqqq';
 //const _apikey = 'asdxzzzz';  НЕ ТРОГАТЬ!!!
 //const COLOR_RED = '#F00';

// NaN = Not a number
// null = Не существует
// undefined = Существует, но не определено

//Объекты

const obj = {
    name : 'John',
    age : 25,
    isMarried : false, 
    29 : 'Byba'
};

console.log(obj.name);
console.log(obj["age"]);
console.log(obj[29]);
// Нюанс, не забываем про ковычки
obj.g = '1263';
console.log(obj['g']);

//Массивы это частный случай объекта

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[2]);