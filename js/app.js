'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  cookiesPerCust: 6.3,
  hourlyCookiesArr: [], // should this array be here or near the method that uses it?
  dailyCookies: 0,

  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    return Math.round(this.custPerHour() * this.cookiesPerCust);
  },
  hourlyCookiesFun: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCookiesArr.push(this.cookiesPerHour());
    }
  },
  totalCookies: function() {
    for (var i in this.hourlyCookiesArr) {
      this.dailyCookies += this.hourlyCookiesArr[i];
      // console.log(this.dailyCookies);
    }
  }


  // render: function() {
  //   // create a new HTML element
  //   var liEl = document.createElement('li');
  //   // give that element content
  //   liEl.textContent = hours[i] + ': ' + cookieCount[i];
  //   // append that element to the right spot in the document
  //   var pikeUl = document.getElementById('pike');
  //   pikeUl.appendChild(liEl);
  // }

};



// var alki = {
//   count: [67, 34, 346, 35, 56, 93, 88],
//   render: function() {
//     for (var i = 0; i < this.count.length; i++) {
//       // create a new HTML element
//       var liEl = document.createElement('li');
//       // gitve that element content
//       liEl.textContent = days[i] + ': ' + this.count[i];
//       // append that element to the right spot in the DOM
//       // parentElement.appendChild(childElement);
//       var alkiUl = document.getElementById('alki');
//       alkiUl.appendChild(liEl);
//     }
//   }
// };
