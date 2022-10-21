/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola. */

const stringsArray = ['ciao', 'Boh','PAROLA', 'pROVA', 'testo'];


const toCamelCase = stringsArray.map(string => {
    let stringBody = string.slice(1 , string.length).toLocaleLowerCase();
    let initialLetter = string[0].toLocaleUpperCase();
    string =  initialLetter + stringBody;
    return string;
});

console.log(toCamelCase);