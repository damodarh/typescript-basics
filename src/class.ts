class Person {
  id: number; // we can additionally declare it as private or public. eg : private id: number
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered.`;
  }
}

const damodar = new Person(1, 'Damodar');
console.log(damodar.register());
