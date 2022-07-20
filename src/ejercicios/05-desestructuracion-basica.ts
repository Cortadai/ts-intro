

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen:50,
    segundo:35,
    cancion:"Primera cancion",
    detalles:{
        autor:"Matias el Humilde",
        anio:1995
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

//console.log("Volumen: ", volumen);
//console.log("Segundo: ", segundo);
//console.log("Cancion: ", cancion);
//console.log("Autor: ", autor);
//console.log("Año: ", anio);

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [ p1, p2, p3 ] = dbz;

console.log("P1: ", p1);
console.log("P2: ", p2);
console.log("P3: ", p3);
