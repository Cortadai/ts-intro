

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    desc: string;
    precio: number;
}

const telefono:Producto = {
    desc: "Nokia",
    precio: 150
}

const tablet:Producto = {
    desc: "Ipad",
    precio: 400
}

export function calculaISV(productos:Producto[]):[number, number] {
    let total = 0;
    productos.forEach(({precio})=>{
        total += precio;
    })
    return [total, total * 0.15];
}

const articulos = [telefono, tablet];
const [ total, isv] = calculaISV(articulos);
console.log("ISV - total: ", total);
console.log("ISV - isv: ", isv);