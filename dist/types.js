"use strict";
//number
let id = 1;
//string
let developer = 'Damodar Hegde';
//boolean
let isLearning = true;
//Allows us to modify data stored by variable later
let x = 'Hello';
x = true;
//Array
let ids = [1, 2, 3, 4, 5];
let arr = [true, 1, 'test'];
//Tuple - order in which items can be added is defined during declaration itself
let person = [1, 'John', true];
//Tuple Array
let employee = [
    [1, 'John'],
    [2, 'Joe'],
    [3, 'Jane'],
];
//Union
let unionExample = 22;
//Enum = define a set of named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
//Objects
const user = {
    id: 1,
    name: 'Damodar',
};
/* We can also declare a type and use that for subsequen declarations.
    
type User = { id: number; name: string };
const user: User;
*/
//type assertion
let cid = 1;
/**There are two ways to perform type assertion:
 * 1. Using angle brackets
 * 2. using the as keyword
 * Below are two ways to do that;
 */
let customerId = cid;
let customerIdUsingAs = cid;
