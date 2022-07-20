/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy("Hola Mundo");
let soyNumber = queTipoSoy(100);
let soyBoolean = queTipoSoy(true);
let soyArray = queTipoSoy([1,2,3]);

let soyExplicito=queTipoSoy<number>(50);

console.log(queTipoSoy(soyString));
console.log(queTipoSoy(soyNumber));
console.log(queTipoSoy(soyBoolean));
console.log(queTipoSoy(soyArray));
console.log(queTipoSoy(soyExplicito));