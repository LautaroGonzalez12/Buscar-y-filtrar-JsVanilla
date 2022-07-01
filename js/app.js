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
    showCars(autos);

    fillSelects();
});
//event listeners
marca.addEventListener('change', (e) => {
   dataSearch.marca = e.target.value;
   carFilter();
})

year.addEventListener('change', (e) => {
    dataSearch.year = parseInt(e.target.value);
    carFilter();
})

min.addEventListener('change', (e) => {
   dataSearch.minimo = e.target.value;
   carFilter();
})

maximo.addEventListener('change', (e) => {
    dataSearch.maximo = e.target.value;
    carFilter();
})

puertas.addEventListener('change', (e) => {
   dataSearch.puertas = parseInt(e.target.value);
   carFilter();
})

transmision.addEventListener('change', (e) => {
   dataSearch.transmision = e.target.value;
   carFilter();
})

color.addEventListener('change', (e) => {
   dataSearch.color = e.target.value;
   carFilter();
})

//functions 
function showCars(resultado){
    clearHTML();
    resultado.forEach( car => {
        const {marca,modelo,year,precio,puertas,color,transmision} = car;
        const carHTML = document.createElement('p');
        carHTML.textContent = `
         ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `
        results.appendChild(carHTML);
    });
}

//clear the HTML
function clearHTML(){
    while (results.firstChild){
        results.removeChild(results.firstChild);
    }
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

//function that filter with the search
function carFilter(){
    const resultado = autos.filter(modelFilter).filter(yearFilter).filter(priceFilter).filter(priceFilterMax).filter(filterDoor).filter(filterTransmision).filter(colorFilter)
    showCars(resultado);
}
//filter by models
function modelFilter(car){
    const {marca} = dataSearch;
    if (marca){
        return car.marca === marca;
    }
    return car;
}
//filter by years
function yearFilter(car){
    const {year} = dataSearch;
    if (year){
        return car.year === year;
    }
    return car;
}
//filter by price
function priceFilter(car){
    const {minimo} = dataSearch;
    if (minimo){
        return car.precio >= minimo;
    }
    return car;
}
//filter by price for max
function priceFilterMax(car){
    const {maximo} = dataSearch;
    if (maximo){
       return car.precio <= maximo;
    }
    return car;
}
//filter by doors
function filterDoor(car){
    const {puertas} = dataSearch;
    if (puertas){
        return car.puertas === puertas;
    }
    return car;
}//filter by transmision
function filterTransmision(car){
    const {transmision} = dataSearch;
    if (transmision){
        return car.transmision === transmision;
    }
    return car;
}
//filter by transmision
function colorFilter(car){
    const {color} = dataSearch;
    if (color){
        return car.color === color;
    }
    return car;
}