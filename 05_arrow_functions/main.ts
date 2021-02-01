//
// JS
//

function ma_fonction(){
    console.log("hello world");
}

// Fonction variabilté

var maFonction = function(message) {
    console.log("Hello World");
};

// Déclarer une fonction

let doLog = () => console.log("hello world"); // sans argument
let doLog2 = (message) => console.log(message); // sans argument

doLog(); // Appel de la fonction

let square_number = (my_number : number) => my_number * my_number;

let result5 = square_number(4);