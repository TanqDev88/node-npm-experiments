import{createServer} from 'node:http';

const servidor = createServer ( (peticion, respuesta)=>{
console.log('Respuesta de que alguien intento entrar en el server');



respuesta.writeHead(200, {'content-type': 'text/html'});
respuesta.write('respuesta parar la url'+ peticion.url);
})

servidor.listen(3000);

console.log('Ejecutando servidor Node');