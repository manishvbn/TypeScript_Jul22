var d1: number;
d1 = 10;

var d2: string;
d2 = "Manish";

var d3: number | string;
d3 = 10;
d3 = "abc";
// d3 = true;                      // Error: Type 'boolean' is not assignable to type 'string | number'

var d4: number | string | boolean;
d4 = 10;
d4 = "abc";
d4 = true;