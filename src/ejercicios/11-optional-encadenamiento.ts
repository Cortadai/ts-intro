/*
    ===== Código de TypeScript =====
*/

interface Pasajero{
    nombre:string;
    hijos?:string[];
}

const pasajero1: Pasajero = {
    nombre:"David"
}

const pasajero2: Pasajero = {
    nombre:"Matias",
    hijos:["Humidel","Facilmente"]
}

function imprimirHijos(pasajero:Pasajero):void{
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimirHijos(pasajero1);
imprimirHijos(pasajero2);