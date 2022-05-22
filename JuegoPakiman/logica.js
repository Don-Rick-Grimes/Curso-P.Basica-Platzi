var imagenes = [];
imagenes["Cauchin"]="vaca.webp";
imagenes["Pokacho"]="pollo.webp";
imagenes["Tocinauro"]="cerdo.webp";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Pokacho",80,50));
coleccion.push(new Pakiman("Tocinauro",120,40));

for(var pakimancito of coleccion)
{
  pakimancito.mostrar();
}

for(var i in coleccion[0])
{
  console.log(i);
}
