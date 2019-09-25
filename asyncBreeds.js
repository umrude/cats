// // asyncBreeds.js
// const fs = require('fs');

// const breedDetailsFromFile = function(breed) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     // ISSUE: Returning from inner callback function, not our main function.
//     console.log('Callback: I have the data!');
//     if (!error) return data;
//   });
//   // ISSUE: Attempting to return data out here will also not work.
//   //        Currently not returning anything from here, so this function returns undefined.
// };

// // we try to get the return value
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!

const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE 1: Pass data back via callback instead of return.
    console.log('Callback: I have the data!');
    if (!error) callback(data);
  });
};

// CHANGE 2: Value now comes back via callback, not return value
breedDetailsFromFile('Bombay', (bombay) => {
  console.log('Return Value: ', bombay); // => print out details correctly.
});