'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
// var combinedCookies = 0; // uncomment once prototype works
var combinedHourlyCookies = []; // displayed on bottom row
var storeTable = document.getElementById('stores'); // global because needed for render method and header and footer functions

function Store(location, minCust, maxCust, cookiesPerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerCust = cookiesPerCust;
  this.hourlyCookiesArr = [];
  this.dailyCookies = 0;
  allStores.push(this);
};

Store.prototype.custPerHour = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};
Store.prototype.cookiesPerHour = function() {
  return Math.ceil(this.custPerHour() * this.cookiesPerCust);
};
Store.prototype.hourlyCookiesPush = function() {
  for (var i = 0; i < hours.length; i++) {
    this.hourlyCookiesArr.push(this.cookiesPerHour());
  }
};
Store.prototype.totalDailyCookies = function() {
  for (var i = 0; i < this.hourlyCookiesArr.length; i++) {
    this.dailyCookies += this.hourlyCookiesArr[i];
  }
};
// convert combine cookies function into sleek ass array next!
// Store.prototype.combinedCookiesPush = function () {
//   for (var i in hours) {
//     combinedHourlyCookies.push(combinedCookies += this.hourlyCookiesArr[i]);
//   }
// };
Store.prototype.render = function() {
  this.hourlyCookiesPush();
  this.totalDailyCookies();
  // this.combinedCookiesPush(); // uncomment after prototype works! -- these calls can't be last b/c things depend on 'em
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  // locations data: create a new row element (done above)
  // give the column content - create col (done above), give col content (location values), and append col to row
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  // append row to table
  storeTable.appendChild(trEl);

  // hourly cookies data: give the column content - create, give content, and append cookie totals array for each hour
  for (var i in this.hourlyCookiesArr) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookiesArr[i] + ' cookies';
    trEl.appendChild(tdEl);
  }
  // daily totals column: create, content, and append daily total values to row
  tdEl = document.createElement('td');
  tdEl.textContent = this.dailyCookies + ' cookies';
  trEl.appendChild(tdEl);
  // append row to table
  storeTable.appendChild(trEl);
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3,7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4,6);

// function for header
function displayHeader() {
  // heading: create a row
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  // create, give content, and append header for store locations cell (correctly aligns hours)
  thEl.textContent = 'Store Locations';
  trEl.appendChild(thEl);
  // create, give content, and append header for each hour
  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  // give the column content - create header, content, and append 'Daily Location Totals' title to cell
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Totals';
  trEl.appendChild(thEl);
  // append row to the table
  storeTable.appendChild(trEl);
}

// function with loop to invoke the render method on all locations
function displayCookieData() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

// function to add the total cookies of each hour for each location // MAKE THIS A LOOP?????
function combineCookies() {
  for (var i = 0; i < hours.length; i++) {
    combinedHourlyCookies.push(allStores[0].hourlyCookiesArr[i] + allStores[1].hourlyCookiesArr[i] + allStores[2].hourlyCookiesArr[i] + allStores[3].hourlyCookiesArr[i] + allStores[4].hourlyCookiesArr[i]);
  }
}

function totalTotal() {

}

// function for total footer (hourly totals for all 5 stores data)
function displayTotalsFooter() {
  // heading: create a tr
  var trEl = document.createElement('tr');
  // create, give content, and append header for 'Totals' cell (correctly align hourly totals for all 5 stores)
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  // create new row
  // give the column content - create, give content, and append cookie totals array for each hour
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = combinedHourlyCookies[i] + ' cookies';
    trEl.appendChild(thEl);
  }
  // append row to table
  storeTable.appendChild(trEl);
}

displayHeader();
displayCookieData();
combineCookies(); // remove this and related function after prototype works!
displayTotalsFooter();
// dailyLocationTotals();
