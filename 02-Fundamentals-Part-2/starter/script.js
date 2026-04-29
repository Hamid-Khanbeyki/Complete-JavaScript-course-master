"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

const interface = "Audio";
const private = 534;
const if = 'You can enter';

function logger() {
  console.log("My name is Hamid");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

// function declaration
const age1 = calcAge1(2005);

function calcAge1(birthYear) {
  return 2026 - birthYear;
}

// function expreesion
const calcAge2 = function (birthYear) {
  return 2026 - birthYear;
};

const age2 = calcAge2(Number(prompt("Please enter your birthyear")));
console.log(age1, age2);
*/

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2026 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2005, "Hamid"));
