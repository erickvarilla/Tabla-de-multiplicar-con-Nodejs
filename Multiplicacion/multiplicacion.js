const fs = require('fs');
const colors = require('colors');
let data = '';
let data2 = '';

let ListarMultiplicacion = ((base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`Hay problemas con la base ${base} o el limite ${limite}`);
            return;
        } else {
            for (let i = 1; i <= limite; i++) {
                data2 += `${base} * ${i} = ${base*i}\n`;
            }
            resolve(`${data2}`);
        }
    });
});



let CrearArchivo = ((base, limite) => {
    return new Promise((resolver, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`Hay problemas con la base ${base} o el limite ${limite}`);
            return;
        } else {
            console.log(`Tabla de multiplicar del ${base}`.green);
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base*i}\n`;
            }
            // con esta linea de comando guardo esta informacion en un archivo de .txt 
            // el primer parametro es la ruta donde se va a guardar 
            // el segundo es la informacion que yo voy a contener en el archivo 
            // y el tercero es el error 
            fs.writeFile(`./archivostxt/tabla-${base}.txt`, data, (err) => {
                if (err) reject(err)
                else {
                    resolver(`tabla-${base}.txt`);
                }
            });
        }
    });
});
// con la propiedad module y entrando en el atributo de export agrego esta funcion 
// para ser llamada en cualquier archivo de mi proyecto 
module.exports = {
    CrearArchivo,
    ListarMultiplicacion
}