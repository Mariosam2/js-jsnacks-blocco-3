/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola. */

const stringsArray = ['ciao', 'Boh','PAROLA', 'pROVA', 'testo'];

// la parola alla fine sarà in Camel Case
const toCamelCase = stringsArray.map(string => {
    // prendo il corpo della parola (senza lettera Iniziale) e lo metto in LowerCase
    let stringBody = string.slice(1 , string.length).toLocaleLowerCase();
    //prendo la lettera iniziale e la metto in UpperCase
    let initialLetter = string[0].toLocaleUpperCase();
    string =  initialLetter + stringBody;
    return string;
});

console.log(toCamelCase);