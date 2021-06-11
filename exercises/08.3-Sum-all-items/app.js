

function sumTheElements(theArray){
	
	var total = 0;
	
    //your code here
    for (let i = 0; i < theArray.length; i++){
        total = total + theArray[i];
    }
	return total;
}

sumTheElements([185192,370384,92596,46298,46298,61729,61729,61730])
