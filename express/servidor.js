var cafesito = require("express");
var aplicacion = cafesito();

aplicacion.get("/",inicio);
aplicacion.get("/cajero",cajero);
/*aplicacion.get("/Images/cajero.webp",imagenCajero);

function imagenCajero(peticion,resultado)
{
  resultado.sendFile(__dirname+"/CajeroAutomatico/Images/cajero.webp")
}*/

function inicio(peticion,resultado)
{
  resultado.sendFile(__dirname + "/Public/CajeroAutomatico/index.html");
}

function cajero(peticion,resultado)
{
  resultado.sendFile(__dirname + "/Public/CajeroAutomatico/index.html");
}
aplicacion.use(cafesito.static("Public"));

aplicacion.listen(8989);

console.log("Servidor Online xd");
