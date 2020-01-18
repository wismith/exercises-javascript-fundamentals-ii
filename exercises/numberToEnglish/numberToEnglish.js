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


/// This is the MACRO function of the exercise.
function numberToEnglish(num) {

  /// We create a function to describe a number less than 1000 (to be used to describe the ones, thousands, millions, etc.)
  function lessThan1000(part){
    // INPUT:  a number with 3 or less digits (num itself or part of a bigger number)
    // OUTPUT: the English name for the INPUT number
    
    // Create empty array to pass words into
    const inEnglish = []; 
    
    // Create arrays of words in English to describe, hundreds, tens, and ones or irregulars
    const hundreds = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const onesInEnglish = [
      'zero', 'one', 'two', 'three', 'four',
      'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
      'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    // Begin pushing words to inEnglish based on value of the parameter passed to the function
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

    // Join the array of words into one string, and return the string as the function output
    return inEnglish.join(' ');
  }

  /// Here I create a function to split a number into groups of 3 digits or less (ones, thousands, millions, etc.)
  function sliceNumber(num){
    // INPUT: the original number passed into the numberToEnglish function
    // OUTPUT: an array of numbers representing the ones, thousands, millions, etc. that make up the INPUT number

    // Create an empty array to pass the ones, thousands, etc.
    let parts = [];

    // Convert the INPUT number to a string
    let numberString = num.toString();

    // Push strings of 3 characters from the INPUT number to the "parts" array, then strings of 2 or 1 character(s) if needed
    while (numberString.length >= 3){
      parts.push(Number(numberString.slice(-3)));
      numberString = numberString.substring(0, numberString.length - 3);
    }
    // Push the strings with the remaining numbers not in a string of 3
    if (numberString.length > 0){
      parts.push(Number(numberString));
    }

    // Return the "parts" array as the OUTPUT of the function
    return parts;
  }
  

  /// Here we create a list of names for thousand, million, etc. We could add more names here, and the function would still work.
  const powersofThousand = ['','thousand', 'million', 'billion', 'trillion'];

  ///  Here we create an empty array to push the words for the final numberToEnglish result
  const descriptionWords= [];

  /// Here, we call our sliceNumber function to separate the ones, thousands, etc.
  const numGroups = sliceNumber(num);
  
  /// For original numbers other than 0, Iterating backwards over the powers of 1000 present to build the descriptionWords array in order

  if (num === 0) {
    return 'zero';
  }

  for(let i = numGroups.length - 1; i >= 0; i--){
    if (numGroups[i] != 0){
      descriptionWords.push(lessThan1000(numGroups[i]), powersofThousand[i]);
    } 
  }

  /// Join the strings in the descriptionWords array to form our result.
  let result = descriptionWords.join(' ');
  
  /// Return the final result of the function
  return result;
}


/// We did not use the actual function below, just the array of words for numbers under 20.
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
