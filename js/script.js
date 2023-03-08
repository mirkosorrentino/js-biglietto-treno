// input
// chiedere il numero di km da percorrere e trasformarla in numero
// chiedere l'eta del passeggero e trasformarla in numero
const kmToDo = parseInt(prompt("Ciao! Questo sito web calcolerà il costo del tuo biglietto del treno. Quanti km intendi percorrere?"));
console.log(`Deve percorrere ${kmToDo} km`);

const passengerAge = parseInt(prompt("Perfetto, ho bisogno solo di un'altra informazione: quanti anni hai?"));
console.log(`Il passeggero ha ${passengerAge} anni`);

// elaboration
// calcolare il prezzo pieno del biglietto
// SE minore di 18 sconto del 20%, ALTRIMENTI SE maggiore di 65 sconto del 40%, ALTRIMENTI nessuno sconto

if (isNaN(kmToDo)) {
    console.log ("ricarica la pagina e inserisci solamente dei numeri")
}

const juniorDiscount = 0.2
const seniorDiscount = 0.4

const ticketFullPrice = 0.21 * kmToDo;
console.log(`il prezzo del biglietto intero è ${ticketFullPrice}€`);

let ticketFinalPrice = ""
if (passengerAge < 18) {
    ticketFinalPrice = (ticketFullPrice * (1 - juniorDiscount));
} else if (passengerAge > 65) {
    ticketFinalPrice = (ticketFullPrice * (1 - seniorDiscount))
} else {
    ticketFinalPrice = ticketFullPrice
}

console.log (ticketFinalPrice);


// output
// prezzo con massimo due cifre decimali

if ((isNaN(kmToDo))||(isNaN(passengerAge))) {
    document.getElementById("final-price").innerHTML+= (`ricarica la pagina e inserisci solamente dei numeri`);
} else if (ticketFinalPrice % 2 === 0) {
    document.getElementById("final-price").innerHTML+= (`Il prezzo del tuo biglietto ferroviario è ${ticketFinalPrice}€`);
} else {
    let ticketRoundedPrice = ticketFinalPrice.toFixed(2)
    document.getElementById("final-price").innerHTML+= ticketRoundedPrice;
}

if (passengerAge < 18 && (!((isNaN(kmToDo))||(isNaN(passengerAge))))) {
    document.getElementById("discount").innerHTML+= (`Il prezzo iniziale era di ${ticketFullPrice}€ ma hai ottenuto lo sconto under 18 del 20%`);
} else if (passengerAge > 65 && (!((isNaN(kmToDo))||(isNaN(passengerAge))))) {
    document.getElementById("discount").innerHTML+= (`Il prezzo iniziale era di ${ticketFullPrice}€ ma hai ottenuto lo sconto under 65 del 40%`);
}