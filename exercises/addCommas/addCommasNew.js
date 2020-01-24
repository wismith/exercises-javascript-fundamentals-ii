function joinWithComma(array){
    // Create working string for adding elements of array and commas
    let workingString = '';

    // Start with for loop blueprint
    for (let i = 0; i < array.length; i++){
        // Concatenate working string with element from index i of array
        workingString += array[i];

        // If index i of array is not last index, concatenate a comma
        if (i < array.length -1 ){
            workingString += ',';
        }
    }
    return workingString;
}

console.log(joinWithComma([123,123,123]) === '123,123,123');
console.log(joinWithComma(['abc', 'def', 'gh']) === 'abc,def,gh');
console.log(joinWithComma([123123123]) === '123123123');




/*
We are trying to turn ['a', 'b', 'c'] into 'a,b,c'
*/