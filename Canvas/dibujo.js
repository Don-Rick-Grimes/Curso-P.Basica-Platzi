var d1 = document.getElementById("litteDrawing");
var lienzo1 = d1.getContext("2d");
var d2 = document.getElementById("litteDrawing2");
var lienzo2 = d2.getContext("2d");

var text_lines = document.getElementById("text_lines");
var button_lines = document.getElementById("button_lines");

button_lines.addEventListener("click",dibujoPorClick);

/*Dibujo 1*/
drawALine(lienzo1,"red",0,0,300,300);
drawALine(lienzo1,"red",0,300,300,0);
drawCircle(lienzo1,d1.width/2,d1.height/2,"red","red",80);
drawCircle(lienzo1,d1.width/2,d1.height/2,"pink","pink",75);
drawTriangle(lienzo1,d1.width/2,d1.height/2,"blue","blue");

function dibujoPorClick()
{
  /*Dibujo 2*/
  lienzo2.clearRect(0,0,d2.width,d2.height);
  drawWeirdThing(lienzo2,"black",300,parseInt(text_lines.value));
  /*Sharingan*/
  drawCircle(lienzo2,150,150,"black","black",70);
  drawCircle(lienzo2,150,150,"red","red",66);
  drawCircle(lienzo2,150,150,"black","black",41);
  drawCircle(lienzo2,150,150,"red","red",39);
  drawCircle(lienzo2,150,150,"black","black",15);
  drawCircle(lienzo2,150,110,"black","black",8);
  drawCircle(lienzo2,115,170,"black","black",8);
  drawCircle(lienzo2,185,170,"black","black",8);
}

function drawTriangle(lienzo,xinicial,yinicial,colorFill,colorStroke)
{
  lienzo.beginPath();
  lienzo.strokeStyle = colorStroke;
  lienzo.fillStyle=colorFill;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xinicial+50,yinicial+50);
  lienzo.lineTo(xinicial,yinicial+50);
  lienzo.lineTo(xinicial,yinicial);
  lienzo.fill();
  lienzo.stroke();
  lienzo.closePath();
}

function drawCircle(lienzo,xCentro,yCentro,colorFill,colorStroke,radio)
{
  lienzo.beginPath();
  lienzo.strokeStyle = colorStroke;
  lienzo.arc(xCentro,yCentro,radio,2*Math.PI,false);
  lienzo.fillStyle=colorFill;
  lienzo.fill();
  lienzo.stroke();
  lienzo.closePath();
}

function drawWeirdThing(lienzo,color,limit,numlineas)
{
  paso = limit/numlineas;
  for(i=0;i<limit;i+=paso)
  {
    drawALine(lienzo,color,0,i,i+paso,limit);
    drawALine(lienzo,color,i,0,limit,i+paso);
    /*drawALine(lienzo,color,0,i+paso,limit-i,0)*/
    /*drawALine(lienzo,color,limit,i,limit-i-paso,limit)*/
  }
  drawALine(lienzo,color,1,1,1,limit-1);
  drawALine(lienzo,color,1,limit-1,limit-1,limit-1);
  drawALine(lienzo,color,limit-1,limit-1,limit-1,1);
  drawALine(lienzo,color,limit-1,1,1,1);
}

function drawCircleWithLines(lienzo, color, xinicial, yinicial, radio)
{
  for(var angle = 0; angle < 360; angle+=0.01)
  {
    drawALine(lienzo,color,xinicial,yinicial, xinicial + parseInt(radio*Math.cos(angle)), yinicial + parseInt(radio*Math.sin(angle)));
  }
}

function drawALine(lienzo, color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
