/**
 * @author Jose Angel Fernandez
 * @license GPL V3 2021
 * @description Examen DWEC
 */

'use strict'


window.onload = iniciar



function iniciar(){

    
    console.log('Cargado JS')
    document.getElementById('spanMedia').onclick = calcularMedia()
    document.getElementsByTagName('button').onclick = ponerCero()

   

}

//Calculamos la media
function calcularMedia(){


    let num1, num2, num3, suma, media

    //Cogemos los values de los inputs
    num1 = document.getElementById('iCalculo1').value
    num2 = document.getElementById('iCalculo2').value
    num3 = document.getElementById('iCalculo3').value

    suma = Number(num1 + num2 + num3)

    media = suma/3

    console.log(media)

}

function ponerCero(){

    

}




