let money = 200000;
let income = "фриланс";
let addExpenses = "интернет, такси, коммуналка";
let deposit = true;
let mission = 990000;
let period = 5;

let budgetDay = money / 30;

console.log(budgetDay);

money = +prompt("Ваш месячный доход?");
addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
deposit = confirm("Есть ли у вас депозит в банке?");

expenses1 = prompt("Введите обязательную статью расходов?");
amount1 = Number(prompt("Во сколько это обойдется?"));
expenses2 = prompt("Введите обязательную статью расходов?");
amount2 = parseInt(prompt("Во сколько это обойдется?"));

let budgetMonth = money - (amount1 + amount2);
console.log(budgetMonth);

period = Math.ceil(mission / budgetMonth);
console.log(period);

budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);

if (budgetDay > 1200) {
  console.log("У вас высокий уровень дохода");
} else if (600 < budgetDay <= 1200) {
  console.log("У вас средний уровень дохода");
} else if (0 <= budgetDay <= 600) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay < 0) {
  console.log("Что то пошло не так");
}

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log(
  "Период равен",
  period,
  "месяцев \n Цель заработать",
  mission,
  "тенге"
);

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(", "));
