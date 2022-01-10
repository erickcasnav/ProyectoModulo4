const prompt=require("prompt-sync")();
console.clear();
console.log("App para imprimir la fecuencia de fibonacci /n Desarrollado por: Erick Castro ");
var a=0;
var b=1; 
var c=0; 
var limite = 0; 

limite =prompt("Escriba el limite de la serie ");
console.log(limite);

for(;;){
    c=a+b; 
    a=b; 
    b=c; 
    if(c>limite){
        break;
    }
    process.stdout.write(c+" ");
    
}