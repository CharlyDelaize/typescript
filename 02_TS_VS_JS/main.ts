//
// JS
//

var toto = "msg";

//
// TS
//

let sa_variable = "msg2";

//
// JS
//

function doSomething() {
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log("la valeur de i à l'extérieur: " + i);
}

doSomething();

//
// TS
//

function doSomething_2() {
    for(let i = 0; i < 5; i++){
        console.log(i);
    }
    console.log("la valeur de i à l'extérieur: " + i);
}

doSomething_2();