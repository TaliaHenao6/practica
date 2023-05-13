//Recibe un array como parámetro y retorna un número entero.
//Si el array está vacío, retorna el valor null.
//Si el array tiene un solo elemento, retorna ese elemento.
function mayorArray(array) {
    if (array.length === 0) {
      return null;
    } else if (array.length === 1) {
      return array[0];
    }

//ciclo for para recorrer el array y encontrar el número mayor.
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
        mayor = array[i];
      }
    }

//ciclo while para imprimir cada elemento del array en la consola.
    let ejer = 0;
    while (index < array.length) {
      console.log(array[ejer]);
      ejer++;
    }

//ciclo do-while para contar la cantidad de números impares que tiene el array.
    let contadorImpares = 0;
    let j = 0;
    do {
      if (array[j] % 2 !== 0) {
        contadorImpares++;
      }
      j++;
    } while (j < array.length);
  
    return contadorImpares;
  }

//se puede llamar a esta función pasando un array de números enteros y verificar su comportamiento. 
let numeros = [10, 5, 8, 3, 12];
let resultado = mayorArray(numeros);
console.log(resultado); // Imprime 2 (la cantidad de números impares en el array)