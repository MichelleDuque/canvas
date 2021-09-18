var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito")
boton.addEventListener("click", dibujoPorClick);

;var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;



function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal){

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


//for(l=0;l<lineas;l++){
    //xf1 = 10 * l;
    //yi2 = 10 * (l+1);
    //dibujarLinea("red",300,yi2,xf1,0)
//}


//dibujarLinea(colorcito,299,1,1,2);
//dibujarLinea(colorcito,299,299,299,1);


function dibujoPorClick(){
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "black";
    var espacio = ancho/lineas;

    for(l=0;l<lineas;l++){
        yi = espacio * l;
        xf = espacio * (l+1);
        dibujarLinea("blue", 0, yi, xf, 300);

    }
    
    dibujarLinea(colorcito,1,1,1,299);
    dibujarLinea(colorcito,1,299,299,299);
}







