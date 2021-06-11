var arr = [45,67,87,23,5,32,60];

//Your code here.

// START OF GARBAGE newArr= []
// for(let i = 0; i < 1; i++){
//     console.log("Initial array: ["+arr+"]");
//     newArr
//     console.log("Final array:   ["+arr.reverse()+"]"); 
// } END OF GARBAGE

let newArr = []
for(let i = arr.length -1; i >= 0; i--){
    newArr.push(arr[i]); 
    }
    // console.log("Initial array: ["+arr+"]");
    console.log("Final array:   ["+newArr+"]");