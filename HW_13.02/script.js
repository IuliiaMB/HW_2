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

    const productContainer = document.getElementBy("productContainer");
    
    getProductByID(productId, (product) => {
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
        ratingEl.innerText = product.rating;
        ratingEl.prepend(ratingBoldEl);
        productContainer.append(ratingEl);

        const categoryEl = document.createElement("p");
        const categoryBoldEl = document.createElement("b");
        categoryBoldEl.innerText = "Price: ";
        categoryEl.innerText = product.category;
        categoryEl.prepend(categoryBoldEl);
        productContainer.append(categoryEl);

    });
});