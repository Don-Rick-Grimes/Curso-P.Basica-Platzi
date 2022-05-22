var express = require("express");
var app = express();

app.get("/",inicio);
app.get("/pag2",pag2);

function inicio(peticion,resultado)
{
  resultado.sendFile(__dirname + "/Public/index.html");
}

function pag2(peticion,resultado)
{
  resultado.sendFile(__dirname + "/Public/pag2.html");
}
app.use(express.static("Public"));

app.listen(8989);

console.log("Servidor Online xd");
