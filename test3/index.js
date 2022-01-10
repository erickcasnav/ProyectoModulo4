// incluimos la referencia para trabajar como servidor web.
const http=require('http');
const hostname='127.0.0.1';
const port=3000;

//Instanciamos servidor
const server=http.createServer((req,res)=>{

    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    var salida='mi primera app web con nodejs';
    res.end(salida);
});

server.listen(port,hostname,()=>{
console.log(`El servidor esta corrienda en http://${hostname}:${port}/`);


})