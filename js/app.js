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

//calcolare il costo del biglietto 
//SE l'utente è minorenne applicare 20% di sconto
//SE INVECE l'utente è over 65 applicare il  40% di sconto
//ALTRIMENTI il costo è tot km *0.21 euro