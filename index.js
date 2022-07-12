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