var coordinatesArray = [
        [33.747252,-112.633853],[-33.867886, -63.987],[41.303921, -81.901693],[-33.350534, -71.653268]
        ];

function findLong(someArray ) {
    for (let i = 0; i < someArray.length; i++) {
        // console.log(someArray[i][1])

        // console.log("This is the entire array")
        // console.log(someArray)
        // console.log("This is the single index of the array")
        // console.log(someArray[i])
        console.log("This is a single position in the index of the array")
        console.log(someArray[i][1])
    }
}
findLong(coordinatesArray)


// console.log("This is the entire array")
// console.log(coordinatesArray)
// console.log("This is the entire index of the array")
// console.log(coordinatesArray[i])
// console.log("This is a single position in the index of the array")
// console.log(coordinatesArray[0][i])

