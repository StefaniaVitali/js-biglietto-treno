console.log('Ciao!');

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Stampate il prezzo finale del biglietto nella console del browser in forma “umana” ovvero con massimo due cifre decimali, per indicare centesimi sul prezzo (per questo sarà necessario cercare in documentazione come fare)


//chiedere tramite prompt quanti km vuole percorrere
let kmViaggio = parseInt(prompt ('Quanti km devi percorrere?')); //number perchè parsint trasfoma le stringhe in numeri -> prompt = string o null
console.log(kmViaggio);

//chiedere tramite prompt l'età del passeggiero
let userAge = parseInt(prompt('Quanti anni hai?')); 
console.log(userAge);

//calcolare il costo del biglietto base
let ticketPrice = (kmViaggio * 0.21); //number
console.log(ticketPrice);


//calcolare il costo del biglietto per i minorenni
const discount20 = (ticketPrice*20/100); //number
console.log(discount20); 
const ticketPriceUnder18 = (ticketPrice - discount20); //number
console.log(ticketPriceUnder18);

//calcolare il costo del biglietto per over65
const discount40 = (ticketPrice*40/100); //number
console.log(discount40); 
const ticketPriceOver65 = (ticketPrice - discount40); //number
console.log(ticketPriceOver65);



// //SE l'utente è minorenne applicare 20% di sconto
if (userAge < 18){
console.log('Hai diritto allo sconto per gli under 18 e il tuo biglietto è: ' + ticketPriceUnder18.toFixed(2));
}
// //SE INVECE l'utente è over 65 applicare il  40% di sconto
else if (userAge > 65){
console.log( 'Hai diritto allo sconto per  gli over 65 e il tuo biglietto è: ' + ticketPriceOver65.toFixed(2));
}
// //ALTRIMENTI il costo è tot km *0.21 euro
else {
console.log('il costo del tuo biglietto è :' + ticketPrice.toFixed(2));
}

//considerazioni sulla correzione dell'esercizio
/* 
1) 0.21 poteva essere un valore costante, visto che probabilmente viene da un database,
così se cambia il valore dal database cambia automaticamente anche nel codice
2) per calcolare lo sconto, si poteva semplificare ulteriormente senza fare il calcolo a parte 
per ogni singolo sconto e dare un nome ad ognuna di queste variabili.
  a)si calcola il prezzo base (0.21 * km)
  b) dentro if / if else /else calcolare i 3 sconti (20%, 40%, 0%)
  c)calcolo finale con l'applicazione dello sconto (prezzo base - lo sconto)
 3) per semplificare ancora di più si poteva dare una variabile con sconto = 0 e 
 poi con if e if else  andare a sovrascrivere il valore sconto = 0 con l'applicazione del 20% 0 40%

*/