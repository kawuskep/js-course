let money = 200000;
let income = 'фриланс';
let addExpenses = 'интернет, такси, коммуналка';
let deposit = true;
let mission = 990000;
let period = 5;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен', period, 'месяцев \n Цель заработать', mission, 'тенге');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

let budgetDay = money / 30;

console.log(budgetDay);
