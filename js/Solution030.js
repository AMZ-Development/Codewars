//PREP
//We will recieve three inputs, one array with name and last names, and two separate strings
//the two separate strings will have a name of a city, and a name of a state
//return the following message:
//"Hello, name lastName! Welcome to city, state!

function sayHello(name, city, state){
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')); //Output: 'Hello, John Smith! Welcome to Phoenix, Arizona!'