"use strict";
const credits = 23580;
const pricePerDroid = 3000;

const purchase = prompt("Введіть кількість дронів, яку ви бажаєте купити");

if (purchase === null) {
  console.log("Скасовано користувачем!");
} else {
  let totalPrice = purchase * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостатньо коштів на рахунку!");
  } else {
    const remnant = credits - totalPrice;
    console.log(
      `Ви купили ${purchase} дроїдів, на рахунку залишилося ${remnant} кредитів.`
    );
  }
}
