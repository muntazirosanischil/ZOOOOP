var animalPopulation = 0;
function run(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    var stinger = new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");
    var zoebot = new Zookeeper("Zoebot");
    var zoop = [tigger, pooh, rarity, gemma, stinger];
    zoebot.feedAnimals(zoop, "diarrhea");
    Animal.getPopulation();
}

class Animal {
    constructor(name, food){
        this.animal = name;
        this.favoriteFood = food;
        animalPopulation++;
    }
    sleep() {
        console.log(this.animal + " sleeps for 8 hours");
    }
    eat(food) {
        this.result = this.animal + " eats " + food;
        console.log(this.result);
        if (food == this.favoriteFood) {
            console.log("YUM!!! " + this.animal + " wants more " + food);
        } else {
            this.sleep();
        }
    }
    static getPopulation() {
        console.log(animalPopulation);
    }

}


class Tiger extends Animal {
    constructor(name) {
        super(name,"meat");
    }
}

class Bear extends Animal {
    constructor(name) {
        super(name,"fish");
    }
    sleep() {
        console.log(this.animal + " hibernates for 4 months");
    }
}

class Unicorn extends Animal {
    constructor(name) {
        super(name, "marshmallows");
    }
    sleep() {
        console.log(this.animal + " sleeps in a cloud");
    }
    eat(food) {
        this.result = this.animal + " eats " + food;
        console.log(this.result);
        if (food == this.favoriteFood) {
            console.log("YUM!!! " + this.animal + " wants more " + food);
        }
        this.sleep();
    }
}
class Giraffe extends Animal {
    constructor(name) {
        super(name, "leaves");
    }
    eat(food) {
        this.result = this.animal + " eats " + food;
        if (food == this.favoriteFood) {
            console.log(this.result);
            console.log("YUM!!! " + this.animal + " wants more " + food);
            this.sleep();
        } else {
            console.log("YUCK!!! " + this.animal + " will not eat " + food);
        }
    }
}
class Bee extends Animal {
    constructor(name) {
        super(name, "pollen");
    }
    eat(food) {
        this.result = this.animal + " eats " + food;

        if (food == this.favoriteFood) {
            console.log(this.result);
            console.log("YUM!!! " + this.animal + " wants more " + food);
            this.sleep();
        } else {
            console.log("YUCK!!! " + this.animal + " will not eat " + food);
        }
    }
    sleep(){
        console.log(this.animal + " never sleeps");
    }
}

class Zookeeper {
    constructor(name) {
        this.keeper = name;
    }
    feedAnimals(animals, food) {
        console.log(this.keeper + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals")
        for (var i = 0; i < animals.length; i++) {
            animals[i].eat(food);
        }
    }
}