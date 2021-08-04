const returnFirstTwoDrivers = function(arr) {
    return [arr[0], arr[1]]
   }

const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2)
   }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function (value) {
      return fareMultiplier * value;
    };
  };

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };
