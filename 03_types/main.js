//
// JS
//
var titi = 4;
// Implicitement, titi devient une variable de type number
// titi = "text";
// Ici, j'ai une erreur car je ne peux pas réaffecter à une variable de type number une valeur string
// Solution
var tutu;
tutu = "text";
tutu = 3;
tutu = true;
// typer de manière implicite
var b;
b = 4;
var c;
var d;
var e;
var f = ["1", 2, true, ["toto", "titi"]];
var g = [2, 2, 4, 5];
// Enum
var ColorRed = 0;
var ColorOrange = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Orange"] = 1] = "Orange";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Orange; // 1
var color2 = Color.Orange; // 1
