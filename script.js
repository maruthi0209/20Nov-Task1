// Question 1
class Book {
    title;
    author;
    isbn;

    constructor (title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    checkOut(title, isbn) {
        console.log(this.title, this.isbn, " has been checked out.");
    }

    returnBook(title, isbn) {
        console.log(this.title, this.isbn, " has been returned.");
    }

    updateTitle(newtitle, author, isbn) {
        this.title = newtitle;
        console.log(this.author, " book with isbn ", this.isbn, " title is changed to ", this.title);
    }
}

var myBook = new Book("Hello", "Maruthi", "12345");
myBook.checkOut("Hello", "12345");
myBook.updateTitle("Javascript", "Maruthi", "12345");
console.log(myBook);

// Question 2
class Product {
    name;
    price;
    category;

    constructor (name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(amount) {
        console.log(amount, " discount is applied over", this.price);
    }

    getPriceAfterDiscount(amount) {
        console.log("the final price is ", this.price - amount);
    }
}

var myProduct = new Product("nike", 500, "shoes");
myProduct.applyDiscount(100);
myProduct.getPriceAfterDiscount(100);
console.log(myProduct);

// Question 3
class BankAccount {
    accountHolderName;
    accountNumber;
    balance;

    constructor(accountHolderName, accountNumber, balance) {
        this.accountHolderName = accountHolderName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount){
        console.log(amount, " is deposited into account of ", this.accountHolderName);
        this.balance = this.balance + amount;
        console.log("final balance is ", this.balance + amount);
    }

    withdraw(amount) {
        console.log(amount, " is withdrawn into account of ", this.accountHolderName);
        this.balance = this.balance - amount;
        console.log("final balance is ", this.balance - amount);
    }

    getBalance() {
        console.log(this.accountNumber , "of ", this.accountHolderName, " has balance of ", this.balance);
    } 
}

var myAccount = new BankAccount("Maruthi", 12345, 500);
myAccount.deposit(200);
myAccount.withdraw(100);
myAccount.getBalance();

console.log(myAccount);

// Question 4
class Vehicle {
    model;
    licencePlate;
    mileage;

    constructor(model, licencePlate, mileage) {
        this.model = model;
        this.licencePlate = licencePlate;
        this.mileage = mileage;
    }

    drive(miles) {
        this.mileage = this.mileage + miles;
        console.log("mileage is now increased to", this.mileage);
    }

    getCurrentMileage() {
        console.log("The current mileage is ", this.mileage);
    }
}

var myVehicle = new Vehicle("M5", "12345", 50);
myVehicle.drive(20);
myVehicle.getCurrentMileage();

console.log(myVehicle);

// Question 5
class Student {
    name;
    grade;

    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    setGrade(newgrade) {
        this.grade = newgrade;
        console.log(this.name, " grade is ", this.grade);
    }

    getGrade() {
        console.log(this.name, " is now having grade ", this.grade);
    }
}

var maruthi = new Student("maruthi", 75);
console.log(maruthi.name, "having grade of ", maruthi.grade);
maruthi.setGrade(90);
maruthi.getGrade();

console.log(maruthi);
