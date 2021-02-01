var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.sePresenter = function () {
        console.log("Bonjour à tous, je m'appelle " + this.name + " " + this.firstName + " " + "et j'ai " + this.age + " ans, j'habite " + this.adress + " et j'ai les cheveux " + this.hairColor);
    };
    return Human;
}());
// Pour déclarer une variable de type Human
var amine_1;
var amine = new Human();
amine.age = 27;
amine.firstName = "Amine";
amine.name = "Chaair";
amine.adress = "rue de Belleville Paris 20";
amine.hairColor = "noir";
amine.sePresenter();
