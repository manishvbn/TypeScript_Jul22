// TypeGuard Array

var dataArr1: (number | string)[];
dataArr1 = [1, "Manish"];
dataArr1 = ["Manish", 1];
dataArr1 = ["Manish", "Pune"];
dataArr1 = [1, 2, 3, 4, 5];
dataArr1 = ["Manish", 1, "Pune", 411021];

// Tuple - Stores a fixed collection of values of same or varied types, maintaining the sequence
let dataRow: [number, string];
dataRow = [1, "Manish"];
// dataRow = ["Manish", 1];
// dataRow = ["Manish", "Pune"];
// dataRow = [1, 2];
// dataRow = [1, 2, 3, 4, 5];
// dataRow = [1, "Manish", 411021, "Pune"];

// function insert(data: (number | string)[]) {
//     // Code to insert the data as row of a table
// }

// insert(["Manish", 1, "Pune", 411021]);

function insert(data: [number, string]) {
    // Code to insert the data as row of a table
}

insert([1, "Manish"]);