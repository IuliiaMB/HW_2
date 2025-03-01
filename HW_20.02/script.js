// 1. Создайте класс Car с свойствами mark (марка), model (модель) и year (год выпуска). Добавьте метод age(), который вычисляет возраст автомобиля (на основе текущего года).

class Car{
    constructor(mark, model, year){
        this.mark = mark
        this.model = model
        this.year = year
    }

    get age(){
        return new Date().getFullYear() - this.year
    }
}

const car1 = new Car("VW", "T-Roc", 2023)
console.log(car1);
console.log(car1.age);





// 2. Модифицируйте класс Person, добавив новое свойство email и метод change_email(newEmail), который меняет email только если новый email содержит символ "@" и ".", иначе выбрасывает исключение.

class Person{
    constructor(firstname, lastname, email){
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
    }

    change_email(newEmail){
        if (!newEmail.includes("@") || newEmail.includes(".")) {
            throw new Error ("Некорректный email. Адрес должен содержать символы '@' и '.'")
        }
        this.email = newEmail
    }
}

const user = new Person("Georgis", "Bugday", "georgis.bugday@web.de")
user.change_email("georgis.bugdayweb.de")



// 3. Создайте класс Library, который хранит статический массив книг. Каждая книга – это объект с свойствами title и author. Добавьте статический метод addBook(book), который добавляет книгу в библиотеку, и статический метод listBooks(), который выводит список книг в консоль.

class Library{

    static books = []

    constructor(title, author){
        this.title = title
        this.author = author
    }

    static addBook(book){
        Library.books.push(book)

    }

    static listBooks(){
        return Library.books
    }
}

const book1 = new Library("Dr Mercel", "John Müller")
const book2 = new Library("Ernährung", "Jack Müller")

Library.addBook(book1)
Library.addBook(book2)

console.log(Library.listBooks());




// 4. Создайте класс Rectangle с приватными свойствами #width и #height. Реализуйте геттеры и сеттеры для этих свойств, чтобы ширина и высота могли устанавливаться только положительными числами. Добавьте метод area(), который возвращает площадь прямоугольника.

class Rectangle{
    #width
    #height

    constructor(width, height){
        this.#width = width
        this.#height = height
    }

    get width(){
        return this.#width
    }

    set width(value){
        if (value <= 0) {
            throw new Error("Ширина должна быть положительным числом.")
        }
        this.#width = value
    }

    get height(){
        return this.#height
    }

    set height(value){
        if (value <= 0) {
            throw new Error("Высота должна быть положительным числом.")
        }
        this.#height = value
    }

    area() {
        return this.#width * this.#height;
    }
}

const rect = new Rectangle(5, 10)
console.log(rect);
console.log(rect.area());

rect.width = -3
rect.height = -5
console.log(rect.area());




// 5. Создайте класс BankAccount с приватным свойством #balance. Реализуйте методы для депозита и снятия средств. Добавьте геттер для получения текущего баланса. При попытке снять сумму, большую чем баланс, выбрасывайте исключение. Затем создайте статический метод, который ведёт учёт всех созданных счетов (например, массив accounts) и статический метод для расчёта общего баланса всех счетов.


class BankAccount {
    #balance
    static accounts = []

    constructor(initialDeposit) {
        this.#balance = initialDeposit
        BankAccount.accounts.push(this)
    }

    get balance() {
        return this.#balance
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Сумма депозита должна быть положительной")
        }
        this.#balance += amount
    }

    withdraw(amount){
        if (amount <= 0) {
            throw new Error("Сумма снятия должна быть положительной")
        }
        if (amount > this.#balance) {
            throw new Error("Недостаточно средств на счете")
        }
        return this.#balance -= amount
    }

    static totalBalance(){
        return BankAccount.accounts.reduce((total, account) => total + account.#balance, 0)
    }

}

const account1 = new BankAccount(1000)
const account2 = new BankAccount(500)

account1.deposit(300)
account2.deposit(200)

account1.withdraw(200)
account2.withdraw(100)

console.log("Баланс аккаунта 1:", account1.balance);
console.log("Баланс аккаунта 2:", account2.balance);

console.log("Общий баланс всех счетов:", BankAccount.totalBalance());
