'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var combinedHourlyCookies = []; // bottom row
var totalTotal = 0; // bottom right cell
var storeTable = document.getElementById('stores'); // global because needed for render method and header and footer functions
var addForm = document.getElementById('add-stores'); // variable to access form that adds stores
// var removeForm = document.getElementById('remove-stores'); // variable to access form that removes stores
var executables = []; // array of executable functions

function Store(location, minCust, maxCust, cookiesPerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerCust = cookiesPerCust;
  this.hourlyCookiesArr = [];
  this.dailyCookies = 0;
  allStores.push(this);
  this.hourlyCookiesPush();
  this.totalDailyCookies();
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
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  var tdEl = document.createElement('td');

  // locations data: create a new row element (done above)
  // give the column content - create col (done above), give col content (location values), and append col to row
  thEl.textContent = this.location;
  trEl.appendChild(thEl);
  // append row to table
  storeTable.appendChild(trEl);

  // hourly cookies data: give the column content - create, give content, and append cookie totals array for each hour
  for (var i = 0; i < this.hourlyCookiesArr.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookiesArr[i] + ' cookies';
    trEl.appendChild(tdEl);
  }
  // daily totals column: create, content, and append daily total values to row
  thEl = document.createElement('th');
  thEl.textContent = this.dailyCookies + ' cookies';
  trEl.appendChild(thEl);
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
  thEl.textContent = '';
  trEl.appendChild(thEl);
  // create, give content, and append header for each hour
  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  // give the column content - create header, content, and append 'Daily Location Totals' title to cell
  thEl = document.createElement('th');
  thEl.textContent = 'Location Totals';
  trEl.appendChild(thEl);
  // append row to the table
  storeTable.appendChild(trEl);
}
executables.push(displayHeader());

// function with loop to invoke the render method on all locations
function displayCookieData() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}
executables.push(displayCookieData());

// function to add the total cookies of each hour for every location
function combineCookies() {
  for (var i = 0; i < hours.length; i++) {
    var combinedCookies = 0;
    for (var j = 0; j < allStores.length; j++) {
      combinedCookies += allStores[j].hourlyCookiesArr[i];
    }
    combinedHourlyCookies.push(combinedCookies);
  }
}
executables.push(combineCookies());

// function for bottom right cell
function displayTotalTotal() {
  for (var i = 0; i < hours.length; i++) {
    totalTotal += combinedHourlyCookies[i];
  }
}

// function for total footer (hourly totals for all 5 stores data)
function displayTotalsFooter() {
  displayTotalTotal(); // this call can't be last b/c the outer function depends on them

  // heading: create a row
  var trEl = document.createElement('tr');
  // create, give content, and append header for 'Totals' cell (correctly align hourly totals for all 5 stores)
  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  // give the column content - create, give content, and append cookie totals array for each hour
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = combinedHourlyCookies[i] + ' cookies';
    trEl.appendChild(thEl);
  }
  // bottom right cell: create, content, and append
  thEl = document.createElement('th');
  thEl.textContent = totalTotal + ' cookies';
  trEl.appendChild(thEl);
  // append row to table
  storeTable.appendChild(trEl);
}
executables.push(displayTotalsFooter());

// function to invoke all executables
function executeAll() {
  for (var i = 0; i < executables.length; i++) {
    executables[i];
  }
}

// event handler
function handleAddSubmit(event) {

  event.preventDefault();

  // INPUT VALIDATION HERE AT SOME POINT

  var location = event.target.location.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var cookiesPurchased = event.target.cookies.value;

  new Store (location, min, max, cookiesPurchased);
  console.log(allStores);
  displayHeader();
  displayCookieData();
  combineCookies();
  displayTotalsFooter();

  // executeAll();
}

//event listeners
addForm.addEventListener('click', function() { // clear form after submission
  event.target.location.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.cookies.value = null;
  console.log(allStores);
  allStores = [];
  // storeTable.innerHTML = null;
});

addForm.addEventListener('submit', handleAddSubmit);
// removeForm.addEventListener('submit', ________);

executeAll();
