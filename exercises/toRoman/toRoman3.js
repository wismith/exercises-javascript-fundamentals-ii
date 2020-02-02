function toRoman3(num) {
  let romanDict = [
    [1000,'M'],
    [900,'CM'],
    [500,'D'],
    [400,'CD'],
    [100,'C'],
    [90,'XC'],
    [50,'L'],
    [40,'XL'],
    [10,'X'],
    [9,'IX'],
    [5,'V'],
    [4,'IV'],
    [1,'I'],
  ];
  let workingNum = num;
  let inRoman = ''
  for (let val of romanDict) {
    for (let i = 0; i < Math.floor(workingNum/val[0]); i++) {
      inRoman += val[1];
    }
    workingNum %= val[0];
  }
  return inRoman;
}

if (require.main === module){
  console.log('Running sanity checks for toRoman:');

  console.log(toRoman3(25) === 'XXV');
  console.log(toRoman3(10) === 'X');
  console.log(toRoman3(20) === 'XX');
  console.log(toRoman3(44) === 'XLIV');
  console.log(toRoman3(144) === 'CXLIV');
  console.log(toRoman3(2594) === 'MMDXCIV');
}
module.exports = toRoman3;