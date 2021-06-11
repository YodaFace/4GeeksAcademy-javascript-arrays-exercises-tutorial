let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"

par = par.toLowerCase();

// your code here
function countString( stringInput )
{
let counts = {};
  //for loop to iterate over string
  for( let i = 0 ; i < stringInput.length ; i++)  { 
        //variable counting ocurrence 
        if (stringInput[i] !== " ") {
            if (stringInput[i] in counts) {
                counts[stringInput[i]]++; 
            } else {
                counts[stringInput[i]] = 1; 
            }
        }
  }
  return counts; 
}

console.log(countString(par));
