let numeros = ["1","2","3","4"]
let resultado = dobleDeCadaNumero(numeros);
console.log(resultado);

function dobleDeCadaNumero(array) {
    let resultado = [];
    
    for (let i = 0; i < array.length; i++) {
      resultado.push(array[i] * 2);
    }
    
    return resultado;
  }
  
  let nombres = ["pedro","ana","juan"]
  let nombresMayuscula = convertirAMayuscula(nombres);
  console.log(nombresMayuscula);

  function convertirAMayuscula (nombres) {
    let nombresMayuscula = nombres.map (nombre => nombre.toUpperCase());
    return nombresMayuscula;
  } 

  let numeros1 = [1, 2, 3, 4];
let resultado1 = obtenerCuadrados(numeros1);
console.log(resultado1);

function obtenerCuadrados(array) {
  let resultado = array.map(numero => numero * numero);
  return resultado;
}

function obtenerPrimerasLetras(array) {
let primerasLetras = array.map(palabra => palabra.charAt(0));
return primerasLetras
}

let palabras = ['Hola', 'mundo', 'desde', 'JavaScript'];
let resultado2 = obtenerPrimerasLetras(palabras);
console.log(resultado2);


let numeros2 = ["1", "2", "3", "4", "5", "6"];
let numerosPares = obtenerNumerosPares(numeros2);
console.log(numerosPares);

function obtenerNumerosPares(array) {
  let numerosPares = array.filter(numero => parseInt(numero) % 2 === 0);
  return numerosPares;
}

function obtenerPalabrasMasLargas(array) {
    let palabrasMasLargas = array.filter(palabra => palabra.length > 4);
    return palabrasMasLargas;
  }
  
  let palabras3 = ["Hola", "yo", "soy", "JavaScript"];
  let palabrasMasLargas = obtenerPalabrasMasLargas(palabras3);
  console.log(palabrasMasLargas);
  
  function conbinarPalabras(array) {
    let resultado4 = array.join(' ');
    return resultado4;
  }

  let palabras1 = ["hola","mundo","desde","javaScript"]
   let resultado4 = conbinarPalabras(palabras1);
   console.log(resultado4);

function calcularProducto(array){
    let producto = array.reduce((acumulador, numeros3) => acumulador * numeros3, 1 );
    return producto;
}



let numeros3 = ["1","2","3","4"]
  let resultados = calcularProducto(numeros3);
  console.log(resultados);


  
  
function contarLetra(cadena, letra) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i].toLowerCase() === letra.toLowerCase()) {
        contador++;
      }
    }
    return contador;
  }
   
  
  
  
  
function contarLetra(cadena, letra) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === letra) {
        contador++;
      }
    }
    return contador;
  }

  