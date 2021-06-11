// Code goes here


function matrixBuilder(howMany){
    var matrixArray = Array.from(Array(howMany), () => 
        new Array(howMany).fill(1));
    return matrixArray;
}

function otherArray (howMany) {
    someOtherArray = new Array(howMany).fill(1)
    return someOtherArray
}

// do not change anything from this line down
console.log(matrixBuilder(5))
console.log(otherArray(5))

