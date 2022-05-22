var jf = require("johnny-five");
var circuito = new jf.Board();
var led;
circuito.on("ready", iniciar);
function iniciar()
{
  led = new jf.Led(13);
  //led.blink(1000);led.stop();
  prender();
  console.log("xd");
}
function prender()
{
  led.on();
  setTimeout(apagar,2000);
}

function apagar()
{
  led.off();
  setTimeout(prender,2000);
}
