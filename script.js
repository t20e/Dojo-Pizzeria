function pizzaOven(crustType, sauceType, cheeses, toppings) {
    pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings
    
    return pizza;
 }

 console.log(pizzaOven('traditional', 'mozzarella', 'deep fish', ['pepperoni', 'sausage'] ) );
 console.log(pizzaOven('hand tossed', 'marinara', ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])); 
console.log(pizzaOven('thin','tradition', 'cheddear cheese', ['bufalo', 'chiken']))


// random pizza create 
console.log('print random pizza below');  
let pizzaTop = ['Pepperoni','Mushroom','Extra cheese','Sausage','Onion','Black olives','Green pepper','Fresh garlic'];
let pizzaCrust = ['Stuffed Crust','Cracker Crust','Flat Bread Crust','Thin Crust','Cheese Crust Pizza','Thick Crust Pizza','Wrapping It Up'];
let pizzaCheese = ['Mozzarella Cheese','Provolone Cheese','Cheddar Cheese','Parmesan Cheese','Gouda','Goat Cheese','Gruyere','Ricotta'];
let pizzaTop2 = ['Pepperoni','Mushroom','Extra cheese','Sausage','Onion','Black olives','Green pepper','Fresh garlic'];




var num1 = pizzaTop[(Math.ceil(Math.random() *pizzaTop.length))];
var num2 = pizzaCrust[(Math.ceil(Math.random() *pizzaTop.length))];
var num3 = pizzaCheese[(Math.ceil(Math.random() *pizzaTop.length))];
var num4 = pizzaTop2[(Math.ceil(Math.random() *pizzaTop2.length))];



function  randomPizza(crustType1, top1, cheeses3, top2){


 pizzaRandom = {}
        pizzaRandom.crustType1 = crustType1;
        pizzaRandom.top1 = top1;
        pizzaRandom.cheeses3 = cheeses3;
        pizzaRandom.top2 = top2;
        return pizzaRandom;

}

console.log(randomPizza(num1,num2,num3,num4));