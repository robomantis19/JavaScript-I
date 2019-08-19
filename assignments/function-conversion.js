// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myFunction = () => {
    console.log("Function was invoked!");
};
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = param => {
    return param;
}
console.log(anotherFunction("Example"))
// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (param1, param2) => {
    return param1 + param2;
};
console.log(add(1,2))
// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (param1, param2) =>{
    return param1 - param2;
};

console.log(subtract(1, 2))

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

var array1 = [{key1: 1, key2: 4, key3: 9, key4: 16},
              {key1: 3, key2: 6, key3: 10, key4: 22},
              {key1: 5, key2: 14, key3: 56, key4: 18}];

// pass a function to map
const map1 = array1.map(x => x.key1 * 2);

console.log(map1);

var list = [1,2,3,4];
const map2 = array1.map(function(num){
    return [num.key1 * 4,  num.key2 +2,  num.key3 - 3,  num.key4 /2];
})
console.log(map2);

const map3 = array1.map(function(num){
    return [{key1: num.key1 * 4, key2: num.key2 +2, key3: num.key3 - 3, key4: num.key4 /2}];
})
console.log(map3);