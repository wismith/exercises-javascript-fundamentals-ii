/**
 * Given a string that doesn't contain any numbers, returns a run-length
 * encoded copy of the input string.
 *
 * We're exluding numbers to avoid ambiguity. A string like '112211' would
 * be encoded as encoded as '212221', which could also mean twenty-one 2s
 * followed by twenty-two 1s.
 *
 * There are ways around this, but focus first on getting a version that
 * works strings that doesn't contain numbers.
 *
 *
 * @example
 * runLengthEncode('A'); // => '1A'
 * runLengthEncode('AB'); // => '1A1B'
 * runLengthEncode('Mississippi'); // => '1M1i2s1i2s1i2p1i'
 * runLengthEncode('WWWWWWAAAAAAWWWWWWAAAAAABBBBBB'); // => '6W6A6W6A6B'
 *
 * @param {string} input - A string that doesn't contain numbers
 * @returns {string} A run-length encoded copy of the input string
 */

function runLengthEncode(string) {
  let stringChars = string.split('');
  
  const encodeList = [];
  while (stringChars.length){
    let charCount = 1;
    let char = stringChars.shift();
    let i = 1;
    while (stringChars[0] === char){
      charCount++;
      stringChars.shift();
      i++;
    }
    encodeList.push(charCount += char);
  }
  return encodeList.join('');
}

function timeRunLengthEncode(string) {
  let before = Date.now();
  runLengthEncode(string);
  let after = Date.now();
  return after - before;
}

function runLengthEncode2(string) {
  let count = 1;
  let prev = string[0];
  let result = '';

  for (let i = 1; i < string.length; i += 1) {
    if (string[i] !== prev) {
      result += String(count) + prev;

      prev = string[i];
      count = 1;
    } else {
      count += 1;
    }
  }

  result += String(count) + prev;

  return result;
}

function timeRunLengthEncode2(string) {
  let before = Date.now();
  runLengthEncode2(string);
  let after = Date.now();
  return after - before;
}

let strings = ['A','AB','AABBCC','ABBCCDDF','Mississippi','WWWWWWAAAAAAWWWWWWAAAAAABBBBBB'];
for (let string of strings) {
  console.log('%d\t%f\t%f', string, timeRunLengthEncode(string), timeRunLengthEncode2(string));
}


if (require.main === module) {
  console.log('Running sanity checks for runLengthEncode:');

  console.log(runLengthEncode('WWWWWWAAAAAAWWWWWWAAAAAABBBBBB') === '6W6A6W6A6B');
  console.log(runLengthEncode('A') === '1A');
  console.log(runLengthEncode('AB') === '1A1B');
  console.log(runLengthEncode('Mississippi') === '1M1i2s1i2s1i2p1i');


}

module.exports = runLengthEncode;
