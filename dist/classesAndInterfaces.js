"use strict";
class NewPerson {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const dhegde = new NewPerson(2, 'Damodar Hegde');
console.log(dhegde.register());
