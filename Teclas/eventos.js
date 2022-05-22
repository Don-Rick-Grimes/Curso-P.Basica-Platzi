cuadrito = document.getElementById("area_de_dibujo");
papel = cuadrito.getContext("2d");
rangoTamañoDibujo = document.getElementById("rango_tamaño_dibujo");
botonLimpiar = document.getElementById("boton_limpiar");
color = document.getElementById("seleccionador_color");

document.addEventListener("keydown",dibujarTeclado);
rangoTamañoDibujo.addEventListener("click",ajustarTamañoLienzo);
botonLimpiar.addEventListener("click",limpiarLienzo);

cuadrito.addEventListener("mousedown",dibujarMouseDown);
cuadrito.addEventListener("mouseup",dibujarMouseUp);

xLapiz = cuadrito.width/2;
yLapiz = cuadrito.height/2;
movimiento = 3;
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};


function dibujarMouseMove(evento)
{
  dibujarLinea(color.value, xLapiz, yLapiz, evento.offsetX, evento.offsetY,papel);
  xLapiz = evento.offsetX;
  yLapiz = evento.offsetY;
}

function dibujarMouseDown(evento)
{
  xLapiz = evento.offsetX;
  yLapiz = evento.offsetY;
  cuadrito.addEventListener("mousemove",dibujarMouseMove);
}

function dibujarMouseUp(evento)
{
  cuadrito.removeEventListener("mousemove",dibujarMouseMove);
}

function dibujarTeclado(evento)
{
  switch(evento.keyCode)
  {
  case teclas.UP:
      dibujarLinea(color.value, xLapiz, yLapiz, xLapiz, yLapiz-movimiento,papel);
      yLapiz-=movimiento;
    break;
  case teclas.DOWN:
      dibujarLinea(color.value, xLapiz, yLapiz, xLapiz, yLapiz+movimiento,papel);
      yLapiz+=movimiento;
    break;
  case teclas.LEFT:
      dibujarLinea(color.value, xLapiz, yLapiz, xLapiz-movimiento, yLapiz,papel);
      xLapiz-=movimiento;
    break;
  case teclas.RIGHT:
      dibujarLinea(color.value, xLapiz, yLapiz, xLapiz+movimiento, yLapiz,papel);
      xLapiz+=movimiento;
    break;
  default:
  }

  if(xLapiz<0)
  {
    xLapiz=0;
  }
  else if(xLapiz>cuadrito.width)
  {
    xLapiz=cuadrito.width;
  }

  if(yLapiz<0)
  {
    yLapiz=0;
  }
  else if(yLapiz>cuadrito.height)
  {
    yLapiz=cuadrito.height;
  }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function ajustarTamañoLienzo()
{
  cuadrito.width = rangoTamañoDibujo.value;
  cuadrito.height = rangoTamañoDibujo.value;
  xLapiz = cuadrito.width/2;
  yLapiz = cuadrito.height/2;
}

function limpiarLienzo()
{
  papel.clearRect(0,0,cuadrito.width,cuadrito.height);
  xLapiz = cuadrito.width/2;
  yLapiz = cuadrito.height/2;
}
