//variables
const results = document.getElementById('resultado');



document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
});

//functions 
function mostrarAutos(){
    autos.forEach( car => {
        const {marca,modelo,year,precio,puertas,color,transmision} = car;
        const carHTML = document.createElement('p');
        carHTML.textContent = `
         ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `
        results.appendChild(carHTML);
    });
}

