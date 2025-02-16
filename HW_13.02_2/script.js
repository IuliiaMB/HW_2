// 1 уровень сложности: https://i.imgur.com/Ip9BsRu.png

// 1.Создать поле ввода (туда надо ввести id продукта) и кнопку сверху
// 2.Создать функцию getProductByID, которая первым параметром получает id,
// вторым параметром получает callback функцию, которую вызывает на ответе 
// запроса по адресу https://dummyjson.com/products/${product id} (https://dummyjson.com/products/2)
// 3.При клике на кнопку забрать из поля ввода id продукта и вызвать функцию getProductByID
// 4.Внутри callback функции, при вызове getProductByID, создать карточку продукта по такому шаблону 
// (размеры и цвет выберите сами) из javascript 
// 5.Каждый раз при клике на кнопку "показать" вместо старого продукта показать новый
// *Rating AVG - это среднее арифметическое значение всех rating в массиве reviews у объекта продукта 

function getProductByID(id, callback) {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(function (responce) {
            return responce.json()
        })
        .then(function (data) {
            let avgRating = "Нет отзывов";
            if (data.reviews && data.reviews.length > 0) {
                let totalRating = data.reviews.reduce((sum, review) => sum + review.rating, 0);
                avgRating = (totalRating / data.reviews.length).toFixed(1);
            }

            data.avgRating = avgRating;

            callback(data)
        })
        .catch(function (error) {
            console.log(error);
        })
}

const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", () => {
    const productId = document.querySelector(".inp").value;
    if (!productId || isNaN(productId) || Number(productId) <= 0) {
        return alert("Введите корректный ID продукта!");
    }

    
    getProductByID(productId, (product) => {
        const productContainer = document.getElementById("productContainer");
        productContainer.innerHTML = "";
        const imgEl = document.createElement("img");
        imgEl.setAttribute("alt", product.title);
        imgEl.setAttribute("src", product.thumbnail);
        imgEl.classList.add("imgCard");
        productContainer.append(imgEl);

        const h3El = document.createElement("h3");
        h3El.innerText = product.title;
        productContainer.append(h3El);

        const stockEl = document.createElement("p");
        const boldEl = document.createElement("b");
        boldEl.innerText = "Stock: ";
        stockEl.innerText = product.stock;
        stockEl.prepend(boldEl);
        productContainer.append(stockEl);

        const priceEl = document.createElement("p");
        const priceBoldEl = document.createElement("b");
        priceBoldEl.innerText = "Price: $ ";
        priceEl.innerText = product.price;
        priceEl.prepend(priceBoldEl);
        productContainer.append(priceEl);

        const ratingEl = document.createElement("p");
        const ratingBoldEl = document.createElement("b");
        ratingBoldEl.innerText = "Rating AVG: ";
        ratingEl.innerText = product.avgRating;
        ratingEl.prepend(ratingBoldEl);
        productContainer.append(ratingEl);

        const categoryEl = document.createElement("p");
        const categoryBoldEl = document.createElement("b");
        categoryBoldEl.innerText = "Category: ";
        categoryEl.innerText = product.category;
        categoryEl.prepend(categoryBoldEl);
        productContainer.append(categoryEl);

    });
});


// let avgRating = "Нет отзывов";
// ✅ Создаём переменную avgRating и присваиваем ей начальное значение "Нет отзывов". Это значение используется, если у продукта нет отзывов.

// if (data.reviews && data.reviews.length > 0) {
//     ✅ Здесь проверяем существует ли массив reviews у объекта data и содержит ли он хотя бы один отзыв.
    
//     data.reviews → проверяем, есть ли вообще свойство reviews у объекта data.
//     data.reviews.length > 0 → проверяем, есть ли в массиве reviews хотя бы один элемент.
//     💡 Если reviews нет или он пустой, код в if не выполняется, и avgRating останется "Нет отзывов".

// let totalRating = data.reviews.reduce((sum, review) => sum + review.rating, 0);
// ✅ Здесь используем метод .reduce(), чтобы суммировать все оценки (rating) в массиве reviews.

// sum → аккумулятор (сначала равен 0, так как initialValue = 0).
// review.rating → текущее значение (rating из отзыва).
// sum + review.rating → суммируем значения.
// В конце reduce вернёт общую сумму всех rating.

// 3️⃣ Вычисление среднего рейтинга

// avgRating = (totalRating / data.reviews.length).toFixed(1);
// ✅ После получения общей суммы всех оценок, делим её на количество отзывов data.reviews.length.
// ✅ Метод .toFixed(1) округляет результат до одного знака после запятой.

// 4️⃣ Сохранение результата в объекте data

// data.avgRating = avgRating;
// ✅ Записываем вычисленное значение avgRating в объект data, чтобы его можно было использовать дальше.


// const productId = document.querySelector(".inp").value;
// ✅ Находим введённый ID продукта

// document.querySelector(".inp") → ищем элемент <input> с классом "inp".
// .value → получаем значение, введённое пользователем в поле ввода.
// productId теперь содержит текстовое значение ID (например, "5").


// const productId = document.querySelector(".inp").value;
// ✅ Находим введённый ID продукта

// document.querySelector(".inp") → ищем элемент <input> с классом "inp".
// .value → получаем значение, введённое пользователем в поле ввода.
// productId теперь содержит текстовое значение ID (например, "5").

// if (!productId || isNaN(productId) || Number(productId) <= 0) {
// ✅ Проверяем, корректно ли введён ID продукта
// Это условие состоит из трёх частей:

// 1️⃣ !productId

// Проверяет, пустое ли поле.
// ! — логическое отрицание, то есть если productId пустое ("") или null, условие выполнится.
// 2️⃣ isNaN(productId)

// isNaN(value) проверяет, является ли значение нечисловым (NaN).
// Если в productId введён текст (например, "abc"), isNaN("abc") вернёт true, и код выполнится.
// 3️⃣ Number(productId) <= 0

// Преобразует productId в число (Number(productId)) и проверяет, не является ли оно нулём или отрицательным.
// Например, "-5" и "0" не подходят.