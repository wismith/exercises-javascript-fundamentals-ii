/**
 * Takes an integer representing a number of seconds as input and
 * returns a formatted string representing the same amount of time.
 *
 * See the examples of the format below.
 *
 * @example
 * formatSeconds(45);      // => '45s'
 * formatSeconds(175);     // => '2m 55s'
 * formatSeconds(1234);    // => '20m 34s'
 * formatSeconds(10815);   // => '3h 0m 15s';
 * formatSeconds(12345);   // => '3h 25m 45s'
 * formatSeconds(1210459); // => '2w 0h 14m 19s'
 *
 * @param {number} seconds - An integer amount of time (in seconds)
 * @returns {string} The same amount of time but formatted.
 */

function formatSeconds(num) {
  
  // Create reference dictionary for lengths of time in seconds
  const secondsRef = {'w':604800, 'd':86400, 'h':3600, 'm':60, 's':1};
  
  // Create empty array to push formatted lengths of time
  const formattedList = [];
  
  // Define a working variable for seconds remaining
  let secondsRemaining = num;
  
  // Use for loop to push formatted lengths of time to the array
  for (let key of Object.keys(secondsRef)){
    let amount = Math.floor(secondsRemaining/secondsRef[key]);
    formattedList.push(amount += key);   
    secondsRemaining %= secondsRef[key];
  }
  
  // While loop to remove leading elements of the array with '0w', etc.
  let i = 0;
  while (formattedList[0][0] === '0' && i < formattedList.length -1){
    formattedList.shift();
  }

  // Join array and return formatted length of time
  return formattedList.join(' ');

}

if (require.main === module) {
  console.log('Running sanity checks for formatSeconds:');

  /*
  Add your own test cases here! These four aren't enough.

  Notice that we're looking at "edge cases": the boundary where the
  parts "flip over", and also the values on either side of that boundary.

  This is where the code is most likely to go wrong.
  */

  console.log(formatSeconds(0) === '0s');
  console.log(formatSeconds(1) === '1s');

  console.log(formatSeconds(55) === '55s');
  console.log(formatSeconds(60) === '1m 0s');
  console.log(formatSeconds(65) === '1m 5s');

  console.log(formatSeconds(3600) === '1h 0m 0s');
  console.log(formatSeconds(3615) === '1h 0m 15s');
}


module.exports = formatSeconds;
