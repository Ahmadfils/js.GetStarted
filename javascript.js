
//Triangle avec les #
for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= i; j++) {
        console.log('#');
    }
}
//addition du 1-10
let total = 0, count = 1;
while(count <= 10){
    total += count;
    count += 1;
}
console.log(total)
console.log(typeof total);
console.log(count < 10);
console.log("5" + 1);
console.log("5" - 1);

//prompt in js

let thenumber = Number(prompt("Pick a number !"));
if(!Number.isNaN(thenumber)){
    console.log("Your number is the square root of : " + thenumber * thenumber);
} 
else {
    console.log("Hey. Why didn't you give me a number ?");
}

const square = function(x){
    return x * x;
};

console.log(square(12));

const roundTo = function(n, step){
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log (roundTo(200, 10));

function printFarmInventory(cows, chicken){
    let cowString = String(cows);
    while (cowString.length < 3) {
       cowString ="0" + cowString;  
    }
    console.log(`${cowString} Cows`);

    let chickenString = String(chicken);
    while (chickenString.length < 3) {
        chickenString ="0" + chickenString;  
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);
