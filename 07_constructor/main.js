var Human2 = /** @class */ (function () {
    function Human2(name, firstName, age, adress, hairColor, has_children, hobbies) {
        this.age = age;
        this.hobbies = hobbies;
        this.firstName = firstName;
        this.name = name;
        this.adress = adress;
        this.hairColor = hairColor;
        this.hasChildren = has_children;
    }
    Human2.prototype.sePresenter = function () {
        console.log("Bonjour à tous, je m'appelle " + this.name + " " + this.firstName + " " + "et j'ai " + this.age + " ans, j'habite " + this.adress + " et j'ai les cheveux " + this.hairColor);
    };
    return Human2;
}());
var amine = new Human2("Amine", "Chaair", 27, "Rue de Belleville Paris 20", "noir", false, ["marché financier", "moto", "escalade"]);
amine.sePresenter();
