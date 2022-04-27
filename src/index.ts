//el usuario ingreasa por prompt 'x' numeero//
//los condicionales determinan si es par, impar o cero//
//segun sea el caso se reflejara en consola//
let numero = promt("introducir numero");
if (numero == 0) {
  console.log("el numero ingresado no es par ni impar");
} else if (numero % 2 == 0) {
  console.log("el numero ingresado es par");
} else {
  console.log("el numero ingresado es impar");
}
