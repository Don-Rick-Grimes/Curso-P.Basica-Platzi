var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho_lienzo = d.width;
var alto_lienzo = d.height;

var texto_lineas = document.getElementById("texto_lineas");
var texto_pepitas = document.getElementById("texto_pepitas");
var boton = document.getElementById("botoncito");
var rango = document.getElementById("rango");
var tamañoDibujo = rango.value;

boton.addEventListener("click",dibujoPorClick);

function dibujoPorClick()
{
  d.width = rango.value;
  d.height = rango.value;
  ancho_lienzo = d.width;
  alto_lienzo = d.height;
  tamañoDibujo = rango.value;
  /*Limpiar el lienzo*/
  lienzo.clearRect(0,0,d.width,d.height);
  /*Dibujar Contorno ojo y Sharingan*/
  dibujarTorresEiffel("black",tamañoDibujo,parseInt(texto_lineas.value));
  dibujarSharingan(tamañoDibujo/4,parseInt(texto_pepitas.value));
}

function dibujarSharingan(radioSharingan,numPepitas)
{
  var radioPupila = radioSharingan/5;
  var radioPepitas = radioPupila/2;
  var radioAroNegro = radioPupila+(radioSharingan-4-radioPupila)/2;
  /*Dibujar el Sharingan excepto las pepitas*/
  dibujarCirculo(ancho_lienzo/2,alto_lienzo/2,"black","black",radioSharingan);
  dibujarCirculo(ancho_lienzo/2,alto_lienzo/2,"red","red",radioSharingan-4);
  dibujarCirculo(ancho_lienzo/2,alto_lienzo/2,"black","black",radioAroNegro+1);
  dibujarCirculo(ancho_lienzo/2,alto_lienzo/2,"red","red",radioAroNegro-1);
  dibujarCirculo(ancho_lienzo/2,alto_lienzo/2,"black","black",radioPupila);
  /*Dibujar pepitas*/
  var xCentroPepita;
  var yCentroPepita;
  for(angle=0;angle<2*Math.PI;angle+=2*Math.PI/numPepitas)
  {
    xCentroPepita = ancho_lienzo/2+radioAroNegro*Math.cos(angle);
    yCentroPepita = alto_lienzo/2+radioAroNegro*Math.sin(angle);
    dibujarCirculo(xCentroPepita,yCentroPepita,"black","black",radioPepitas);
  }
}

function dibujarTorresEiffel(color,tamaño,numlineas)
{
  separacion = tamaño/numlineas;
  for(i=0;i<tamaño;i+=separacion)
  {
    dibujarLinea(color,0,i,i+separacion,tamaño);
    dibujarLinea(color,i,0,tamaño,i+separacion);
    /*dibujarLinea(lienzo,color,0,i+separacion,tamaño-i,0);*/
    /*dibujarLinea(lienzo,color,tamaño,i,tamaño-i-separacion,tamaño);*/
  }
  dibujarLinea(color,1,1,1,tamaño-1);
  dibujarLinea(color,1,tamaño-1,tamaño-1,tamaño-1);
  dibujarLinea(color,tamaño-1,tamaño-1,tamaño-1,1);
  dibujarLinea(color,tamaño-1,1,1,1);
}

function dibujarCirculo(xCentro,yCentro,colorFill,colorStroke,radio)
{
  lienzo.beginPath();
  lienzo.strokeStyle = colorStroke;
  lienzo.fillStyle=colorFill;
  lienzo.arc(xCentro,yCentro,radio,2*Math.PI,false);
  lienzo.fill();
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
