'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var combinedHourlyCookies = []; // bottom row
var totalTotal = 0; // bottom right cell
var storeTable = document.getElementById('stores'); // global because needed for render method and header and footer functions
var addForm = document.getElementById('add-stores'); // variable to access HTML form that adds stores

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
  this.dailyCookies = 0;
  for (var i = 0; i < this.hourlyCookiesArr.length; i++) {
    this.dailyCookies += this.hourlyCookiesArr[i];
  }
};
Store.prototype.renderTable = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  var tdEl = document.createElement('td');

  // locations data
  trEl = document.createElement('tr');
  // give the column content - create col, give col content (location values), and append col to row
  tdEl = document.createElement('td');
  thEl.textContent = this.location;
  trEl.appendChild(thEl);
  // append row to table
  storeTable.appendChild(trEl);

  // hourly cookies data
  for (var i = 0; i < this.hourlyCookiesArr.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookiesArr[i] + ' cookies';
    trEl.appendChild(tdEl);
  }
  // daily totals column
  thEl = document.createElement('th');
  thEl.textContent = this.dailyCookies + ' cookies';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3,7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4,6);

// function for header
function displayHeader() {
  // create a row
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  // blank cell (correctly aligns hours)
  trEl = document.createElement('tr');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  // create, give content, and append header for each hour
  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  // 'Location Totals' title to cell
  thEl = document.createElement('th');
  thEl.textContent = 'Location Totals';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}

// function to add the total cookies of each hour for every location
function combineCookies() {
  combinedHourlyCookies = [];
  for (var i = 0; i < hours.length; i++) {
    var combinedCookies = 0;
    for (var j = 0; j < allStores.length; j++) {
      combinedCookies += allStores[j].hourlyCookiesArr[i];
    }
    combinedHourlyCookies.push(combinedCookies);
  }
}

// function for bottom right cell
function calcTotalTotal() {
  totalTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    totalTotal += combinedHourlyCookies[i];
  }
}

// function for total footer (hourly totals for all 5 stores data)
function displayTotalsFooter() {
  calcTotalTotal(); // this call can't be last b/c the outer function depends on them

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

// function to invoke all executables
function executeAll() {
  displayHeader();
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].hourlyCookiesArr = [];
    allStores[i].hourlyCookiesPush();
    allStores[i].totalDailyCookies();
    allStores[i].renderTable();
  }
  combineCookies();
  displayTotalsFooter();
}

// event handler
function handleSubmit(event) {

  event.preventDefault();

  var location = event.target.location.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var cookiesPurchased = event.target.cookies.value;

  // input validation
  if (isNaN(min) || isNaN(max) || isNaN(cookiesPurchased)) {
    alert('Please only enter numbers for minimum customers, maximum customers, and average cookies purchased.');
    return;
  } else if (min > max) {
    alert('Minimum customers per hour must be less than or equal to maximum customers per hour.');
    return;
  } else if (min < 0 || max < 0 || cookiesPurchased < 0) {
    alert('Please enter 0 or higher for minimum customers, maximum customers, and average cookies purchased.');
    return;
  }

  event.target.location.value = '';
  event.target.min.value = '';
  event.target.max.value = '';
  event.target.cookies.value = '';
  stores.innerHTML = '';

  new Store (location, min, max, cookiesPurchased);

  executeAll();
}

//event listener
addForm.addEventListener('submit', handleSubmit);

executeAll();
