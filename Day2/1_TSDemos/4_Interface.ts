// const area = function (rect: { h: number, w?: number }) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1 = { h: 20, w: 10 };
// console.log(area(s1));

// let s2 = { h: 20, w: 10, d: 30 };
// console.log(area(s2));

// let s3 = { h: 20, d: 30 };
// console.log(area(s3));

// ------------------------------------------------------ Type Alias
// type Shape = {
//     h: number,
//     w?: number
// };

// const area = function (rect: Shape) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1: Shape = { h: 20, w: 10 };
// console.log(area(s1));

// // let s2: Shape = { h: 20, w: 10, d: 30 };
// // console.log(area(s2));

// // let s3: Shape = { h: 20, d: 30 };
// // console.log(area(s3));

// ------------------------------------------------------ Interface
// interface IShape {
//     h: number;
//     w?: number;
// }

// const area = function (rect: IShape) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1: IShape = { h: 20, w: 10 };
// console.log(area(s1));

// // let s2: IShape = { h: 20, w: 10, d: 30 };
// // console.log(area(s2));

// // let s3: IShape = { h: 20, d: 30 };
// // console.log(area(s3));

// ------------------------------------------------------ Interface

// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// let p1: IPerson = {
//     name: "Abhijeet",
//     age: 39,
//     greet: function (m) {
//         return "Hello";
//     }
// }

// let p2: IPerson = {
//     name: "Ramakant",
//     age: 40,
//     greet: function (m) {
//         return "Hola";
//     }
// };

// console.log(p1.greet("Hi"));
// console.log(p2.greet("Hi"));

// type Person = {
//     name: string,
//     age: number,
//     greet(message: string): string
// }

// let p3: Person = {
//     name: "Subodh",
//     age: 50,
//     greet: function (m) {
//         return "Hey";
//     }
// };

// console.log(p3.greet("Hi"));


// -----------------------------------------------------

// Error: Duplicate identifier 'IShape'
// type IShape = {
//     height: number
// };

// type IShape = {
//     width: number
// };

// Interface Merging
// interface IShape {
//     height: number;
// };

// interface IShape {
//     width: number;
// };

// let s1: IShape = { height: 20, width: 10 };

// --------------------------------------------------------- Type Alias and Interface Usage

// interface ICustomer {
//     doShopping(): string;
// }

// interface IEmployee {
//     doWork(): string;
// }

// // Union (TypeGuards)
// // var person1: ICustomer | IEmployee;

// type ICustOrEmpl = ICustomer | IEmployee;
// var person1: ICustOrEmpl = {
//     doShopping(): string {
//         return "Shopping Online";
//     }
// }

// // Intersection
// type ICustAndIEmpl = ICustomer & IEmployee;
// var person2: ICustAndIEmpl = {
//     doShopping(): string {
//         return "Shopping Online";
//     },

//     doWork(): string {
//         return "Learning TypeScript";
//     }
// }