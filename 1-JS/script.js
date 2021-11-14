'use strict';
const password = Math.floor(Math.random() * 101);

console.log(password);
let i;
for (i = 5; i > 0; i--) {
    var userspass = +prompt(`Intento ${i}: Escriba la contraseña: `);
    if (userspass === password) {
        console.log(`Has Ganado`); break;
    } else {
        if (userspass > password) {
            console.log(`Password es menor`);
        }
        else {
            console.log(`Password es mayor`);
        }

    }

} if (i === 0)
    console.log(`Has perdido`);

/*let i = 5

while ( i > 0){

    var userspass = +prompt(`Intento ${i}: Escriba la contraseña: `);
    if (userspass === password) {
        console.log(`Has Ganado`); break;
    } else {
        if (userspass > password) {
            console.log(`Password es menor`);
        }
        else {
            console.log(`Password es mayor`);
        }

    }
    i-- ;

}if (i === 0)
    console.log(`Has perdido`); */
