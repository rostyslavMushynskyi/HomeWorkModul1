"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const result = prompt("Введіть свій пароль");

if (result === null) {
  message = "Скасовано користувачем!";
  alert(message);
} else if (result !== ADMIN_PASSWORD) {
  message = "Доступ заборонений, невірний пароль!";
  alert(message);
} else {
  message = "Ласкаво просимо!";
  alert(message);
}
