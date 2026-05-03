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

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
  return -1;
}
};

console.log(yearsUntilRetirement(2005, "Hamid"));
console.log(yearsUntilRetirement(1950, "Bob"));

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 490);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log(`No team wins...`);
}
};

checkWinner(scoreDolphins, scoreKoalas);

(9, 18, 14, 10, 9, 20);
const num = (9 + 9 + 10 + 14 + 18 + 20) / 6;
console.log(num);



const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(40, 50, 60));

const scoreDolphins = calcAverage(200, 35, 45);
const scoreKoalas = calcAverage(350, 200, 15);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
*/

const friend1 = "Michael";
const friend2 = "Steven";
const friend13 = "Peter";

const friends = ["Michael", "Steven", "Peter", "Hamid"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
//friends = ["Bob", "Alice"]; it will be an error like this

const Jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];

console.log(Jonas);
// console.log(Jonas.length);

//Exersize
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
