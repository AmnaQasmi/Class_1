"use strict";
// console.log("Hello World");
// let firstName = ("Behroz");
// let lastName = ("Ahmed");
// firstName = ("Zain");
// console.log(`${firstName} ${lastName}`);
// let fullName = ("Behroz Ahmed");
// let age = (23);
// console.log(`Hi myself ${fullName} I'm ${age}`);
// function quote() {
//     console.log('"Wake Up To Reality ! Nothing Ever Goes As Planned In This Accursed World The Longer You Live The More You Realise, That The Only Thing That Truly Exist In this Reality Are Merely Pain Suffering & Futility"');
// };
// quote();
// function quote() {
//     return '"Feel Pain! Accept Pain! & Know Pain! Those Who Dont Know Pain Will Never Understand True Peace"'
// };
// let quote2 = quote();
// console.log(quote2);
// function quote() {
//     let sub = 96 - 55
//     return sub
// };
// let quote2 = quote();
// console.log(quote2);
// let arrowFunction = () => {
//     let quote = '"Feel Pain! Accept Pain! & Know Pain! Those Who Dont Know Pain Will Never Understand True Peace"'
//     return quote
// };
// console.log(arrowFunction());
// let functionA = () => {
//     console.log("Madara");
// };
// let functionB = () => {
//     functionA();
// };
// functionB();
// let functionA = () => {
//    return 3+6
// };
// let sum = functionA();
// console.log(sum);
// let sum = (num1: number, num2: number, name: string = "Behroz") => {
//     console.log(num1 + num2);
//     console.log(name);
// };
// sum(39, 47, "Zain");
/********* Assignment Operator's *********/
// let a: number = 19
// console.log(a = 1);
// console.log(a += 1);
// console.log(a -= 1);
// console.log(a *= 3);
// console.log(a /= 3);
/********* Comparision Operator's *********/
/*** < , > , <= , >= , == , ===  ***/
// let b = 23 
// console.log(b > 19);
// console.log(b < 19);
// console.log(b >= 23);
// console.log(b <= 19);
// console.log(b == 19);
// console.log(b === 19);
/********* Logical Operator's *********/
/*** && AND, || OR, ! NOT ***/
/********* Ternary Operator's OR Conditional Operator's *********/
/*** ? , :  ***/
/*** If Else ***/
// let userName: string = ("Behroz Ahmed");
// let passWord: number = (2000);
// if (userName == "Behroz Ahmed" && passWord == 2000) {
//     console.log(`Welcome Back ${userName}`);
// }
// else {
//     console.log("Login Failed!");
// };
/*** Nested If Else ***/
let userName = ("Behroz Ahmed");
let passWord = ("2000");
let pinCode = ("*357#");
if (userName == "Behroz Ahmed" && passWord == "2000") {
    console.log(`Welcome Back ${userName}`);
    if (pinCode == "*357#") {
        console.log("Enter code");
    }
    else {
        console.log("Invalid Pincode!");
    }
}
else if (userName == "Zain Ahmed" && passWord == "2004") {
    console.log(`Welcome Back ${userName}`);
    if (pinCode == "*246#") {
        console.log("Enter code");
    }
    else {
        console.log("Invalid Pincode!");
    }
}
else {
    console.log("Login Failed!");
}
;
