const { error } = require("console");
let mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    database: "apolodb",
    user: "root",
    password: ""
});

conexion.connect(function(error){
    if(error){
        throw error;
        conexion.end();
    }else{
        console.log("Conectado a la base de datos");
    }
});
//conexion.end();
//Consulta
const Usuarios = "SELECT * FROM tbl_usuarios";
conexion.query(Usuarios, function(error,lista){
    if(error){
        throw error;
    }else{
        console.log(lista);
        //console.log(lista.length);
        //console.log(lista[0]);
        //console.log(lista[0].nombres);
    }
})
conexion.end();