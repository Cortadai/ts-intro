

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====
*/

let habilidades: (string | boolean | number)[] = ["bash","counter","healing", 100, false];
console.log(habilidades);

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[]
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'David',
    hp: 100,
    habilidades: ["bash", "counter", "healing"]
}

personaje.puebloNatal='Pueblo Paleta';

console.table(personaje);