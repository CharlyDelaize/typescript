class Human3 {

    // En mettant les arguments en private, c'est comme si on déclarait chaque fields avant dans la classe
    // Les propriétés de la classe sont en privé
    // Donc je n'y ai pas accès à l'extérieur de ma classe

    constructor(private name:string, private firstName:string, private age:number, private adress:string, private hairColor:string, private has_children:boolean, private hobbies:string[]) {
        this.age = age;
        this.hobbies = hobbies;
        this.firstName = firstName;
        this.name = name;
        this.adress = adress;
        this.hairColor = hairColor;
        this.has_children = has_children;
    }

    sePresenter(){
        console.log("Bonjour à tous, je m'appelle " + this.name + " " + this.firstName + " " + "et j'ai " + this.age + " ans, j'habite " + this.adress + " et j'ai les cheveux " + this.hairColor);
    }

    getAge(){
        return this.age;
    }
}

let amine_3= new Human3("Amine", "Chaair", 27, "Rue de Belleville Paris 20", "noir", false, ["marché financier", "moto", "escalade"]);


// Access Modifers (l'accès aux propriétés et aux méthodes à l'intérieur d'une classe)

// public (par défaut) => accessible partout et par tous
// private => accessible que dans la classe
// protected => les méthodes et propriétés de la classe sont accessibles seulement dans le meme package ou sous classe dans différents package