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

// Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// Add elements
friends.push("Jay"); // Add to last
console.log(friends);

friends.unshift("John"); // Add to first
console.log(friends);

// Remove elements
friends.pop(); // Remove last
console.log(friends);

friends.shift(); // Remove first
console.log(friends);

console.log(friends.indexOf("Steven")); // Show index of
console.log(friends.includes("Steven")); // Show with ture or false

console.log(friends.indexOf("Bob"));
console.log(friends.includes("Bob"));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) =>
  //   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
// Objects
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
// Dot vs. Bracket notation objects
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);
console.log(jonas.lastName); // Dot notation
console.log(jonas["lastName"]); // Bracket notation

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends",
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends",
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`,
);

// Object methods
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
    //   return 2037 - birthYear;
    // },
    
    // calcAge: function () {
      //   console.log(this);
  //   return 2037 - this.birthYear;
  // },
  
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  
  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummery());
// Challenge
// Jonas is a 46-years old teacher, and he has a driver's license

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}`,
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}`,
  );
}
*/
// The for loop

// console.log("Lifting the weights repetition 1 🏋️‍♂️");
// console.log("Lifting the weights repetition 2 🏋️‍♂️");
// console.log("Lifting the weights repetition 3 🏋️‍♂️");
// console.log("Lifting the weights repetition 4 🏋️‍♂️");
// console.log("Lifting the weights repetition 5 🏋️‍♂️");
// console.log("Lifting the weights repetition 6 🏋️‍♂️");
// console.log("Lifting the weights repetition 7 🏋️‍♂️");
// console.log("Lifting the weights repetition 8 🏋️‍♂️");
// console.log("Lifting the weights repetition 9 🏋️‍♂️");
// console.log("Lifting the weights repetition 10 🏋️‍♂️");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting the weights repetition ${rep} 🏋️‍♂️`);
}
