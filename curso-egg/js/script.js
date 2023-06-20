var contador = 0;

function showAlert(){
    /*alert("Hola mundo");*/
    //console.log("hola mundo pero desde la consola");
    //var a = prompt("ingresa un valor");
    //console.log("el valor ingresado es: "+a);

    var numA = 5; //numerico
    var numB = "3"; //string 
    var numC = "3.5"; //string 
    var sumatoria = numA + parseFloat(numC);
    console.log(Math.round(sumatoria));

    var fecha = Date("03/08/1993");
    console.log("Fecha: "+fecha );

}


function miFuncion(){

    var elemnt = document.getElementById("mipe");

    //var textoDelElemento = elemnt.textContent;

    //alert(textoDelElemento);
    elemnt.style.color = "blue"; 
}

function mauseOverfx(){

    var elemnt = document.getElementById("mipe");
    elemnt.style.color = "blue"; 

    contador++;
    document.getElementById("contador").innerHTML = contador;


}

function mauseLeavefx(){

    var elemnt = document.getElementById("mipe");
    elemnt.style.color = "gray"; 
}