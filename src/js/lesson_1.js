let money = prompt("Ваш бюджет на месяц?", "10k р."),
  time = prompt("Введите дату в формате YYYY-MM-DD", "2018-11-15"),
  fstQuest = +prompt("Введите обязательную статью расходов в этом месяце",
    "8k р"),
  secQuest = +prompt("Во сколько обойдется?", "18000"),
  fstQuest2 = +prompt("Введите обязательную статью расходов в этом месяце",
    "9k р"),
  secQuest2 = +prompt("Во сколько обойдется?", "19000");

let appData = {
  money: money, //бюджет
  timeData: time, //данные времени
  expenses: {
    fstQuest: secQuest,
    fstQuest2: secQuest2,
  }, //обязательные расходы
  optionalExpenses: {}, //необязательные расходы()
  income: [], //доп. доходом(массив)
  saving: false //свойство
};
appData.expenses[fstQuest] = fstQuest;
appData.expenses.secQuest = secQuest;
appData.expenses[fstQuest2] = fstQuest2;
appData.expenses.secQuest2 = secQuest2;


document.write("дневной бюджет = " + secQuest / 30 + " рублей");

console.log("первый ответ" + appData.expenses[fstQuest]);
console.log("второй ответ" + appData.expenses.secQuest + "<br>");
console.log("первый ответ" + appData.expenses[fstQuest2]);
console.log("второй ответ" + appData.expenses.secQuest2);
console.log("объект" + appData.expenses);
