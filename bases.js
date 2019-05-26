// en node la pagina de inicio o el archivo principal solo llama los demas archivo y ejecuta
// las funciones el codigo fuente se tiene en otros archivos que se llaman 
// para llamar a un nuevo archivo tenemos encuenta el module que es una propiedad
// de node que se ejecuta en odo el proyecto y tenemos encuenta para este ejemplo
// la parte del export 
// esto debe devolver una promesa
// console.log(module);
// importacion del archivo 
// const multiplicacion = require('./Multiplicacion/multiplicacion');
// podemos hacer una destructuracion para no poner multiplicacion.CrearArchivo(base)
// y simplificar mas nuestro codigo solo le puede hacer con let y const 

// incluimos el archivo de yargs.js 

const { argv } = require('./configuracion/yargs');
const colors = require('colors');

const { CrearArchivo, ListarMultiplicacion } = require('./Multiplicacion/multiplicacion');
// ESTA E UNA FORMAD E HACERLA 
// let base = 10;
// let parametro = process.argv[2];

// let base = parametro.split('=')[1];
// con argv.base imprimo el valor de la base que introduje por parametro en la consola
// al igual que el limite
console.log('Base Introducida: ' + argv.base);
console.log('Limite: ' + argv.limite);
console.log(argv);

// para hacer una diferecnia entre los comando introducidos ya sea 
// listar o crear podemos usar un stwich 
// en el argv se guardan los comandos independientes en un array que es el _: 
let comando = argv._[0]; // aqui capturo de argv cual es el comando indepentiende que lanzo

switch (comando) {
    case 'listar':
        console.log('Listar tabla de multiplicar');
        ListarMultiplicacion(argv.base, argv.limite).then(result => {
            console.log('El limite por defecto es 10');
            console.log(`Listado de la tabla ${argv.base}\n`.red + result);
        }).catch(error => {
            console.log('Ocurrido un Error!!! ' + error);
        });
        break;
    case 'crear':
        console.log(`Crear tabla de multiplicar del ${argv.b}`);
        // esto es lo que debemos tener en el archivo principal el llamdo de funciones 
        CrearArchivo(argv.base, argv.limite).then(result => {
            console.log(`Archivo creado: ${result}`);
        }).catch(error => {
            console.log(`La base introducida ${error} no es un Numero`);
        });
        break;
    default:
        console.log('Comando no reconocido');
}