class Human {

    age: number; // fields
    hobbies: string[]; // fields
    firstName: string; // fields
    name: string; // fields
    adress: string; // fields
    hairColor: string; // fields
    hasChildren: boolean; // fields

    sePresenter(){
        console.log("Bonjour à tous, je m'appelle " + this.name + " " + this.firstName + " " + "et j'ai " + this.age + " ans, j'habite " + this.adress + " et j'ai les cheveux " + this.hairColor);
    }
}

// Pour déclarer une variable de type Human
let amine_1 : Human;

let amine = new Human();
amine.age = 27;
amine.firstName = "Amine";
amine.name = "Chaair";
amine.adress = "rue de Belleville Paris 20";
amine.hairColor = "noir";

amine.sePresenter();

