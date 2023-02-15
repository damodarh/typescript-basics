interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class NewPerson implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register(): string {
    return `${this.name} is now registered.`;
  }
}

const dhegde = new NewPerson(2, 'Damodar Hegde');

console.log(dhegde.register());
