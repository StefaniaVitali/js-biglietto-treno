console.log('Ciao!');

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Stampate il prezzo finale del biglietto nella console del browser in forma “umana” ovvero con massimo due cifre decimali, per indicare centesimi sul prezzo (per questo sarà necessario cercare in documentazione come fare)


//chiedere tramite prompt quanti km vuole percorrere
let kmViaggio = prompt ('Quanti km devi percorrere?'); //string| null
console.log(kmViaggio);
//trasfomare il risultato da string a number
kmViaggio = parseInt(kmViaggio); //number
console.log(kmViaggio);

//chiedere tramite prompt l'età del passeggiero
let userAge = prompt ('Quanti anni hai?'); //string
console.log(userAge);
//trasfomare il risultato da string a number
userAge = parseInt (userAge);
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
console.log(ticketPriceUnder18)
}
// //SE INVECE l'utente è over 65 applicare il  40% di sconto
else if (userAge > 65){
console.log(ticketPriceOver65)
}
// //ALTRIMENTI il costo è tot km *0.21 euro
else {
console.log(ticketPrice)
}