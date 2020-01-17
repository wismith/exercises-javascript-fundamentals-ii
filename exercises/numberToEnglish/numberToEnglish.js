/**
 * Given a non-negative integer as input, returns the number translated into
 * English.
 *
 * Don't worry about inserting hyphens, commas, or "and" anywhere.
 *
 * @example
 * numberToEnglish(100);     // => 'one hundred'
 * numberToEnglish(5491);    // => 'five thousand four hundred ninety one'
 * numberToEnglish(12345);   // => 'twelve thousand three hundred forty five'
 * numberToEnglish(9456012); // => 'nine million four hundred fifty six thousand twelve'
 *
 * @param {number} num - A number to format
 * @returns {string} A string representation of the input number formatted with
 *   commas in the appropriate places.
 */
function numberToEnglish(num) {

  /// We create a function to describe a number less than 1000
  function lessThan1000(part){
    const inEnglish = [];
    const hundreds = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const onesInEnglish = [
      'zero', 'one', 'two', 'three', 'four',
      'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
      'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    if (part > 99){
      let hundred = hundreds[Number(part.toString()[0])];
      inEnglish.push(hundred, 'hundred');
    }
    if (part > 19){
      let tensOnes = Number(part.toString().slice(1));
      if (tensOnes > 19){
        let ten = tens[Number(part.toString()[1])];
        let one = onesInEnglish[part.toString()[2]];
        inEnglish.push(ten, one);
      } else {
        if (tensOnes != 0){
          let finish = onesInEnglish[tensOnes];
          inEnglish.push(finish);
        } 
        }
    } else {
      let finish = onesInEnglish[part];
      inEnglish.push(finish);
    }
    return inEnglish.join(' ');
  }

  /// Here I create a function to split a number into groups of 3 digits or less (ones, thousands, millions, etc.)
  function sliceNumber(num){
    let parts = [];
    let numberString = num.toString();
    while (numberString.length >= 3){
      parts.push(Number(numberString.slice(-3)));
      numberString = numberString.substring(0, numberString.length - 3);
    }
    if (numberString.length > 0){
      parts.push(Number(numberString));
    }
    return parts;
  }
  

  /// Here we create a list of names for thousand, million, etc.
  const powersofThousand = ['','thousand', 'million', 'billion', 'trillion'];

  let descriptionWords= [];

  let numGroups = sliceNumber(num);
  /// Creating an iteration to correspond powersofThousand with the appropriate number group in the array
  if (num != 0){
    for(let i = numGroups.length - 1; i >= 0; i--){

      if (numGroups[i] != 0){
        descriptionWords.push(lessThan1000(numGroups[i]), powersofThousand[i]);
      } 
    }
    let result = descriptionWords.join(' ');
    return result;
  } else {return 'zero'}
}


/// We may or may not need this function below.
function smallNumberToEnglish(num) {
  let onesInEnglish = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
  ];

  if (num > 19) {
    throw new Error(`Invalid input: 1-digit or 2-digit input required, received: ${num}`);
  }

  return onesInEnglish[num];
}


if (require.main === module) {
  console.log('Running sanity checks for numberToEnglish:');

  // Add more sanity checks as you go along.
  // How else will you know if your code does what you expect,
  // or whether you've broken your existing code without realizing?

  console.log(numberToEnglish(100) === 'one hundred ');
  console.log(numberToEnglish(0) === 'zero');
  console.log(numberToEnglish(10) === 'ten ');
  console.log(numberToEnglish(419) === 'four hundred nineteen ');
  console.log(numberToEnglish(1423) === 'one thousand four hundred twenty three ');
  console.log(numberToEnglish(1000000) === 'one million');
  console.log(numberToEnglish(409) === 'four hundred nine ');
  console.log(numberToEnglish(1000500) === 'one million five hundred ');
}

module.exports = numberToEnglish;
