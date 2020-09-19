//function declaration
function breakfastMenu() {
  return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
  return "I'm going to eat pizza for lunch";
}

const dinnerMenu = (food) => {
  return `I'm going to eat a ${food} for dinner`;
}

//const dinnerMenu = (food) => `I'm going to eat a ${food} for dinner`; // if there is only an expression in the body, no need to enclose in { }

// const dinnerMenu = food => `I'm going to eat a ${food} for dinner`; // if there is only one parameter, no need to use ()


console.log(breakfastMenu());
console.log(lunchMenu());
console.log( dinnerMenu("chicken salad") );