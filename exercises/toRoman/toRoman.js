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
 * 
 * 1 = I
 * 5 = V
 * 10 = X
 * 50 = L
 * 100 = C
 * 500 = D
 * 1000 = M
 * 
 * 
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
    if (hundreds < 4){ 
      for (let i = 0; i < hundreds; i++){
        romanArray.push('C');
      }
    }
    if (hundreds === 4){
      romanArray.push('CD');
    }
    if (hundreds > 4 && hundreds < 9){
      romanArray.push('D');
      for (let i = 0; i < hundreds - 5; i++){
        romanArray.push('C');
      }
    }
    if (hundreds === 9){
      romanArray.push('CM')
    }
  }
  if (tens){
    if (tens < 4){
      for (let i = 0; i < tens; i++){
        romanArray.push('X');
      }
    }
    if (tens === 4){
      romanArray.push('XL');
    }
    if (tens > 4 && tens < 9){
      romanArray.push('V');
      for (let i = 0; i < tens - 5; i++){
        romanArray.push('X');
      }
    }
    if (tens === 9){
      romanArray.push('XC');
    }
  }
  
  if (ones){
    if (ones < 4){
      for (let i = 0; i < ones; i++){
        romanArray.push('I')
      }
    }
    if (ones === 4){
      romanArray.push('IV');
    }
    if (ones > 4 && ones < 9){
      romanArray.push('V');
      for (let i = 0; i < ones - 5; i++){
        romanArray.push('I');
      }
    }
    if (ones === 9){
      romanArray.push('IX');
    }
  }

  return romanArray.join('');

}

if (require.main === module) {
  console.log('Running sanity checks for toRoman:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(toRoman(25) === 'XXV');
  console.log(toRoman(44) === 'XLIV');
  console.log(toRoman(144) === 'CXLIV');
  console.log(toRoman(2594) === 'MMDXCIV');
}

module.exports = toRoman;
