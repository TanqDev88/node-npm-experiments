import{createServer} from 'node:http';

const servidor = createServer ( (solicitud, respuesta)=>{
console.log('Respuesta de que alguien intento entrar en el server');
})

servidor.listen(3000);

console.log('Ejecutando servidor Node');