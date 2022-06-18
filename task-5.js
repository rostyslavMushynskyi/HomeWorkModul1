"use strict";
const China = 100;
const Chile = 250;
const Australia = 170;
const India = 80;
const Jamaica = 120;

const country = prompt("Введіть назву країни в, яку бажаєте відправити товар");
const countryUpper = country.toUpperCase();
switch (countryUpper) {
  case "КИТАЙ":
    alert(`Доставка в ${countryUpper} буде коштувати ${China} кредитів`);
    break;
  case "ЧИЛІ":
    alert(`Доставка в ${countryUpper} буде коштувати ${Chile} кредитів`);
    break;
  case "АВСТРАЛІЯ":
    alert(`Доставка в ${countryUpper} буде коштувати ${Australia} кредитів`);
    break;
  case "ІНДІЯ":
    alert(`Доставка в ${countryUpper} буде коштувати ${India} кредитів`);
    break;
  case "ЯМАЙКА":
    alert(`Доставка в ${countryUpper} буде коштувати ${Jamaica} кредитів`);
    break;
  default:
    alert("У вашій країні доставка недоступна");
    break;
}
