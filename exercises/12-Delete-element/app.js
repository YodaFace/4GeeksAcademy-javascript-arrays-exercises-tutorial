var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
// return  nameOfArray.Function(item in array looped => item to compare !== to this)  
    return people.filter        (names               => names     !== personName)

// MY ORIGINAL CODE 
    // let newPeople = []
    // for (let i = 0; i < people.length; i++) {
    //     if (people[i] !== personName) {
    //         newPeople.push(people[i]);
    //     }
    // }
    // return newPeople;
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));