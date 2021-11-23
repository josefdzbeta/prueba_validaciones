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
    document.getElementById('sCurso').onchange = asignaturas
    
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

    let span = document.getElementById('spanMedia')
    span.textContent = media 
    
}

//Poner los inputs tipo number a 0
function ponerCero(){

    document.getElementById('iCalculo1').value = '0' 
    document.getElementById('iCalculo2').value = '0'
    document.getElementById('iCalculo3').value = '0'
    document.getElementById('spanMedia').textContent = 'N/A'

}

function asignaturas(){

    let p = document.getElementById('Clases');

    //Creamos array de opciones 
    let daw1  = ['Base de Datos','Sistemas Informaticos','Programacion','Lenguaje de Marcas']
    let daw2 = ['DWEC', 'DWENS', 'DIW', 'DEAP']

    //Crear y añadir select
    let selectList = document.createElement("select");
    p.appendChild(selectList);

    if(document.getElementById('sCurso').value == '1DAW'){
        for (let i = 0; i < daw1.length; i++) {
            let option = document.createElement("option");
            option.value = daw1[i];
            option.text = daw1[i];
            selectList.appendChild(option);
        }
    }else{
        for (let i = 0; i < daw2.length; i++) {
            let option = document.createElement("option");
            option.value = daw2[i];
            option.text = daw2[i];
            selectList.appendChild(option);
        }
    }
}
