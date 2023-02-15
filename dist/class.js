"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const damodar = new Person(1, 'Damodar');
console.log(damodar.register());
