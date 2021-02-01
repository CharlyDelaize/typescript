class Human2 {

    age: number; // fields
    hobbies: string[]; // fields
    firstName: string; // fields
    name: string; // fields
    adress: string; // fields
    hairColor: string; // fields
    hasChildren: boolean; // fields

    constructor(name:string, firstName:string, age:number, adress:string, hairColor:string, has_children:boolean, hobbies:string[]) {
        this.age = age;
        this.hobbies = hobbies;
        this.firstName = firstName;
        this.name = name;
        this.adress = adress;
        this.hairColor = hairColor;
        this.hasChildren = has_children;
    }

    sePresenter(){
        console.log("Bonjour à tous, je m'appelle " + this.name + " " + this.firstName + " " + "et j'ai " + this.age + " ans, j'habite " + this.adress + " et j'ai les cheveux " + this.hairColor);
    }
}

let amine_2 = new Human2("Amine", "Chaair", 27, "Rue de Belleville Paris 20", "noir", false, ["marché financier", "moto", "escalade"]);

amine_2.sePresenter();