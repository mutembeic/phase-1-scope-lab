// Write your solution in this file!
var customerName = 'bob'
function upperCaseCustomerName() {
    if (customerName) {
        customerName = customerName.toUpperCase();
    }
}
function setBestCustomer() {
    window.bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
    window.bestCustomer = 'maybe bob'
}
function changeLeastFavoriteCustomer() {
    throw ('Assignment to constant variable.')
}
