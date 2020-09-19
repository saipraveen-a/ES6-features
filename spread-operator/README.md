# for of loop in ES6

The code sample demonstrates 
	
	1. Usage of for of loop in ES6. This is a better version to be used than the existing for in loop in ES5. 

	var someArray = [1, 2, 3, 4, 5]

	for (var i in someArray) {
		// This will just give the key (which is the position of the element). In Javascript, arrays are also objects with the keys being the position of the element
		console.log(i)

		console.log(someArray[i]) // this gives the value  
	}