// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (a) => {
    return (a) => a**2;
};

const fareDoubler = (a) => {
    return a*2;
}

const fareTripler = (a) => {
    return a*3    
}

const selectDifferentDrivers = (arr, fn) => {
    return fn(arr);
}

