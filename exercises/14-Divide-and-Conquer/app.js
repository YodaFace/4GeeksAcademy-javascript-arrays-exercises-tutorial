let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here

// var numbers = [4, 9, 16, 25];
// var x = numbers.map(Math.sqrt)
// document.getElementById("demo").innerHTML = x;

// list_of_numbers.map (number) 
function mergeTwoList (anArray) {
    let even = []
    let odd = []
    let newArray = []
    for (i = 0; i < anArray.length; i++) {
        if (anArray[i] % 2 == 0){
            even.push(anArray[i])
        }
        else {
            odd.push(anArray[i])
        }
    }
    newArray = odd.concat(even);
    return newArray
}

console.log(mergeTwoList(list_of_numbers))
