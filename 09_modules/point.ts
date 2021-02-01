export class Point { // Pour exporter ce code à l'extérieur de point.ts
    constructor(private x?:number, private y?:number){

    }
    draw() {
        console.log("X:" + this.x + "Y:" + this.y);
    }
}