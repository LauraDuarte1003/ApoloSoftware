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


//Incertar datos base de datos

const NUEVOREGISTRO ="INSERT INTO tbl_Usuarios(idDocumento, tipoDocumento, nombres, apellidos, FichaID, telefono, email, contrasena, rol_id, Imagen) VALUES('79653240', 'Cédula de Ciudadanía', 'Jaime humberto','Arevalo Roldan',NULL,'3132919226','jaime171431@soy.sena.edu.co','Usuario03105*','2', NULL )";
conexion.query(NUEVOREGISTRO, function(error,rows){
    if(error){
        throw error;
    }else{
        console.log("datos insertados corectamente");
    }
});

//Modificar 
const MODIFICAR = "UPDATE tbl_usuarios SET nombres = 'Jaime Humberto' WHERE idDocumento=79653240";
conexion.query(MODIFICAR, function(error,rows){
    if(error){
        throw error;
    }
    else{
        console.log("datos modificados corectamente");
    }
});


//eliminar datos
const ELIMINAR = "DELETE FROM tbl_usuarios WHERE idDocumento=79653240";
conexion.query(ELIMINAR, function(error,rows){
    if(error){
        throw error;
    }
    else{
        console.log("datos eliminados corectamente");
    }
});

//Consulta base de datos
const Usuarios = "SELECT * FROM tbl_usuarios";
conexion.query(Usuarios, function(error,lista){
    if(error){
        throw error;
    }else{
        console.log(lista);
        //console.log(lista[lista.length-1]);
        //console.log(lista[lista.length-1]);
        //console.log(lista[0].nombres);
    }
});

conexion.end();