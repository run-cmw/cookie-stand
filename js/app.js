'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];

function Store(location, minCust, maxCust, cookiesPerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerCust = cookiesPerCust;
  this.hourlyCookiesArr = []; //??
  this.dailyCookies = 0; //??
  allStores.push(this);
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3,7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4,6);

Store.prototype.custPerHour = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};
Store.prototype.cookiesPerHour = function() {
  return Math.ceil(this.custPerHour() * this.cookiesPerCust);
};
Store.prototype.hourlyCookiesPush = function () {
  for (var i in hours) {
    this.hourlyCookiesArr.push(this.cookiesPerHour());
  }
};
Store.prototype.totalCookies = function () {
  for (var i in this.hourlyCookiesArr) {
    this.dailyCookies += this.hourlyCookiesArr[i];
    console.log('Daily cookies is now: ' + this.dailyCookies);
  }
};

console.table(allStores);
// console.log(allStores[0].custPerHour());
// console.log(allStores[0].cookiesPerHour());
console.log(allStores[0].hourlyCookiesPush());
console.table(allStores[0].hourlyCookiesArr);
console.log(allStores[0].totalCookies());
console.log(allStores[0].dailyCookies);
