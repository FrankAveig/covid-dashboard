export const country_1 = document.getElementById('country-1');
export const country_2 = document.getElementById('country-2');
export const country_3 = document.getElementById('country-3');

export const getDataSelect = () =>{
     //con esta variable obtenemos el index del option que seleccionamos
    const  indexCountry1 = country_1.options.selectedIndex;
    //con esta variable obtenemos el nombre de la clase de la cual sacaremos el segundo valor para usarlo en el segundo chart
    const country1Val2= country_1.options[indexCountry1].getAttribute("data-value2")
    const hola = 'hola';
    return [country1Val2,hola] 
}