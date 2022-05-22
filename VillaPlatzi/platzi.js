var objetoCanvas = document.getElementById("villaPlatzi_canvas");
var papel = objetoCanvas.getContext("2d");
var movimiento = 5;

var teclas = {
  Arriba: 38,
  Abajo: 40,
  Derecha: 39,
  Izquierda: 37
};
var fondo = {
  url: "tile.webp",
  cargaOK: false,
  imagen: new Image(),
  width: 500,
  height: 500,
  ubicacionesX: 0,
  ubicacionesY: 0
};
var cerdo = {
  url: "cerdo.webp",
  cargaOK: false,
  imagen: new Image(),
  width: 80,
  height: 80,
  cantidad: numAleatorio(1,3),
  ubicacionesX: [],
  ubicacionesY: []
};
var vaca = {
  url: "vaca.webp",
  cargaOK: false,
  imagen: new Image(),
  width: 80,
  height: 80,
  cantidad: numAleatorio(1,2),
  ubicacionesX: [],
  ubicacionesY: []
};
var pollo = {
  url: "pollo.webp",
  cargaOK: false,
  imagen: new Image(),
  width: 80,
  height: 80,
  cantidad: 1,
  ubicacionesX: [],
  ubicacionesY: []
};

for(i=0;i<vaca.cantidad;i++)
{
  vaca.ubicacionesX[i]=numAleatorio(0,objetoCanvas.width-vaca.width);
  vaca.ubicacionesY[i]=numAleatorio(0,objetoCanvas.height-vaca.height);
}
for(i=0;i<cerdo.cantidad;i++)
{
  cerdo.ubicacionesX[i]=numAleatorio(0,objetoCanvas.width-cerdo.width);
  cerdo.ubicacionesY[i]=numAleatorio(0,objetoCanvas.height-cerdo.height);
}
for(i=0;i<pollo.cantidad;i++)
{
  pollo.ubicacionesX[i]=numAleatorio(0,objetoCanvas.width-pollo.width);
  pollo.ubicacionesY[i]=numAleatorio(0,objetoCanvas.height-pollo.height);
}

fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",dibujarFondo);
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",dibujarVacas);
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",dibujarCerdos);
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",dibujarPollos);

document.addEventListener("keydown",moverPollo);

function moverPollo(evento)
{
  switch (evento.keyCode) {
    case teclas.Arriba:
        if(pollo.ubicacionesY[0]-movimiento >= 0)
        {
          pollo.ubicacionesY[0]-=movimiento;
          dibujarJuegoCompleto();
        }
      break;
    case teclas.Abajo:
        if(pollo.ubicacionesY[0]+movimiento <= objetoCanvas.height-pollo.height)
        {
          pollo.ubicacionesY[0]+=movimiento;
          dibujarJuegoCompleto();
        }
      break;
    case teclas.Derecha:
      if(pollo.ubicacionesX[0]+movimiento <= objetoCanvas.width-pollo.width)
      {
        pollo.ubicacionesX[0]+=movimiento;
        dibujarJuegoCompleto();
      }
      break;
    case teclas.Izquierda:
      if(pollo.ubicacionesX[0]-movimiento >= 0)
      {
        pollo.ubicacionesX[0]-=movimiento;
        dibujarJuegoCompleto();
      }
      break;
    default:
  }
}

function dibujarJuegoCompleto()
{
  papel.clearRect(0,0,objetoCanvas.width,objetoCanvas.height);
  if (fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen,fondo.ubicacionesX,fondo.ubicacionesY);
  }
  if(vaca.cargaOK)
  {
    for(i=0;i<vaca.cantidad;i++)
    {
      papel.drawImage(vaca.imagen,vaca.ubicacionesX[i],vaca.ubicacionesY[i]);
    }
  }
  if(cerdo.cargaOK)
  {
    for(i=0;i<cerdo.cantidad;i++)
    {
      papel.drawImage(cerdo.imagen,cerdo.ubicacionesX[i],cerdo.ubicacionesY[i]);
    }
  }
  if(pollo.cargaOK)
  {
    for(i=0;i<pollo.cantidad;i++)
    {
      papel.drawImage(pollo.imagen,pollo.ubicacionesX[i],pollo.ubicacionesY[i]);
    }
  }
}
function dibujarFondo()
{
  fondo.cargaOK = true;
  dibujarJuegoCompleto();
}
function dibujarCerdos()
{
  cerdo.cargaOK = true;
  dibujarJuegoCompleto();
}
function dibujarPollos()
{
  pollo.cargaOK = true;
  dibujarJuegoCompleto();
}
function dibujarVacas()
{
  vaca.cargaOK = true;
  dibujarJuegoCompleto();
}

function numAleatorio(min,max)
{
  var resultado;
  resultado = Math.floor((max-min+1)*Math.random())+min;
  return resultado;
}

/*function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}*/
