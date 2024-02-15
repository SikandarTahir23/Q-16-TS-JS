"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
let guestArr = ["Tabraiz", "Hasham", "Umair", "Waseem"];
let canNotAttend = "Hasham";
// • Add one new guest to the beginning of your array.
let newGuest = "Afzal";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((item) => (console.log(`Dear ${item}, I Found a Bigger Dinner Table`)));
// • Add one new guest to the middle of your array.
let guestBegin = "Moiz";
guestArr.unshift(guestBegin);
console.log(guestArr);
let middleGuest = "Tahir";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
// • Use append() to add one new guest to the end of your list.
guestArr.push("Asad");
console.log(guestArr);
// • Print a new set of invitation messages, one for each person in your list.
guestArr.map((item) => (console.log(`Dear ${item}, You Are Cordinally Invited to a Dinner`)));
