/* BONUS
Escribe una function que genere todas las posibles combinaciones con las letras de
dicho string. (La entrada la puede limitar a 3 letras) (15 puntos)
Ejemplo entrada : casa
Ejemplo salida: c,ca,cas,casa,a, ac, as,… */

/* function combinaciones(palabra){
    let long= palabra
    if(long.length==3){
        let concatenar1= ""
        let concatenar2= ""
        let concatenar3= ""
        for(i=0; i<=long.length-1; i++){
            concatenar1 += long[i]
            console.log(concatenar1)
        }
        for(j=1; j<=long.length-1; j++){
            concatenar2 += long[j]
            console.log(concatenar2)
        }
        for(h=2; h<=long.length-1; h++){
            concatenar3 += long[h]
            console.log(concatenar3)
        }
    }else{
        console.log("Escribe solo tres letras")
    }
}

combinaciones("cas")
 */
