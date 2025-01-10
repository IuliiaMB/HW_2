//         Решить задачи: 
// 
// 1. Напишите цикл for, который выводит в консоль каждое второе число от 0 до 10.

// for(let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// 2. Напишите цикл for, который выводит в консоль  все числа от 55 до 20

// for(let i = 55; i >= 20; i--){
//     console.log(i);    
// }


// 3.Дан массив numbers. Вывести в консоль все числа из массива

// const numbers = [3, 5, 11, 2, 8, 1, 6];
// console.log(numbers);



// 4. Сформировать новый массив numberssquared и передать в него все    элементы из массива numbers, возведенные в квадрат.

// const numbers = [3, 5, 11, 2, 8, 1, 6];
// const numbersSquared = []

// for(let i = 0; i < numbers.length; i++){
//     numbersSquared.push(numbers[i] ** 2)
// }
// console.log(numbersSquared);



// 5. Создать переменную lastelem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу).

// let numbers_squared = [9, 25, 121, 4, 64, 1, 36];
// let lastelem = [];
// lastelem.push(numbers_squared[6])
// console.log(lastelem);


// 6. Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is  . He is  years old’

// const user = {
//     firstname: 'Ivan',
//     lastname: 'Ivanov',
//     age: 20,
//     salary: 500
// }

// console.log(`User’s name is ${user.firstname}. He is ${user.age} years old`)