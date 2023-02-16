"use strict";
//Creating sub class Employee from class Person declared in class.ts
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const newEmployee = new Employee(2, 'Damo', 'Software developer');
console.log(newEmployee.register());
