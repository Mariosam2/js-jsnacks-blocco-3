/* Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe. Crea un nuovo array con la lista dei mammiferi. */

const animals = [
    {
        nome: 'leone',
        famiglia: 'felini',
        classe: 'mammiferi'
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: 'balena',
        famiglia: 'boh',
        classe: 'mammiferi'
    },
]


const mammals = animals.filter(animal => animal.classe === 'mammiferi');
console.log(mammals);