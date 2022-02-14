let inicio = ["una cadena", 3, 9, 1, 10, 500, 1, 10, true];
let numbers =[];

for(num of inicio){
    if( typeof num == "number"){
        numbers.push(num)
    }
}
console.log("la lista es: "+ numbers);

for(i=0;i<=numbers.length-1;i++){
    let menor = i;
    for(j=i+1;j<=numbers.length;j++){
        if(numbers[j] < numbers[menor]){
            menor = j;
        }
    }
    let temp = numbers[menor];
    numbers[menor] = numbers[i];
    numbers[i]= temp;
}
console.log("la lista ordenada es: "+ numbers)