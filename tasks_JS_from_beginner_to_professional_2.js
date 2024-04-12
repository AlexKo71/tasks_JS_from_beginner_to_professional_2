// TASK 6-1

function adder (num1, num2){
    return num1 + num2;
}
console.log(adder(2,8));

// TASK 6-2

const description = ["super", "wonderful", "bad", "angry", "careful"];

function yourName(){
    const question = prompt("What's your name? ");
    const desc = description[Math.round(Math.random() * description.length)];
    console.log(question, "is", desc);
}
yourName();

// TASK 6-3

let number01 = prompt("input number one");
let number02 = prompt("input number two");
let mathSigns = prompt("is add or subtract?");
let rezult;
function operat(number1,number2,mathSign){
    if (mathSign === "subtract" || mathSign === "-"){
        rezult = Number(number1) - Number(number2);
     } else if (mathSign === "add" || mathSign === "+" || mathSign === ""){
        rezult = Number(number1) + Number(number2);
     } else {
         console.log("You entered the character incorrectly!")
     }
     return console.log(rezult);
}
operat(number01,number02,mathSigns);

// TASK 6-4

let numbers = [];
let num1;
let num2;
function sumTwoNumbers (n1,n2){
    return n1 + n2;

}
for (let i = 0; i < 10; i++) {
    num1 = i * 5;
    num2 = i ** 2;
   numbers.push (sumTwoNumbers (num1,num2));
}
console.log (numbers);

// TASK 6-5

let num = 1000;

(function () {
        num = 2000;
        console.log(num);
    })();

let result = (function () {
    num = 3000;
    return num;
})();
console.log("num = ", result);
console.log(num);

(function (num) {
    return console.log("num1 = ", num);
})(3000);

// TASK 6-6

function factorial (x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial (--x);
    }
}
let y = 8;
console.log(factorial(y));

// TASK 6-7

let start = 10;
function countdown(x) {
    console.log(x);
}
for (start; start >= 1; start--){
    countdown (start);
}

// TASK 6-8

let test1 = function (x) {
    console.log(x);
};
test1 ("Hellow");
function test2 (x){
    console.log(x);
};
test2 ("Hellow, my friend")

// TASK «Создание рекурсивной функции»

let startNumber = -5;

function tillTen(x) {
  if (x === 11) {
    return;
  } else {
    console.log(x);
    x++;
    tillTen(x);
  }
}

tillTen(startNumber);

// TASK «Использование функции setTimeout()»

let printOne = () => console.log("One");
let printTwo = () => console.log("Two");
function printThree () {
    console.log("Three");
    printOne();
    printTwo();
};
function printFour () {
    console.log("Four");
    setTimeout(printThree,2000);
    setTimeout(printOne,4000);
}

printFour();

