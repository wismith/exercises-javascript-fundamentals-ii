/**
 * Given a positive integer, returns a string containing that integer's
 * Roman numeral representation.
 *
 * We recommend doing this work in two iterations: first supporting only
 * additive Roman numerals and then adding support for subtractive
 * Roman numerals. See the README for details.
 *
 * @example
 * toRoman(1);   // => 'I'
 * toRoman(6);   // => 'VI'
 * toRoman(152); // => 'CLII'
 *
 * @param {number} num - An integer
 * @returns {string} The input integer's Roman numeral representation
 */
function toRoman(num) {
  let workingNum = num;
  let thousands = Math.floor(workingNum/1000);
  workingNum %= 1000;
  let hundreds = Math.floor(workingNum/100);
  workingNum %= 100;
  let tens = Math.floor(workingNum/10);
  workingNum %= 10;
  let ones = workingNum;

  const romanArray = [];
  
  if (thousands){
    for (let i = 0; i < thousands; i++)
    romanArray.push('M');
  }
  if (hundreds){
    if (hundreds === 9){
      romanArray.push('CM')
    }
    
    for (let i = 0; i < hundreds; i++){
      romanArray.push('C');
    }
  }




}

if (require.main === module) {
  console.log('Running sanity checks for toRoman:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = toRoman;
