//Verifica si el array está vacío y retorna null en ese caso.
function mayorArray(array) {
    if (array.length === 0) {
      return null;
    }

//Verifica si el array tiene un solo elemento y retorna ese elemento.
    if (array.length === 1) {
      return array[0];
    }

//Utiliza un ciclo for para recorrer el array y encontrar el número mayor.
    let mayor = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
        mayor = array[i];
      }
    }

//Utiliza un ciclo while para imprimir cada elemento del array en la consola.
    let ejer = 0;
    while (index < array.length) {
      console.log(array[ejer]);
      ejer++;
    }

//Utiliza un ciclo do-while para contar la cantidad de números impares que tiene el array.
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

//función pasando un array de números enteros y devolverá el número mayor, imprimirá cada elemento del array en la consola y retornará la cantidad de números impares.
let numeros = [10, 5, 8, 3, 12];
let resultado = mayorArray(numeros);
console.log(resultado); // Imprimirá 2 (cantidad de números impares)
