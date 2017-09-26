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
console.table(allStores);

Store.prototype.custPerHour = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};
Store.prototype.cookiesPerHour = function() {
  return Math.ceil(this.custPerHour() * this.cookiesPerCust);
};

console.log(allStores[0].custPerHour());
console.log(allStores[0].cookiesPerHour());


// var alki = {
//   location: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   cookiesPerCust: 4.6,
//   hourlyCookiesArr: [],
//   dailyCookies: 0,
//
//   custPerHour: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   cookiesPerHour: function() {
//     return Math.ceil(this.custPerHour() * this.cookiesPerCust);
//   },
//   hourlyCookiesFun: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.hourlyCookiesArr.push(this.cookiesPerHour());
//     }
//   },
//   totalCookies: function() {
//     for (var i in this.hourlyCookiesArr) {
//       this.dailyCookies += this.hourlyCookiesArr[i];
//     }
//   },
//   render: function() {
//     for (var i in this.hourlyCookiesArr) {
//       // create a new HTML element
//       var liEl = document.createElement('li');
//       // give that element content
//       liEl.textContent = hours[i] + ': ' + this.hourlyCookiesArr[i] + ' cookies';
//       // append that element to the right spot in the document
//       var alkiUl = document.getElementById('alki');
//       alkiUl.appendChild(liEl);
//     }
//     // create a new HTML element
//     var liEl2 = document.createElement('li');
//     // give that element content
//     liEl2.textContent = 'Total: ' + this.dailyCookies + ' cookies';
//     // append that element to the right spot in the document
//     var alkiUl2 = document.getElementById('alki');
//     alkiUl2.appendChild(liEl2);
//   }
// };
//
// // where to call the hourlyCookiesFun and totalCookies?? Learn today!
// alki.hourlyCookiesFun();
// alki.totalCookies();
// alki.render();
