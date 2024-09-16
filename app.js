// scelta pari o dispari

let scelta = prompt("pari o dispari?")
let num = parseInt(prompt("buttiamole giu!"))


// generazione numero casuale
function GenerazioneNumero() {
    let min = 1;
    let max = 5;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random
}

let random = GenerazioneNumero()
console.log(random)

// Somma dei numeri
function somma(num, random) {
    let somma = num + random
    return somma
}

let sum = somma(num, random)
console.log(sum)

// controllo pari o dispari
function IsEven(sum) {
    if (sum % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

let pari = IsEven(sum)
console.log(pari)


// controllo vincitore
function vincitore(scelta, pari) {
    if (scelta === "pari" & pari === true) {
        console.log("complimenti hai vinto!")
    }
    else if (scelta === "dispari" & pari === false) {
        console.log("complimenti hai vinto!")
    }
    else {
        console.log("Mi dispiace hai perso!")
    }
}


console.log(vincitore(scelta, pari))

