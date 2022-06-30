//variables
const results = document.getElementById('resultado');
const year = document.getElementById('year');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

//Principal function
document.addEventListener('DOMContentLoaded', () => {
    showCars();

    fillSelects();
});

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

function fillSelects(){

    for(let i= maxYear; i > minYear; i--){
        const yearHTML = document.createElement('option');
        yearHTML.value = i;
        yearHTML.textContent = i;
        year.appendChild(yearHTML);
    };
}
