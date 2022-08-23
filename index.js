
/*
// create a person object
let person = {
    firstName: 'Kara',
    lastName: 'Gardner',
    age: 30
}

//console.log(person.firstName)
//console.log(person['lastName'])


//destructuring

let meal = {
    appetizer: 'chips and queso',
    entree: 'steak fajitas',
    dessert: 'sopapillas',
    drink: 'sweet tea'
}

//let dessert = meal.dessert // little bit longer than destructured
//let {dessert} = meal
let {entree, drink, appetizer, dessert} = meal  // destructuring lets you call things in one line

//rename drink, changes the variable but not the key
let {drink: bestDrinkEver} = meal
// now drink does not exist as avariable


// console.log(dessert, entree, bestDrinkEver)
// console.log(meal)



//For in loops
//food = the object keys
for (food in meal){
    console.log(`For ${food} I had ${meal[food]}`)
}

// adding, changing and deleting properties from objects
person.occupation = 'Front-end Developer' // adds occupation 
person.age = 31 // changes age

delete person.lastName // removes the lastName but not the key itself

console.log(person)

*/





// Classes and extending classes
// this is a reference to the key

class Pet{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
}

//let donut = new Pet('Donut', 4)

//console.log(donut.name)


class Dog extends Pet {
    constructor(name, age, breed){
        super(name, age)

        this.breed = breed
    }

    bark(){
        console.log(`Bark! My name is ${this.name}`)
    }
}

let lassie = new Dog('Lassie', 5, 'Collie')
console.log(lassie)
lassie.bark()

class Cat extends Pet {
    constructor(name, age, color){
        super(name, age)
        this.color = color,
        this.temperment = 'Mean' // all cats default to be sweet
    }
    beNice (){
        this.temperment = 'Sweet'
        console.log(`${this.name} is now a nice cat`)
    }
}

let macy = new Cat('Macy', 2, "Grey")
console.log(macy.temperment)
macy.beNice()