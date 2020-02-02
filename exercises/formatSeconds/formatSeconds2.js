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
    // Write function here!

    // Create reference dictionary for lengths of time
    const secondsRef = {'w':604800,'d':86400,'h':3600,'m':60,'s':1};

    // Create empty array to push list of descriptors
    const formattedDescriptors = [];

    // Define a working number for number of seconds remaining
    let secondsRemaining = num;

    // Use a for loop of the lengths of time to process the working number and push descriptors to the array
    for (let key of Object.keys(secondsRef)){ 
        let amount = Math.floor(secondsRemaining/secondsRef[key]);    
        formattedDescriptors.push(amount += key);       
        secondsRemaining %= secondsRef[key];
    }

    // Use a while loop to remove any leading descriptors with a value of 0
    while (formattedDescriptors[0].startsWith('0') && formattedDescriptors.length > 1){
        formattedDescriptors.shift();
    }

    // Join the array of descriptors with spaces and return the resulting string
    return formattedDescriptors.join(' ');

}

if (require.main === module) {
  console.log('Running sanity checks for formatSeconds2:');

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

  console.log(formatSeconds(2580000) === '4w 1d 20h 40m 0s');
}


module.exports = formatSeconds;
