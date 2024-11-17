var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var sName;
sName = "some name";
var age;
age = 21;
var isInstructor;
isInstructor = false;
// type inference
// need not declare type a typr is automatically detected
var subjects;
subjects = ["english"];
var person;
person = {
    name: "ahmed",
    age: 22
};
// union type
var isPerson;
isPerson = true;
var personA = {
    name: "happy",
    age: 20
};
var personArr = [{ name: "fugi", age: 23 }];
// functions and types
function sum(a, b) {
    return a + b;
}
function log(value) {
    console.log(value);
}
// Generics
function insertAtBeggining(array, value) {
    return __spreadArray([value], array, true);
}
var updatedArr = insertAtBeggining([1, 2, 3, 4], 0);
updatedArr[0].split(""); // this doesnt give error since it assumes updatedArr to be type any[] therefore losing features of typescript
// ---------------------------------------------------
function insertAtBeggining2(array, value) {
    return __spreadArray([value], array, true);
}
var updatedArr2 = insertAtBeggining2([1, 2, 3, 4], 0);
// updatedArr2[0].split("") --- this gives error
// generics allow flexibility and type safety
