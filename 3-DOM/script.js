'use strict';

const body = document.querySelector('body') ;

 const item = document.createElement('div') ;

body.appendChild(item) ;

//Función para que aparezcan dos digitos siempres.

function formatNums(params) {
    if (params < 10) return '0' + params ;
    return params ;
    
}
setInterval(() => {
   

        const data = new Date();
        const horas = formatNums(data.getHours());
        const minut = formatNums(data.getMinutes());
        const segundos = formatNums(data.getSeconds());



        
    return item.textContent =  'hola' ;//`${horas} : ${minut} : ${segundos}`;


}, 1000);


