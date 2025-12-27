"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d == 0) {
    let x = -b / (2 * a);
    arr[0] = x;
    return arr;
  } else if (d >= 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr[0] = x1;
    arr[1] = x2;
    return arr;
  } else
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseFloat(countMonths);

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  let percentMonthly = percent / 100 / 12;
  let loanBody = amount - contribution;
  let payment = loanBody * (percentMonthly + (percentMonthly / (((1 + percentMonthly) ** countMonths) - 1)));
  let sum = payment * countMonths;

  return parseFloat(sum.toFixed(2));
}