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



var seaTac = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  cookiesPerCust: 1.2,
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
      var seaTacUl = document.getElementById('seaTac');
      seaTacUl.appendChild(liEl);
    }
    // create a new HTML element
    var liEl2 = document.createElement('li');
    // give that element content
    liEl2.textContent = 'Total: ' + this.dailyCookies + ' cookies';
    // append that element to the right spot in the document
    var seaTacUl2 = document.getElementById('seaTac');
    seaTacUl2.appendChild(liEl2);
  }
};

seaTac.hourlyCookiesFun();
seaTac.totalCookies();
seaTac.render();



var seaCen = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  cookiesPerCust: 3.7,
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
      var seaCenUl = document.getElementById('seaCen');
      seaCenUl.appendChild(liEl);
    }
    // create a new HTML element
    var liEl2 = document.createElement('li');
    // give that element content
    liEl2.textContent = 'Total: ' + this.dailyCookies + ' cookies';
    // append that element to the right spot in the document
    var seaCenUl2 = document.getElementById('seaCen');
    seaCenUl2.appendChild(liEl2);
  }
};

seaCen.hourlyCookiesFun();
seaCen.totalCookies();
seaCen.render();



var capHill = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  cookiesPerCust: 2.3,
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
      var capHillUl = document.getElementById('capHill');
      capHillUl.appendChild(liEl);
    }
    // create a new HTML element
    var liEl2 = document.createElement('li');
    // give that element content
    liEl2.textContent = 'Total: ' + this.dailyCookies + ' cookies';
    // append that element to the right spot in the document
    var capHillUl2 = document.getElementById('capHill');
    capHillUl2.appendChild(liEl2);
  }
};

capHill.hourlyCookiesFun();
capHill.totalCookies();
capHill.render();



var alki = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  cookiesPerCust: 4.6,
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
      var alkiUl = document.getElementById('alki');
      alkiUl.appendChild(liEl);
    }
    // create a new HTML element
    var liEl2 = document.createElement('li');
    // give that element content
    liEl2.textContent = 'Total: ' + this.dailyCookies + ' cookies';
    // append that element to the right spot in the document
    var alkiUl2 = document.getElementById('alki');
    alkiUl2.appendChild(liEl2);
  }
};

alki.hourlyCookiesFun();
alki.totalCookies();
alki.render();
