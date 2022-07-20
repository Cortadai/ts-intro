

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

function multiplicar(numero:number, otroNumero?:number, base:number=2):number {
    return numero * base;
}

const resultado1 = multiplicar(5, 0, 10);
const resultado2 = multiplicar(5, 10);

console.log(resultado1);
console.log(resultado2);

interface PersonajeLOTR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje:PersonajeLOTR, curarX:number):void{
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOTR = {
    nombre:"David",
    pv:50,
    mostrarHp(){
        console.log("Puntos de vida: ", this.pv);
    }
} 

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();
