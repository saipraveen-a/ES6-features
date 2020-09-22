
// setTimeout used to mimic an asynchronous task
const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = false;
            
            if( error ) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}

buyFlightTicket()
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );


const userData = new Promise((resolve, reject) => {
    const error = true;
    
    if(error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Sai',
            age: 34,
            email: 'someemail@gmail.com'
        });
    }
});

userData
    .then((data) => console.log(data))
    .catch((error) => console.log(error));