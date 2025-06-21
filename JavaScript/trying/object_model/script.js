var taco1={
    "tortilla": "soft corn tortilla",
    "protein": "tinga chicken",
    "cheese": "cotija cheese",
    "toppings":["lettuce","pico de gallo","guacamole"],
    "tacoInfo": function() {
        console.log("tortilla: " + this.tortilla);
        console.log("protein:" + this.protein);
        console.log("cheese:" + this.cheese);
        console.log("topping:" + this.toppings);
    }
}
taco1.tacoInfo();