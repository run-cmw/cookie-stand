'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var storeTable = document.getElementById('stores');

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
Store.prototype.hourlyCookiesPush = function() {
  for (var i in hours) {
    this.hourlyCookiesArr.push(this.cookiesPerHour());
  }
};
Store.prototype.totalCookies = function() {
  for (var i in this.hourlyCookiesArr) {
    this.dailyCookies += this.hourlyCookiesArr[i];
  }
};
Store.prototype.render = function() {
  this.hourlyCookiesPush();
  this.totalCookies();
  // create a new HTML element
  var trEl = document.createElement('tr');
  // give the column content - create, content, and append location values to row
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  //append the row to the table
  storeTable.appendChild(trEl);

  // Inner list Data: create new HTML element
  // var trEl = document.createElement('tr'); //<-------DON'T NEED THIS ONE??
  // give the element content - create, content, and append hourly cookie totals array
  for (var i in this.hourlyCookiesArr) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookiesArr[i] + ' cookies';
    trEl.appendChild(tdEl);
  }
  // append the element to the correct spot in document
  storeTable.appendChild(trEl);
};


// loop to invoke the render method on all locations
function displayDailyCookieData() {
  for (var i in allStores) {
    allStores[i].render();
  }
}

displayDailyCookieData();
