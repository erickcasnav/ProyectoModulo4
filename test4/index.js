// incluimos la referencia para trabajar como servidor web.
const http=require('http');
const hostname='127.0.0.1';
const port=3000;

//Instanciamos servidor
const server=http.createServer((req,res)=>{

    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    var salida='<html><head></head><body><h1>mi primera app web <br> con nodejs';
    salida+='</h1><img src="https://erickcastro.000webhostapp.com/Metodo.jpg"> <br> <a href="https://github.com/erickcasnav" target="_blank">Entra a mi github</a></body></html>';
    res.end(salida);
});

server.listen(port,hostname,()=>{
console.log(`El servidor esta corrienda en http://${hostname}:${port}/`);


})