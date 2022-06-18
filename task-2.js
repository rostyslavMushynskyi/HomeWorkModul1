"use strict";

const total = 100;
const ordered = 50;

if (ordered > total) {
  console.log("На складі недостатньо товарів!");
} else if (ordered <= total) {
  console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
}
