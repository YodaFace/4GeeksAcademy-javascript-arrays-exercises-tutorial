var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
    //add your code here and return the new value
    let fHeight = ((value / 5) * 9) +32;
    fHeight = fHeight.toFixed(2);
	return parseFloat(fHeight)
});

console.log(arrayOfFahrenheitValues);