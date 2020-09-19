
/****************************** 1. Destructuring Objects ****************************/

const player = {
  name: 'Lebron James',
  club: 'LA Lakers',
  address: {
    city: 'Los Angeles'
  }
};

// console.log( player.address.city );

const { name, club, address: { city } } = player;

// console.log(`${name} plays for ${club}`);

console.log(`${name} lives in ${city}`);



/****************************** 2. Destructuring Arrays ****************************/

let [firstName, middleName, lastName] = ['Sai', 'Praveen', 'Anumukonda'];

lastName = 'Clements';

console.log(firstName)
console.log(middleName)
console.log(lastName)





/****************************** 3. Object Literals ****************************/

function addressMaker(city, state) {
  const newAdress = {city, state};
  
  console.log(newAdress);
}

addressMaker('Austin', 'Texas');

function addressMaker1(address) {
  const {city, state} = address;
  
  const newAddress = {
      city,
      state,
      country: 'United States'
  };
  console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMaker1({city: 'Austin', state: 'Texas'});

/**********************************************************************************/