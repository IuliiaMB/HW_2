// 1.Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// const divEl = document.querySelector('.numbers');

// for(let i = 100; i >= 50; i -= 10) {
//     const textEl = document.createElement('p');
//     divEl.append(textEl);
//     textEl.textContent = i
// }




// 2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом stringscontainer. Строки взять произвольные.

// const stringsArray = ["JavaScript", "CSS", "HTML", "Frontend"];

// const divEl = document.querySelector('.stringscontainer')

// for(let i = 0; i < stringsArray.length; i++) {
//     const textEl = document.createElement('p');
//     divEl.append(textEl);
//     textEl.textContent = stringsArray[i]
// }




// 3. Написать цикл, который проходится по массиву с объектами - у объектов свойства firstname, lastname и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом userscontainer.

// let users = [
//     {
//         firstname: "Georgis",
//         lastname: "Bugday",
//         age: 35
//     },
//     {
//         firstname: "Iuliia",
//         lastname: "Mitkevych-Borsch",
//         age: 25
//     },
//     {
//         firstname: "David",
//         lastname: "Bugday",
//         age: 16
//     }
// ]

// const divContainer = document.querySelector('.userscontainer')

// users.forEach(element => {
//     let { firstname, lastname, age } = element;
//     if (age >= 18) {
//         const userCard = document.createElement('div')
//         userCard.textContent = `Vorname: ${firstname}, Name: ${lastname} und Geburtsjahr: ${age} `
//         divContainer.append(userCard)
//     }  
// })

