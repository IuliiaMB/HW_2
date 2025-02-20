// Создать карточку продукта. Использовать данные из обьекта product. При клике на кнопку + увеличить значение count на 1. При клике на кнопку - уменьшить значение count на 1. При клике на звездочку изменить значение favorite на противоположное значение и поменять цвет. После каждого изменения сохранить обьект в виде JSON в localStorage

let product = {
    title: "Велосипед",
    img: "ссылка на картинку",
    count: 10, 
    favorite: false
}

const btnPlus = document.querySelector(".btn__plus")
const btnMinus = document.querySelector(".btn__minus")
const spanEl = document.querySelector(".button__result")
const iconEl = document.querySelector(".my-icon")


if (localStorage.getItem("product")) {
  product = JSON.parse(localStorage.getItem("product"))
}

spanEl.innerText = product.count


btnPlus.addEventListener("click", function() {
    product.count++
    spanEl.innerText = product.count
    localStorage.setItem("product", JSON.stringify(product))
})

btnMinus.addEventListener("click", function() {
    product.count--
    spanEl.innerText = product.count
    localStorage.setItem("product", JSON.stringify(product))
})

iconEl.addEventListener("click", function() {
    product.favorite = !product.favorite
    updateStarColor()
    localStorage.setItem("product", JSON.stringify(product))
})

function updateStarColor() {
    if (product.favorite) {
        iconEl.style.color = "gold";
    } else {
        iconEl.style.color = "red";
    }
}
