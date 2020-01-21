/**
 * Given a run-length encoded string as input, reconstructs and returns
 * the original, uncompressed string.
 *
 * @example
 * runLengthDecode('3A4B1C'); // => 'AAABBBBC'
 * runLengthEncode('1M1i2s1i2s1i2p1i'); // => 'Mississippi'
 *
 * @param {string} input - A run-length encoded string
 * @returns {string} The original, uncompressed string
 */

function runLengthDecode(string) {
  const codedList = [];
  for (let char of string){
    codedList.push(char);
  }
  const decodedList = [];
  while(codedList.length){
    let number = Number(codedList.shift());
    let char = codedList.shift();
    for (let i = 0; i < number; i++){
      decodedList.push(char);
    }
  }
  return decodedList.join('');
}

let runLengthEncode = require('../runLengthEncode/runLengthEncode');

if (require.main === module) {
  console.log('Running sanity checks for runLengthDecode:');

  // Add your own test inputs
  let testInputs = [
    'A',
    'AB',
    'Mississippi',
    'WWWWWWAAAAAAWWWWWWAAAAAABBBBBB',
  ];

  for (let input of testInputs) {
    console.log(runLengthDecode(runLengthEncode(input)) === input);
  }
}

module.exports = runLengthDecode;
