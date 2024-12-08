console.log("---------------------------------")
console.log("Question 1")
console.log("---------------------------------")


var date = new Date();
console.log(date);


console.log("---------------------------------")
console.log("Question 2")
console.log("---------------------------------")


var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = monthNames[date.getMonth()];


alert("Current Month is " + currentMonth);


console.log("---------------------------------")
console.log("Question 3")
console.log("---------------------------------")


var day = date.toString().slice(0, 3);
alert("Today is " + day);


console.log("---------------------------------")
console.log("Question 4")
console.log("---------------------------------")


if(day == "Sat" || day == "Sun"){
    alert("It's Fun Day!")
}else{
    alert("It's Work Day!")
}


console.log("---------------------------------")
console.log("Question 5")
console.log("---------------------------------")


var todayDate = date.toString().slice(8,10)

if(todayDate < 16){
    console.log("First Fifteen ays of the month.")
}else{
    console.log("Last Fifteen ays of the month.")
}


console.log("---------------------------------")
console.log("Question 6")
console.log("---------------------------------")

console.log("Current Date: " + date);
console.log("Elapsed milliseconds since January 1, 1970: " + date.getTime())
console.log("Elapsed minutes since January 1, 1970: " + date.getTime() / (1000 * 60))


console.log("---------------------------------")
console.log("Question 7")
console.log("---------------------------------")


var currentHour = date.getHours() 

if(currentHour < 12){
    alert("It's AM");
}else{
    alert("It's PM");
}


console.log("---------------------------------")
console.log("Question 8")
console.log("---------------------------------")


var laterDate = new Date("Dec 31, 2020");
console.log("Later Date: " + laterDate);


console.log("---------------------------------")
console.log("Question 9")
console.log("---------------------------------")


var thisRamadan = new Date("March 01, 2025");
var Ramadan2015 = new Date("June 18, 2015");

var diffDate = thisRamadan - Ramadan2015;

console.log(diffDate / (1000 * 60 * 60 * 24) + " Days will have passed since Ramadan 2015 in this Ramadan");


console.log("---------------------------------")
console.log("Question 10")
console.log("---------------------------------")


var referenceDate = new Date("Sat December 05, 2015 22:50:16 GMT+0500 (PKT)");
var beginning2025 = new Date ("January 1, 2015");

var diffInSec = referenceDate - beginning2025;

console.log(diffInSec / 1000 + " seconds have passed since the beginning of 2015");


console.log("---------------------------------")
console.log("Question 11")
console.log("---------------------------------")


var currentHours = date.getHours();
console.log("Current Date: " + date);
date.setHours(currentHours - 1);
console.log("1 hour ago it was: " + date);

date.setHours(currentHours);


console.log("---------------------------------")
console.log("Question 12")
console.log("---------------------------------")


var currentYear = date.getFullYear();
console.log("Current Date: " + date);
date.setFullYear(currentYear - 100);
console.log("100 years back, it was: " + date);


console.log("---------------------------------")
console.log("Question 13")
console.log("---------------------------------")


var userAge = Number(prompt("Enter your age: "));
var userBirth = (date.getFullYear() + 100) - userAge; // +100 to reset to current date.
console.log("Your age is: " + userAge)
console.log("Your birth year is: " + userBirth);


console.log("---------------------------------")
console.log("Question 14")
console.log("---------------------------------")


console.log("K-Electric Bill")

var customer = prompt("Enter your name to find you online bill: ");
var kecurrentMonth = monthNames[date.getMonth()];
var numberOfUnits = Math.round(Math.random() * 560) + 40;
var unitCharges = 22.45;
var netAmount = numberOfUnits * unitCharges;
var latePaySurcharge = 540.67;
var grossAmount = netAmount + latePaySurcharge;

console.log("---------------------------------")

console.log("Customer Name: " + customer);
console.log("Month: " + "Rs." + kecurrentMonth);
console.log("Number of Units: " + "Rs." + numberOfUnits);
console.log("Charges per Unit: " + "Rs." + unitCharges);
console.log("Late Pay Surcharge: : " + "Rs." + latePaySurcharge);
console.log("Total Amount to Pay: " + "Rs." + netAmount);
console.log("Total Amount to Pay (After Due Date): " + "Rs." + grossAmount);

console.log("---------------------------------")