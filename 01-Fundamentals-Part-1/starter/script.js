/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Reza");

let firstName = "Hamid";
// let 2years = "Ali";
// let first&name = "Ali";
// let function = "Ali";
let name = "Ali";
let Person = "Ali"; // FOR SPECIAL SETIOTATION //

let NUMBER = 22233; // IT'S VALEUA WON'T CHANGE

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(firstName);
console.log(firstName);
console.log(firstName);


true;
let javaScriptIsFun = false;
let car;
console.log(typeof false);
console.log(typeof 20);
console.log(typeof car);
console.log(typeof 50.0);

javaScriptIsFun = "Yes!";
console.log(javaScriptIsFun);

console.log(typeof null);

let firstName;
console.log(firstName);
console.log(typeof firstName);

let age = 21;
age = 22;
console.log(age);

const birthYear = 2005;
console.log(birthYear);

var fullName = "Khanbeyki";
console.log(fullName);
*/

/*

const now = 2026;
const ageHamid = now - 1996;
const ageSarah = now - 2000;
console.log(ageHamid, ageSarah);

console.log(ageHamid * 2, ageSarah / 2, ageSarah ** 2);

const firstName = "Hamid";
const lastName = "Khanbeyki";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x = x + 10
x *= 2; // x = x * 2
x++; // x = x + 1
x--; // x = x -1
console.log(x);

console.log(ageHamid > ageSarah);
console.log(ageSarah >= 18);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const HeightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / HeightJohn ** 2;

console.log(BMIMark, BMIJohn);
console.log(BMIMark > BMIJohn);


const firstName = "Hamid";
const job = "student";
const birthYear = 2005;
const year = 2037;

const hamid =
"I'm " +
firstName +
", a " +
(year - birthYear) +
" years old " +
job +
"!" +
"I'm Hamid agian";

const newHamid = `Hi I'm ${firstName} an ${job}`;

`this is Backticks`;

console.log(hamid);
console.log(newHamid);
console.log(
  "A Text with \n\
  multiple \n\
  lines",
);
console.log(`Hi I'm Hamid
an Software Programmer
with an HP laptop  `);

const age = 18;

if (age >= 18) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2005;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const HeightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / HeightJohn ** 2;

console.log(BMIMark, BMIJohn);
console.log(BMIMark > BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}!`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark}!`);
}

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion
const data = "I am " + 23 + " years old";
const data2 = "23" - "7" - 3;
const data3 = "10" - "2";
console.log(typeof data);
console.log(data);
console.log(typeof data2);
console.log(data2);
console.log(typeof data3);
console.log(data3);

let n = "1" + 1; // '11'
n = n - 1; // '11' > 11 > 11 - 1 = 10
console.log(n);

let b = "10" - "4" - "3" - 2 + "5"; // 10 - 4 = 6   6 - 3 = 3  3 - 2 = 1   1 + "5" = 15
console.log(b);
console.log(typeof b);

// truthy and falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 120;
if (money) {
  console.log(`Don't spend $${money} all!`);
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("Your height is cm !");
} else {
  console.log("Your height is undefind!");
}

// equality operators == vs ===
const age = 18;
if (age === "18") console.log("You just became adult :D (strict) ");
if (age == 18) console.log("You just became adult :D (loose) ");

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 18) {
  console.log(`Cool! ${favourite} is an amzaing number!`);
} else if (favourite === 7) {
  console.log(`${favourite} is also a cool number!`);
} else if (favourite === 9) {
  console.log(`${favourite} is also a cool number!`);
} else {
  console.log("Number is not 18 or 7 or 9");
}

if (favourite !== 18) console.log("Why not 18?");

// logical operators
const hasDriversLicense = false;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("you able to drive");
} else {
  console.log("you can't drive");
}
const scoreDolphins = (97 + 112 + 100) / 3;
const scoreKoalas = (109 + 95 + 95) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy 😭");
}
*/
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan curse structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan curse structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
