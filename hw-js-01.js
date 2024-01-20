
var salary = ("10000");

salary = parseFloat(salary);



{
    var bonus = 0.15 * salary;

    var totalIncome = salary + bonus;

    var tax = 0.1 * totalIncome;

    var expenses = 190;

    var remaining = salary - expenses;

    alert("Надбавка у вигляді премії (15%): " + bonus + " грн");
    alert("Податок (10%): " + tax + " грн");
    alert("Витрати в магазині: " + expenses + " грн");
    alert("Залишок від зарплати: " + remaining + " грн");
}