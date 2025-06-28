var aaa ="fdfg dfgdf gd hd hdgh hgfh"
var bbb= aaa.split(" ");
console.log(bbb);
console.log(bbb.join());
console.log(bbb.join("-"));
console.log(bbb.join(""));


var day = new Date()
if (day.getDay()==5){
    console.log("cool its the weekend");
}else{
    console.log("boring");
}
console.log(day.getDay());

function fibonacciArray(n){
    var fibArr =[0,1];
    for (let i = 0;i<fibArr.length;i++){
        fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2]);
        if (fibArr.length===n){
            break
        }
    }
    return fibArr
}
var result = fibonacciArray(10);
console.log(result);


function pizzaOven(crust,sauce,cheese,topping){
    var pizza={};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.topping = topping;
    
    return pizza;
}
var p1 = pizzaOven("deep dish","traditinal",
    ["mozzarella"],["prpperoni","sausage"]);
var p2 = pizzaOven("hand tossed","marinara",
    ["mozzarella","feta"],["mashrooms","olives","arugula"]);
var p3 = pizzaOven("stuffed crust","bbq",
    ["mozzarella","blue cheese crumbles(optinal)"],["grilled chicken","red onions","scallions"]);
var p4 = pizzaOven("thin crust","buffalo",
    ["mozzarella","cheddar"],["breaded chicken","jalapenos","ranch drizzle"]);

console.log("First Pizza");
console.log(p1);
console.log("Second Pizza");
console.log(p2);
console.log("Therd Pizza");
console.log(p3);
console.log("Forth Pizza");
console.log(p4);



function randomPizza() {
    var options = {
        crust: ["thin", "thick", "stuffed", "deepdish"],
        sauce: ["tomato", "alfredo", "pesto", "buffalo"],
        cheese: [["mozzarella"], ["cheddar"], ["mozzarella", "feta"], ["parmesan", "goat cheese"]],
        toppings: [["pepperoni"], 
        ["sausage"], 
        ["mushrooms", "onions"], 
        ["spinach", "olives", "tomatoes"]]
    };

    function randomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    return {
        crust: randomItem(options.crust),
        sauce: randomItem(options.sauce),
        cheese: randomItem(options.cheese),
        toppings: randomItem(options.toppings)
    };
}
console.log("Random Pizza");
console.log(randomPizza());