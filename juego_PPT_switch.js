/*NO SIRVIO PERO LO INTENTE */
// var op1 = "Saco Piedra";
// var op2 = "Saco Tijera";
// var op3 = "Saco Papel";

// var resultado_del_encuentro = function (user, cpu) {
//     switch (user != cpu){
//         case (user == op1 && cpu == op2):
//         console.log("El usuario ha ganado en esa monda cuando " + op1);
//         break;
//         case (user == op2 && cpu == op3):
//         console.log("El usuario ha ganado en esa monda cuando " + op2);
//         break;
//         case (user == op3 && cpu == op1):
//         console.log("El usuario ha ganado en esa monda cuando " + op3);
//         break;
//         case (user == op1 && cpu == op3):
//         console.log("El usuario ha perdido en esa monda cuando " + op1);
//         break;
//         case (user == op2 && cpu == op1):
//         console.log("El usuario ha perdido en esa monda cuando " + op2);
//         break;   
//         case (user == op3 && cpu == op2):
//         console.log("El usuario ha perdido en esa monda cuando " + op3);
//         break; 
//     }
//     switch (user == cpu) {
//         case (user == op1 && cpu == op3):
//         console.log("empataron en esa verga");
//         break;
//         case (user == op2 && cpu == op1):
//         console.log("empataron en esa verga");
//         break;   
//         case (user == op3 && cpu == op2):
//         console.log("empataron en esa verga");
//         break; 
//     }
// }
var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}