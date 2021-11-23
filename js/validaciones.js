/**
 * @author Jose Angel Fernandez
 * @license GPL V3 2021
 * @description Examen DWEC
 */

'use strict'


window.onload = iniciar



function iniciar(){

    console.log('Cargado JS')
    document.getElementById('spanMedia').onclick = calcularMedia
    document.getElementById('btnCero').onclick = ponerCero

}

//Calculamos la media
function calcularMedia(){


    let num1, num2, num3, suma = 0, media

    //Cogemos los values de los inputs
    num1 = Number(document.getElementById('iCalculo3').value)
    num2 = Number(document.getElementById('iCalculo3').value)
    num3 = Number(document.getElementById('iCalculo3').value)

    suma = num1 + num2 + num3

    console.log('Suma: ' + suma)

    media = suma/3

    console.log('Media: ' + media)

}

//Poner los inputs tipo number a 0
function ponerCero(){

    document.getElementById('iCalculo1').value = "0" 
    document.getElementById('iCalculo2').value = "0"
    document.getElementById('iCalculo3').value = "0"

}





