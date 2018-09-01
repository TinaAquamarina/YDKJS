var device = 99.99;
var equipment = 9.99;
const taxRate = 0.08;
var totalCost = 0;

var balance = 800;
var balanceNoTax = balance - (balance * taxRate);

do {
    totalCost += device;
    totalCost += equipment;

} while (totalCost <= balanceNoTax - device);

var numberOfDevices = (totalCost / (device + equipment)).toFixed(0);
var totalCostWithTax = totalCost + (totalCost * taxRate);
var finalBalance = "$" + (balance - totalCostWithTax).toFixed(2);

console.log("Your initial balance was $" + balance + ".");
console.log("You have bought " + numberOfDevices + " devices.");
console.log("Their price along with equipment and no added taxes was $" + totalCost);
console.log("Total price with added taxes is $" + totalCostWithTax.toFixed(2) + ", which leaves you with " + finalBalance + " on your account.");

