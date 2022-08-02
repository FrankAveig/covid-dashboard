export const country_1 = document.getElementById('country-1');
export const country_2 = document.getElementById('country-2');
export const country_3 = document.getElementById('country-3');
export const descesos = document.getElementById('descesos')
export const contagiosGeneral = document.getElementById('contagios')
//This function get the code iso2 of the option selected to use in the second API
//the function requiere a parameter that we get with a function in the file functions.js 
export const getDataSelect = (indexCountry) =>{
    const country1Val2= country_1.options[indexCountry[0]].getAttribute("data-value2")
    const country2Val2= country_2.options[indexCountry[1]].getAttribute("data-value2")
    const country3Val2= country_3.options[indexCountry[2]].getAttribute("data-value2")
    return [country1Val2,country2Val2,country3Val2 ]
}

export const getDataNamesCountries = (indexCountry)=>{
    const country1Val3= country_1.options[indexCountry[0]].getAttribute("data-value3")
    const country2Val3= country_2.options[indexCountry[1]].getAttribute("data-value3")
    const country3Val3= country_3.options[indexCountry[2]].getAttribute("data-value3")
    return [country1Val3,country2Val3,country3Val3 ]

}