// 1.  Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

// function minNumber(num1, num2) {
//     if (num1 < num2) {
//         return num1
//     } else {
//         return num2
//     }
// }
// console.log(minNumber(8, 5));


// ?? 2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

// function oddNumber(num1, num2) {
//     let min = 0
//     let max = 0

//     if (num1 > num2) {
//         min = num2
//         max = num1
//     } else {
//         min = num1
//         max = num2
//     }

//     for(let i = max; i >= min; i--) {
//         if (i % 2 === 0) {
//             console.log(i);    
//         }
//     } 
// }  
// oddNumber(10, 3)



// 3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени.

// function power(num1, num2) {
//     return num1 ** num2
// }
// console.log(power(5, 3));



// 4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function number(n) {
//     let sum = 0
//     for(let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(number(10));


// 5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).


// function number(n, m) {
//     let sumEven = 0
//     let sumOdd = 0
    
//     let start = 0
//     let end = 0

//     if (n < m) {
//         start = n
//         end = m
//     } else {
//         start = m
//         end = n
//     }

//     for(let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             sumEven += i
//         } else {
//             sumOdd += i
//         }
//     }
//     console.log("Сумма четных чисел:", sumEven);
//     console.log("Сумма нечетных чисел:", sumOdd);
// }

// number(3, 10)
    

// Определение границ диапазона:
//     let start = 0; let end = 0
//     if (n < m) {
//         start = n;
//         end = m;
//     } else {
//         start = m;
//         end = n;
//     }
// Здесь проверяется, какое из чисел (n или m) меньше, чтобы установить правильный порядок диапазона:
// Если n < m, то start = n, а end = m.
// Если наоборот, то start = m, а end = n.
// Это делается для того, чтобы диапазон всегда проходился от меньшего числа к большему, независимо от того, в каком порядке переданы аргументы.


// 6. Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. Пример: [ 'one', 'two', 'three' ] => 'three'

// function longestString(strings) {
//     if(strings.length === 0) {
//         return null
//     }

//     let longestString = strings[0]

//     for(let i = 0; i < strings.length; i++) {
//         if (strings[i].length > longestString.length) {
//             longestString = strings[i]   
//         } 
//     }
//     return longestString
// }

// console.log(longestString(['one', 'two', 'three']));


