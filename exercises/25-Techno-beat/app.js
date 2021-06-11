
// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))


function lyricsGenerator(array) {
        let buildTheBeats = ""
        for (let beat = 0; beat < array.length; beat++) {
            if (array[beat] == 0){buildTheBeats += "Boom "}
            else if (array[beat] == 1){
                buildTheBeats += "Drop the base "
                if (array[beat-1] == 1 && array[beat-2] == 1)
                    {buildTheBeats += "!!!Break the base!!! "}
                }
            }
        return buildTheBeats;
}
// const lyricsGenerator = (array) => {
//   let finalString = ""
//   for (let i = 0; i < array.length; i++){
//     if (array[i] == 0){finalString += "Boom "}
//     else if(array[i] == 1){
//       finalString += "Drop the base "
//         if (array[i -1] == 1 && array[i -2] == 1 ){
//       finalString += "!!!Break the base!!! "
//         }
//     }
//   }
//   return finalString
// }
