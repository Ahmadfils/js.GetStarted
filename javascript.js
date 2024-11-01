
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

//factorielle
function factorial(n){
    if (n == 0){
        return 1;
    }
    else {
        return factorial(n - 1) * n;
    }

}
console.log(factorial(10));

let day1 = {
    squirrel : false,
    events : ["work", "touched tree", "pizaa", "pizza"],
}

let varfizz = 'Fizz';
let varbuzz = 'Buzz';
let varboth = 'FizzBuzz';

for(let i = 1; i <= 100; i++){
    if(i % 3 == 0){
        console.log(varfizz);
    }else if(i % 5 == 0){
        console.log(varbuzz);
    }else if(i % 3 == 0 && i % 5 == 0){
        console.log(varboth);
    }else{
        console.log('No response !');
    }
}

let listofnumbers = [3, 4, 4, 18, 27, 247, 289];
console.log(listofnumbers[4]);
console.log(listofnumbers[3]);