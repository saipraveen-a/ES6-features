# let & const is ES6

The code sample demonstrates 
	
	1.  Usage of let and const in ES6. 

		Before ES6, only var was available to declare variables. The execution of JavaScript code happens in 2 phases

		1. The Creation phase (where the Execution Context is created). This involves parsing of the code and allocating resources for variables and functions
			within the lexical scope. The Execution context makes available the this object, the global object (if its a Global Execution Context) and the Outer Environment (which is the Variable Environment of the Execution Context of the function lexically containing the called Function) 
		2. The Execution phase (where the function code is executed using the Execution Context that was created in Creation Phase). Any variables used within the scope of the Execution Context of the executing function are allocated resources in the Variable Environment. If a variable could not be found in the Variable Environment, the JS engine looks for that variable in the Outer Environment (which is the lexical environment)

		With var, both these statements hold true. So, if a variable was declared even before its usage, we could still use it as it was allocated resources in the Creation Phase.
		With let and const, the variables are not allocated resources in the Creation Phase. As a result, there is no hoisting that happens with let and const unlike var