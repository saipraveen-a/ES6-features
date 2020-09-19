let numArray = [1,2,3,4,5];

//console.log(numArray.indexOf(3) !== -1)
console.log(numArray.includes(3))

const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

if( listIngredients.includes("chocolate")) {
    console.log("We are going to make a chocolate cake" );
} else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate" );
}