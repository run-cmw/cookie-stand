'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  cookiesPerCust: 6.3,
  hourlyCookiesArr: [],
  dailyCookies: 0,

  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    return Math.ceil(this.custPerHour() * this.cookiesPerCust);
  },
  hourlyCookiesFun: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCookiesArr.push(this.cookiesPerHour());
    }
  },
  totalCookies: function() {
    for (var i in this.hourlyCookiesArr) {
      this.dailyCookies += this.hourlyCookiesArr[i];
    }
  },
  render: function() {
    for (var i in this.hourlyCookiesArr) {
      // create a new HTML element
      var liEl = document.createElement('li');
      // give that element content
      liEl.textContent = hours[i] + ': ' + this.hourlyCookiesArr[i] + ' cookies';
      // append that element to the right spot in the document
      var pikeUl = document.getElementById('pike');
      pikeUl.appendChild(liEl);
    }
    // create a new HTML element
    var liEl2 = document.createElement('li');
    // give that element content
    liEl2.textContent = 'Total: ' + this.dailyCookies + ' cookies';
    // append that element to the right spot in the document
    var pikeUl2 = document.getElementById('pike');
    pikeUl2.appendChild(liEl2);
  }
};

pike.hourlyCookiesFun();
pike.totalCookies();
pike.render();
