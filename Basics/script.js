'use strict';

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = false;
//console.log("Drivers Mode: ${'hasDriverLicense'}")

//var hasDriverLicense = true;
console.log(`Drivers Mode: ${hasDriverLicense}`);



function addByDeclaration(a, b) {
    return a + b;
}
console.log("Add DataByDeclaration: " + addByDeclaration(1, 2));


const multiplybyExpression = function (a, b) {
    return a * b;
}
console.log("Add DataByExpression: " + multiplybyExpression(1, 3));

const addDataByArrow = (a, b) => {
    return a + b;
}
var finalValue = addDataByArrow(1, 5);
console.log("Add by Arrow method: " + finalValue);



function fruitProcesson(apples, oranges) {
    const juice = ` Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}


function cutFruitPieces(fruit) {
    return fruit * 4;
}


/* Write your code below. Good luck! 🙂 */

/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

//mark.calcBMI();
//john.calcBMI();

console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI cls
    (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

let bills = [10, 210, 128, 231, 156.1, 214, 89, 451, 322, 12];

let tips = [];
let totals = [];

for (let i = 0; i < 10; i++) {
    let tip = calcTip(bills[i]);
    tips[i] = tip;
    totals[i] = bills[i] + tip;
}

console.log(tips);
console.log(totals);