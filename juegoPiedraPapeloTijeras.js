/*&& = y
  || = Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano. ... Por lo tanto, cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true ; si ambos son falsos, devuelve false 
 != Operador de desigualdad.(distinto de)
  */



 /*manunal yo juego por la manquina*/
 var op1 = "Saco Piedra";
 var op2 = "Saco Tijera";
 var op3 = "Saco Papel";

 var resultado_del_encuentro = function (user, cpu) {
     if(user != cpu) {
         if (user == op1 && cpu == op2) {
             console.log("El usuario ha ganado en esa monda cuando " + op1)
         } else if(user == op2 && cpu== op3) {
            console.log("El usuario ha ganado en esa monda cuando " + op2)
         } else if (user == op3 && cpu== op1) {
            console.log("El usuario ha ganado en esa monda cuando " + op3)
         }
         else {
            console.log("El usuario no vale monda")
         }
     }  else if(user === cpu) {
        console.log("empataron en esa verga")
    }
 };