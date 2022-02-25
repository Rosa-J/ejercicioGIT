/* EJERCICIO 4
Definir una función determine si la cadena de texto que se le pasa como parámetro
es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la
derecha. Ejemplo de palíndromo complejo: “La ruta nos aporto otro paso natural”. (10 pts) */

/* let palíndromo= "La ruta nos aporto otro paso natural"      //se puede colocar un prompt para ingresar otros textos 

let soloLetras= palíndromo.split(" ").join("").toLowerCase()
let reverso = ""
for(i=soloLetras.length-1;i>=0;i--){
    reverso +=soloLetras[i]
}
if(soloLetras==reverso){
    console.log("El texto ingresado es un palindromo")
}else{
    console.log("El texto ingresado no es un palindromo")
} */