//variables
const marca = document.getElementById('marca');
const year = document.getElementById('year');
const min = document.getElementById('minimo');
const max = document.getElementById('maximo');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const color = document.getElementById('color');

const results = document.getElementById('resultado');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

const dataSearch = {
    marca: "",
    year: "",
    minimo:"",
    maximo:"",
    puertas:"",
    transmision:"",
    color:"",
}

//Principal function
document.addEventListener('DOMContentLoaded', () => {
    showCars();

    fillSelects();
});
//event listeners
marca.addEventListener('change', (e) => {
   dataSearch.marca = e.target.value;
})
year.addEventListener('change', (e) => {
   dataSearch.year = e.target.value;
})
min.addEventListener('change', (e) => {
   dataSearch.minimo = e.target.value;
})
maximo.addEventListener('change', (e) => {
   dataSearch.maximo = e.target.value;
})
puertas.addEventListener('change', (e) => {
   dataSearch.puertas = e.target.value;
})
transmision.addEventListener('change', (e) => {
   dataSearch.transmision = e.target.value;
})
color.addEventListener('change', (e) => {
   dataSearch.color = e.target.value;
})

//functions 
function showCars(){
    autos.forEach( car => {
        const {marca,modelo,year,precio,puertas,color,transmision} = car;
        const carHTML = document.createElement('p');
        carHTML.textContent = `
         ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `
        results.appendChild(carHTML);
    });
}
//fill the selects in the html
function fillSelects(){

    for(let i= maxYear; i > minYear; i--){
        const yearHTML = document.createElement('option');
        yearHTML.value = i;
        yearHTML.textContent = i;
        year.appendChild(yearHTML);
    };
}
