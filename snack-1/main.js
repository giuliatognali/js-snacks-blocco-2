'use strict';

//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

//inizializziamo la variabile somma=0 che sappiamo sarà modificata

let sum = 0;

/*
let i = 0;
 while (i < 5) {
    const input = Number(prompt('inserisci un numero'));
    console.log(input);
    sum += input;
    i++;

} */


let i = 1;
while (i <= 5) {
    const input = Number(prompt(`inserisci un numero (${i})`)); //aggiungo l'indice al promt, partiamo da i = 1 per l'utente
    console.log(input);
if (!isNaN(input)){  //se non viene inserito un numero il contatore non implementa
    sum += input;
    i++;
}  

}
alert(sum);



for (let i = 1; i < 6; i++) {
    const input = Number(prompt(`inserisci un altro numero (${i})`));
    console.log(input);
    sum += input;
}
alert(sum);