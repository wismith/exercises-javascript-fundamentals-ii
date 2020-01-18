function addCommasReverse(num) {
  // 1. convert number into string
  // 2. reverse the string
  // 3. split it into chunks of 3
  // 4. join back together using commas
  // 5. (un-)reverse string
  let str = String(num);

  return reverse(join(chunk(reverse(str, 3), ',')));
}

function reverse(str) {
  let reversed = '';

  for (let i = str.length; i > 0;i -= 1) {
    reversed += str[i - 1];
  }

  return reversed;
}

function chunk(str, size) {
  let results = [];

  for (let i = 0; i < str.length; i += size) {
    let group = '';

    for (let j = 0; i + j < str.length && j < size; j += 1) {
      group += str[i + j];
    }

    results.push(group);
  }

  return results;
}

function split(str, char) {
  let results = [];
  let group = '';

  for (let i = 0;i < str.length; i += 1) {
    if (str[i] === char) {
      results.push(group);
      group = '';
    }

    group += str[i];
  }

  results.push(group);

  return results;
}

function join(array, char) {
  if (array.length === 0) {
    return '';
  }

  let results = array[0];

  for (let i = 1; i < array.length; i += 1) {
    results += char + array[i];
  }

  return results;
}

module.exports = addCommasReverse;
