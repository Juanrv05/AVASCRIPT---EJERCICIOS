// Ejercicio de Ciclos
// Hacer un retangulo con *, dependiendo del número que ingrese 
// Ejemplo
// Si ingreso el 2 y 4 , el primer número alto y el segundo ancho,  Entonces debo mostrar en la consola
// ****
// ****

let altura = parseInt ( prompt ("Ingrese el primer numero"))

let ancho = parseInt ( prompt ("Ingrese el segundo numero"))

 for (let index = 1; index <= altura; index++) {
     console.log("*".repeat(altura,ancho))  
}





