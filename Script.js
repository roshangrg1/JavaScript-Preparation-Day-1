

// Array
let arr= ["roshan", true, "usa"] // index always starts from 0.
console.log(arr[2]);// checking values at given index.

// array index start at 0.


let name="rohan";
let age= "22";
console.log("Myname is "+name + "my age is"+age) ; // to display output using variable and concatinate.

// most loved ways (Interpolation, tempalte literal, template string.)
console.log(`My name is ${name} , My age is ${age}`); 

// Oprator.

// Arithmetic operators perform arithmetic on numbers (e.g. +, -, *, /, %).
// Comparison operators compare two values (e.g. ==, ===, >, <, >=, <=).
// Logical operators perform boolean logic (e.g. &&, ||, !).
// Assignment operators assign a value to a variable (e.g. =, +=, -=, *=, /=, %=).
// Ternary operator is a shorthand way of writing an if statement (e.g. condition ? true : false)

// 1.Arithmetic Operator.  (e.g. +, -, *, /, %)
let val1=10;
let val2= 20;
console.log(val2-val1);


let a= 5;
let b= 8;
let ab= ++a;  // prefix - it replace value with +1 
let abc= b++;  //postfix
console.log(ab);
console.log(abc);

// 2.Relational operator/comparison operator.
// (e.g. ==, ===, >, <, >=, <=)

let rate = 5;
if (rate ===8){
    console.log('Excellence');
}
else if(rate==="5"){
    console.log('very good');
}
else {
    console.log("poor");
}

// Note: == check for comparison (same number or string are equal) === for comparison with same type.

// 3.Logical/ Bitwise. operator. (e.g. &&, ||, !).

let mobile=true;
laptop=false;

if (mobile==true && laptop==true){
    console.log("Welcome");
}
else if (mobile==true || laptop==true){
    console.log("Mobile or laptop is either misssing")
}
else{
    console.log("first buy gagets");
}

// 4. Terniary Operator  (e.g. condition ? true : false)
let loggedIn= false;
 loggedIn ? console.log("HomePage") :console.log("sign up first");;

//  Assignment operator   (e.g. condition ? true : false)

// let a=5;
// a += 1  // output 6
// a -=  1  // Output 4








