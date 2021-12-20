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
