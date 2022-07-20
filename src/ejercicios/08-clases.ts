
console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====
*/


class Persona{
    constructor(
        public nombre:string,
        public direccion:string
    ){}
}

class Heroe extends Persona{
    constructor(
        public alterEgo:string,
        public edad:number,
        public nombreReal:string 
    ){
        super( nombreReal, "NY, USA");
    }
}

const ironman = new Heroe("Iron Man", 40, "Tony Stark");
console.log(ironman);