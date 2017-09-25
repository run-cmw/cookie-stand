'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  cookiesPerCust: 6.3,

  custPerHour: function() {
    return Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    return Math.round(custPerHour() * cookiesPerCust);
  },
  

};
