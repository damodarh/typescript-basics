"use strict";
//generics allow code reuse. We can create different types of arrays using below function by prividing the generic T.
//adding any different type of value to the numArray for instance will result in an error.
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
console.log(numArray);
let strArray = getArray(['a', 'b', 'c', 'd']);
console.log(strArray);
