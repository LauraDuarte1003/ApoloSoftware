//Importar la libreria
const express = require ("express");
//odjetos para llamar los metodos de express
const app =express();

/*rut  inicial
app.get("/",function(req,res){
    res.send("<h1> Hola Aprendises")
});*/

//ruta de archivos estaticos
app.use(express.static("public"));

//configurar el puerto usado oara ek servidor local
app.listen(5000,function(){
    console.log("El servidor es  http://localhost:5000");
});