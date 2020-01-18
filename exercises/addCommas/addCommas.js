/**
 * Given a non-negative integer as input, returns a string representation with
 * commas inserted in the appropriate places.
 *
 * @example
 * addCommas(100); // => '100'
 * addCommas(5491); // => '5,491'
 * addCommas(12345); // => '12,345'
 * addCommas(987654321); // => '987,654,321'
 *
 * @param {number} num - A number to format
 * @returns {string} A string representation of the input number formatted with
 *   commas in the appropriate places.
 */

function addCommas(num) {
  // This is your job. :)
  function sliceNumber(num){
    const parts = [];
    let numberString = num.toString();
    while (numberString.length >= 3){
      parts.push(numberString.slice(-3));
      numberString = numberString.substring(0, numberString.length -3);
    }
    if (numberString.length > 0){
      parts.push(numberString);
    }
    return parts.reverse();
  }

  return sliceNumber(num).join(',');

}

if (require.main === module) {
  console.log('Running sanity checks for addCommas:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(addCommas(1000) === '1,000');
  console.log(addCommas(1200500) === '1,200,500');
  console.log(addCommas(1000000000000) === '1,000,000,000,000');
}


module.exports = addCommas;
