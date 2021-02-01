let message = "abc"; // le type est implicite
// let message : string = "abc";

let result : boolean = message.endsWith("c");

let message2;
message2 = "text";

let result2 = message2.endsWith("t");

// Je ne précise pas le type de message 2
// donc TS interpète comme un type any
// donc je n'ai pas accès aux méthodes objet de type string

// Pour régler ce problème en TS

// J'aimerai explicitement dire que message2 c'est un type string
// Meme si je ne l'ai pas fait au moment de sa déclaration

// Solution 1

let message3;
message3 = "text";

let result3 : boolean = (message3 as string).endsWith("t");

// Solution 2

let result4 : boolean = (<string>message3).endsWith("t");

// Ce qu'on précise que message3 est de type string
// Pour pouvoir avoir accès aux méthodes string