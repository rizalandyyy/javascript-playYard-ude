function ConstructorFunc(param1, param2) {
    this.firstName = param1;
    this.lastName = param2;
    this.sayHello = function() {
        console.log("Hello " + this.firstName + " " + this.lastName);
    }
}

const obj = new ConstructorFunc('John', 'Doe');
obj.sayHello();
console.log(obj.firstName);

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.sayHello = function(name) {

        }
    }
}
const eko = new Person();

class Employee {
    constructor(name) {
        this.name = name;
    }

    sayHello(name) {
        console.info(`Hello ${name}`);
    }
}

class Manager extends Employee {
    constructor(name) {
        this.name = name;
    }

    sayHello(name) {
        console.info(`Hello ${name}`);
    }
}

class Shape {
    paint() {
        console.log('paint');
    }
}

class Circle extends Shape {
    paint() {
        console.log('paint circle');
    }
}

const circle = new Circle();
circle.paint();

class getterSetter {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

const eko123 = new Person("Eko", "Wibowo");
console.log(eko.fullName);

class Customer {
    firstName;
    lastName;
    balance = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {

    }
}

const rizal = new Customer("Eko", "Wibowo");
console.info(rizal)