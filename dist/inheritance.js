"use strict";
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const newEmployee = new Employee(2, 'Damo', 'Software developer');
