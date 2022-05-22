var cafesito = require("express");
var aplicacion = cafesito();
var jf = require("johnny-five");
var circuito = new jf.Board();
var led;


aplicacion.get("/",encendido);
aplicacion.get("/On",encendido);
aplicacion.get("/Off",apagado);

circuito.on("ready", iniciar);
function iniciar()
{
  led = new jf.Led(13);
  console.log("xd");
}
function prender()
{
  led.on();
  //setTimeout(apagar,5000);
  console.log("Led Encendido");
}

function apagar()
{
  led.off();
  console.log("Led Apagado");
}


function encendido(peticion,resultado)
{
  resultado.sendFile(__dirname + "/Public/LedOnOff/on.html");
  prender();
}

function apagado(peticion,resultado)
{
  resultado.sendFile(__dirname + "/Public/LedOnOff/off.html");
  apagar();
}
aplicacion.use(cafesito.static("Public"));

aplicacion.listen(8989);

console.log("Servidor Online xd");
