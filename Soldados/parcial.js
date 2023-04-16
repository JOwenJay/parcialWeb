function Solution(rangos) {
  let count = 0;
  for (let i = 0; i < rangos.length; i++) {
    for (let j = 0; j < rangos.length; j++) {
      if (rangos[j] === rangos[i] + 1) {
        count++;
        break;
      }
    }
  }
  return count;
}

/*****************************************************/
/**/ const rangos = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; /**/
/***************************************************/

const resultado = Solution(rangos);
document.getElementById(
  "resultado"
).innerHTML = `El número de soldados que pueden informar a algún superior es: ${resultado}`;

// Definir un arreglo de contactos vacío
let contacts = [];