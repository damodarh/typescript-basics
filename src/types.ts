//number
let id: number = 1;
//string
let developer: string = 'Damodar Hegde';
//boolean
let isLearning: boolean = true;

//Allows us to modify data stored by variable later
let x: any = 'Hello';

x = true;

//Array
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [true, 1, 'test'];

//Tuple - order in which items can be added is defined during declaration itself
let person: [number, string, boolean] = [1, 'John', true];

//Tuple Array
let employee: [number, string][] = [
  [1, 'John'],
  [2, 'Joe'],
  [3, 'Jane'],
];

//Union
let unionExample: string | number = 22;

//Enum = define a set of named constants
enum Direction1 {
  Up, //assign a different number here to start from that index eg: Up=1, we can set something like Up='Up' as well
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);

//Objects
const user: { id: number; name: string } = {
  id: 1,
  name: 'Damodar',
};

/* We can also declare a type and use that for subsequen declarations.
    
type User = { id: number; name: string };
const user: User;
*/

//type assertion
let cid: any = 1;

/**There are two ways to perform type assertion:
 * 1. Using angle brackets
 * 2. using the as keyword
 * Below are two ways to do that;
 */
let customerId = <number>cid;
let customerIdUsingAs = cid as number;