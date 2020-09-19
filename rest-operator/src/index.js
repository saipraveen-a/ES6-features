function add(nums) {
    
  console.log(arguments);
}

function add1(...nums) {   
  console.log(nums);
}

add(4, 5, 7, 8, 12)

add1(4, 5, 7, 8, 12)

