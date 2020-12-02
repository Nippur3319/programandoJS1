//ejercicio 01
// ingresar 5 valores mediante prompt y mostrar la suma de todos los valores ingresados mediante un alert
function ejercicios01_02() {
    let i;
    let value = 0;
    let sum = 0 ;
    let average = 0;

    for (i = 0; i < 5; i++){
      
      value = parseInt(prompt("ingrese numero"));
      
      //acumulo el valor de value en sum
      sum = sum + value;
      
      
     }
     alert("la suma de los números ingresados es "+ sum);
     average = sum / 5;

     //ejercicio 02
     // agrego el promedio de los números ingresados
     alert("el promedio es " + average);

  }
  

  //Ejercicio 03
  //Ingresar N cantidad de edades mediante prompt hasta que se ingrese un cero
  //al finalizar mostrar cuántos son mayores de edad con un alert
  const ejercicio03 = () => {
    let age= 0;
    let over18 = 0;

      do {
        age = parseInt(prompt("ingrese edad"))
        
        countOver18();

      } while (age != 0);

        alert("hay " + over18 + " mayores de 18");

      
      function countOver18(){
        if (age >= 18) {
          over18++              
        }
        return 
      }
  }


//Ejercicio 04
//Ingrsar N cantidad de números mediante prompt. Mostrar el promedio de los números ingresados de 1 dígito. Terminar el programa con la palabra "Salir"

const ejercicio04 = () => {
  let input;
  let number = 0;
  let counterOneDigit = 0;
  let acumOneDigit = 0;
  let avg = 0;

  do {
    input = prompt("ingrese número")

    //calculo la cantidad de caracteres del input
    digits = parseInt(input.length);
    
    //convierto el input en número
    number = parseInt(input)
    
    // si tiene un solo dígito suma el contador y agrega el valor al acumulador
    if (digits === 1 ) {
      
      counterOneDigit += 1

      acumOneDigit = acumOneDigit + number
    }
    
    
    avgOneDigit();

  } while (input != "Salir");

   alert("promedio " + avg);



  function avgOneDigit(){
    avg = acumOneDigit / counterOneDigit
    console.log(" number "+ number + " counterOneDigit " + counterOneDigit + " acumOneDigit " + acumOneDigit + " avg "+ avg)
    return 
  }


}



//Ejercicio 05
//Ingresar N cantidad de números mediante prompt. Mostrar quién tuvo más ingresos, si los pares o los impares. Terminar el programa con un 0.
const ejercicio05 = () => {

  let input;
  let evenCounter = 0;
  let oddCounter = 0;


  while (input !== 0) {
    input = parseInt(prompt("ingrese número"));

    if (input % 2 == 0) {
      evenCounter ++;
      
    } else {
      oddCounter ++;
      
    }

  } 

  if (evenCounter > oddCounter) {
   alert("se ingresaron más números pares " + evenCounter + " vs " + oddCounter )
  }
   else if (oddCounter > evenCounter) {
    alert("se ingresaron más números impares " + oddCounter  + " vs " + evenCounter)
  } else {
    alert ("se ingresaron tantos impares como pares")
  }

}




//Ejercicio 06
//Ingresa un número entre 1 y 10 mediante prompt y trasnformarlo en su equivalente en el abecedario, siendo 1 = a y 10 = j. Cualquier otro valor mostrar un mensaje de error. Mostrar el resultado con un alert.
const ejercicio06 = () => {

  let digit = 0;
  let value = 0;

  digit = parseInt(prompt("Ingrese un número del 1 al 10"));

  //verifico que el dato ingresado sea numérico y entre 1 y 10

  if (digit > 0 && digit <= 10) {

  // llamo a la función con el parámetro
    setCharacter(digit)


  } else {
    alert("datos erróneos");
  }


// defino la función con un argumento
function setCharacter(value) {
  switch (value) {
    case 1: alert("A");
    break;
    case 2: alert("B");
    break;
    case 3: alert("C");
    break;
    case 4: alert("D");
    break;
    case 5: alert("E");
    break;
    case 6: alert("F");
    break;
    case 7: alert("G");
    break;
    case 8: alert("H");
    break;
    case 9: alert("I");
    break;
    case 10: alert("J");
    break;
  }
}



}

