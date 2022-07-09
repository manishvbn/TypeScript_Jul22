// // Function Declaration Syntax - Is Hoisted

// function hello1() {
//     console.log("Hello World!");
// }

// hello1();

// // Function Expression Syntax - Is Not Hoisted

// const hello2 = function () {
//     console.log("Hello World 2!");
// }

// hello2();

// let hello3: () => void;

// hello3 = function () {
//     console.log("Hello World 3!");
// };

// hello3();

// let fn: (a: number, b: number) => number;
// // fn = function (x: number, y: number) {
// //     return x + y;
// // }

// fn = function (x, y) {
//     return x + y;
// }

// // Lambda Syntax

// const hello4 = () => {
//     console.log("Hello World 4!");
// }

// hello4();

// let hello5: () => void;

// hello5 = () => {
//     console.log("Hello World 5!");
// }

// hello5();

// // Multiline Lambda
// fn = (x, y) => { return x + y; }

// // Singleline Lambda
// fn = (x, y) => x + y;

// -----------------------------------------------------

// function hello1() {
//     console.log("Hello World!");
// }

// var r = hello1();
// console.log(r);
// console.log(typeof r);

// var r1: undefined;
// // r1 = 10;                // Error: Type '10' is not assignable to type 'undefined'.
// r1 = undefined;
// console.log(r1);

// var r2: void;
// // r2 = 10;                // Error: Type number is not assignable to type 'void'.
// r2 = void 0;
// r2 = undefined;
// console.log(r2);

// var r3: never;
// r3 = 10;                // Error: Type number is not assignable to type 'never'.
// r3 = void 0;            // Error: Type undefined is not assignable to type 'never'.
// r3 = undefined;         // Error: Type undefined is not assignable to type 'never'.
// console.log(r3);

// var value: any;
// console.log(value.trim());

// var r4: unknown;
// console.log(r4.trim());

// TypeScript - never / unknown / any
// JavaScript - undefined / void

// ------------------------------------------

// function iterate(): never {
//     let i = 1;
//     while (true) {
//         console.log(++i);
//     }
// }

// iterate();
// console.log("Last Line in the file....");

// ------------------------------------------

function add1(x: number, y: number): number {
    return x + y;
}

const add2 = function (x: number, y: number): number {
    return x + y;
}

let add3: (a: number, b: number) => number;
add3 = function (x: number, y: number): number {
    return x + y;
}

let add4: (a: number, b: number) => number;
add4 = function (x, y) {
    return x + y;
}

// Lambdas (Multiline Lambda)
let add5: (a: number, b: number) => number;
add5 = (x, y) => {
    return x + y;
}

// Lambdas (Singleline Lambda)
let add6: (a: number, b: number) => number;
add6 = (x, y) => x + y;

console.log(add1(2, 3));
console.log(add2(2, 3));
console.log(add3(2, 3));
console.log(add4(2, 3));
console.log(add5(2, 3));
console.log(add6(2, 3));