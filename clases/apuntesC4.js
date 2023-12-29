const { error } = require('console');
const fs = require ('fs')

/*fs.writeFileSync('./test.json','contenido del archivo de prueba', {encoding:'utf-8'})*/

/*hasta minuto 46 creacion de json con productos, como mostrarlos por consola y su tabulacion */
/*json.stringify es para convertir el array a string y rl json.parse es para pasar de string a array*/
/*a partir de minuto 50 muestra como agregar un nuevo objeto al array */

/*a parttir de 1:04 muestra lo mismo de a travez de callbacks */

/*en las dos formas primero se lee el archivo y despues se escribe */

/*a partir del 1:25 el mismo metodo pero con promesas, es el recomendado de usar */

fs.promises.readFile('./test.json',{encoding:'utf-8'})
.then(res=>{
    console.log('Promise: ',res);
})
.catch(error =>{
    console.log('Error: ',error);
})

/*eso es como se lee, a partir del 1:30 muestra como se escribe*/
/*1:32 async y await y try y catch, puedo elegir entre promesa o esto */