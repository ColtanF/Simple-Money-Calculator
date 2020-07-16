// BudgetCalc.js

// Default budget data.
let budgetInfo = {
   subscription_services : 100.00,
   truck_payment : 400.00,
   truck_ins : 75.00,
   phone_bill : 100.00,
   internet_bill : 70.00,
   utilities_bill : 100.00,
   all_monthly_bills : function() {
     return Number(this.subscription_services + this.truck_payment + this.truck_ins + this.phone_bill + this.internet_bill + this.utilities_bill);
   },
   salary: 0.0,
   rent: 0.0
}

function updateText() {
  grabText();

  let leftoverYear = calculateLeftoverYear().toFixed(2);
  let leftoverMonth = calculateLeftoverMonth().toFixed(2);

  document.getElementById('leftoverYear').innerHTML = "$" + leftoverYear;
  document.getElementById('leftoverMonth').innerHTML = "$" + leftoverMonth;
}

function calculateLeftoverYear() {
  let retval = (budgetInfo.salary * .75) - budgetInfo.rent * 12 - budgetInfo.all_monthly_bills() * 12;
  if (retval < 0) {
    return 0;
  }
  return retval;
}

function calculateLeftoverMonth() {
  let retval = (budgetInfo.salary * .75 / 12) - budgetInfo.rent - budgetInfo.all_monthly_bills();
  if (retval < 0) {
    return 0;
  }
  return retval;
}

function grabText() {
  let tempSalary = Number(document.getElementById('salary').value);
  if (!isNaN(tempSalary)) {
    budgetInfo.salary = tempSalary;
  }
  let tempRent = Number(document.getElementById('rent').value);
  if (!isNaN(tempRent)) {
    budgetInfo.rent = tempRent;
  }
  budgetInfo.rent = Number(document.getElementById('rent').value);
  budgetInfo.subscription_services = Number(document.getElementById('monthlySubs').value);
  budgetInfo.truck_payment = Number(document.getElementById('truckPayment').value);
  budgetInfo.truck_ins = Number(document.getElementById('truckInsurance').value);
  budgetInfo.phone_bill = Number(document.getElementById('phoneBill').value);
  budgetInfo.internet_bill = Number(document.getElementById('internetBill').value);
  budgetInfo.utilities_bill = Number(document.getElementById('utilitiesBill').value);
}
