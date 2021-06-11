var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];


function findBiggestNumber(arrayToCheck) {
    var biggestNumber = 0
    for (let i = 0; i < arrayToCheck.length; i++){
        // if (arrayToCheck[i] > biggestNumber) {
        //     biggestNumber = arrayToCheck[i]
        // }
        // TERNARY OPERATOR METHOD 
        arrayToCheck[i] > biggestNumber ? biggestNumber = arrayToCheck[i] : biggestNumber
     }
    return biggestNumber

}

console.log(findBiggestNumber(myArray))
