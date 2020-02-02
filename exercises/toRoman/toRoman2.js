function toRoman2(num){

    let workingNum = num;
    let thousands = Math.floor(workingNum/1000);
    workingNum %= 1000;
    let hundreds = Math.floor(workingNum/100);
    workingNum %= 100;
    let tens = Math.floor(workingNum/10);
    workingNum %= 10;
    let ones = workingNum;
    let placeValues = [thousands, hundreds,tens, ones];
    
    let romNumerals = ['M','D','C','L','X','V','I'];
    const romanArray = [];
    
    if (thousands){
        for (let i = 0; i < thousands; i++){
            romanArray.push(romNumerals[0]);
        }
    }
    let index = 2;
    for (let i = 1; i < placeValues.length; i++){
        if (placeValues[i]){
            if (placeValues[i] < 4){
                for (let j = 0; j < placeValues[i]; j++){
                    romanArray.push(romNumerals[index]);
                }
            }
            if (placeValues[i]===4){
                romanArray.push(romNumerals[index] + romNumerals[index-1])
            }
            if (placeValues[i] > 4 && placeValues[i] < 9){
                romanArray.push(romNumerals[index-1]);
                for (let j = 0; j < placeValues[i] - 5; j++){
                    romanArray.push(romNumerals[index]);
                }
            }
            if (placeValues[i] === 9){
                romanArray.push(romNumerals[index] + romNumerals[index-2]);
            }
        }
        index += 2;
    }
    return romanArray.join('');

}

if (require.main === module){
    console.log('Running sanity checks for toRoman2:');

    console.log(toRoman2(25) === 'XXV');
    console.log(toRoman2(10) === 'X');
    console.log(toRoman2(20) === 'XX');
    console.log(toRoman2(44) === 'XLIV');
    console.log(toRoman2(144) === 'CXLIV');
    console.log(toRoman2(2594) === 'MMDXCIV');
}
module.exports = toRoman2;