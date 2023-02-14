/**Interfaces are similar to custom types.
 * An interface cannot be used with primitives.
 * It is suitable when we are creating an object
 * */

interface UserInterface {
  readonly id: number; // we can use the readonly keyword to prevent overwriting the value of the field later during the program.
  name: string;
  age?: number; // this denotes an optional field. When creating an object of UserInterface, we need not specify the age parameter.
}

const user1 = {
  id: 1,
  name: 'Damodar',
};

//A type can be used with primitives and unions

type Point = number | string;
const p1: Point = 1;

user1.id = 4;

//Interfaces + functions

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
