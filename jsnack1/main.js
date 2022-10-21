/* Snack 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

const container = document.querySelector('.container');

const autos = [
    {
        marca: 'Ferrari',
        modello: 'Dino',
        alimentazione: 'elettrico'
    },
    {
        marca: 'Volkswagen',
        modello: 'Golf',
        alimentazione: 'benzina'
    },
    {
        marca: 'Ford',
        modello: 'Focus',
        alimentazione: 'diesel'
    },
    {
        marca: 'Aston Martin',
        modello: 'Vanguard',
        alimentazione: 'benzina'
    },
    {
        marca: 'Tesla',
        modello: 'Model X',
        alimentazione: 'elettrico'
    },
    {
        marca: 'Lamborghini',
        modello: 'Sesto elemento',
        alimentazione: 'benzina'
    },
    {
        marca: 'Toyota',
        modello: 'Iris',
        alimentazione: 'diesel'
    },
    {
        marca: 'Lamborghini',
        modello: 'Countach',
        alimentazione: 'gpl'
    },
    {
        marca: 'Fiat',
        modello: 'Bravo',
        alimentazione: 'gpl'
    },
    {
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'diesel'
    },

]

const gasolineAutos = autos.filter(auto => auto.alimentazione === 'benzina');
const dieselAutos = autos.filter(auto => auto.alimentazione === 'diesel');
const remainingAutos = autos.filter(auto => auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel');
console.log(gasolineAutos, dieselAutos, remainingAutos);
getAutos(gasolineAutos);
getAutos(dieselAutos);
getAutos(remainingAutos);

function getAutos(array){
    array.forEach(element => {
        let liEl = document.createElement('li');
        liEl.append(element.marca + ' ' + element.modello + ' ' + element.alimentazione);
        container.append(liEl);
    });
}