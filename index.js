// Write your code here
class Breakfast{
    constructor(food,drink) {
        this.food = food
        this.drink = drink
    }
}

let breakfast1 = new Breakfast("eggs","orange juice");

class Lunch{
    constructor(salad,soup,drink){
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

let lunch1 = new Lunch("salad","tomato soup", "water")

class Dinner{
    constructor(salad,soup,entree,_dessert){
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this._dessert = _dessert
    }
}

let dinner1 = new Dinner("salad","corn soup","entree","chocolate cake")