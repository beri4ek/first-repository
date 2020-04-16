var money = prompt('Ваш бюджет на месяц');

var time = prompt('Введите дату в формате YYYY-MM-DD');

var appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

var expense = prompt('Введите обязательную статью расходов в этом месяце');

var expenseSum = prompt('Во сколько обойдется?');

appData.expenses = {
    [expense]: expenseSum
};

alert(appData.budjet - appData.expenses[expense]);

console.log(appData);