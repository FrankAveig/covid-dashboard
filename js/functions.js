import {country_1 , country_2, country_3, getDataSelect,contagiosGeneral,descesos} from './getDataDom.js';
import {chartVaccinated } from './charts.js'


const startDateCld = document.getElementById('start-date');
const endDateCld = document.getElementById('end-date');
const url_vacunados ='https://covid-api.mmediagroup.fr/v1//vaccines';

export const formatDate = (date) => {
  let d = new Date(date);
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  let year = d.getFullYear();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }
  return [year, month, day].join("-");
};

// Run the whole JSON and look just for the information of
// Costa Rica, El Salvador, Guatemala, Nicaragua and Panama
export function researchData(data) {
  let consolidatedData = [];

  for (let key in data) {
    let myValues = data[key];
    for (let secondKey in myValues) {
      consolidatedData.push(myValues[secondKey]);
    }
  }

  let depuredData = consolidatedData.filter((cdata) => {
    return (
      cdata.country_code === country_1.value ||
      cdata.country_code === country_2.value ||
      cdata.country_code === country_3.value
    );
  });

  //Devuelve la data ya depurada creando el archivo JSON que se va a consumir
  return depuredData;
}

//Get information about confirmed cases
export function getInfoConfirmed(data, countryName) {
  const info = data.filter((item) => {
    if (item.country_code === countryName) {
      return item.confirmed;
    }
  });

  const dataGotten = info.map((item) => {
    return item.confirmed;
  });

  return dataGotten;
};

// Get information about died cases
export function getInfoDemise(data, countryName) {
  const info = data.filter((item) => {
    if (item.country_code === countryName) {
      return item.deaths;
    }
  });

  const dataGotten = info.map((item) => {
    return item.deaths;
  });

  return dataGotten;
};

// This function set the max of date that we can select in the calendar
// Due to the API has a delay over 13 days more or less according to the documentation of API
export function setMaxDays() {
  const initialDefaultDate = new Date();
  const finalDefaultDate = new Date();

  initialDefaultDate.setDate(initialDefaultDate.getDate() - 13);
  finalDefaultDate.setDate(finalDefaultDate.getDate() - 13);

  const startMaxDate = formatDate(initialDefaultDate).toString();
  const endMaxDate = formatDate(finalDefaultDate).toString();

  startDateCld.max = startMaxDate;
  endDateCld.max = endMaxDate;
}

// Clear date form
export function clearDates() {
  document.getElementById('start-date').value = "";
  document.getElementById('end-date').value = "";
}
//This function gets the index of the selected option in the "select" tag
export const getIndexSelect = ()=>{
  const indexCountry1 = country_1.options.selectedIndex;
  const indexCountry2 = country_2.options.selectedIndex;
  const indexCountry3 = country_3.options.selectedIndex;
  return [indexCountry1,indexCountry2,indexCountry3];
  }

  //this function get the info of the people vaccinated filtered by the countries selected
export const getVaccinated = async()=>{
  const {data} = await axios.get(url_vacunados);
  const countries = getDataSelect(getIndexSelect());
  const vaccinated = [
  {
    country:countries[0],
    vaccinated:data[countries[0]].All.people_vaccinated,
  },
  {
    country:countries[1],
    vaccinated:data[countries[1]].All.people_vaccinated,
  },
  {
    country:countries[2],
    vaccinated:data[countries[2]].All.people_vaccinated,
  }]
  chartVaccinated(vaccinated);
  setVacunados(vaccinated[0].vaccinated,vaccinated[1].vaccinated,vaccinated[2].vaccinated);
}

//this function put the general information
export const setContagios=(data1,data2,data3)=>contagiosGeneral.innerHTML=`Contagios: ${data1+data2+data3}`;
export const setDecesos=(data1,data2,data3)=>descesos.innerHTML=`Descesos: ${data1+data2+data3}`;
const setVacunados=(data1,data2,data3)=>vacunados.innerHTML=`Vacunados ${data1+data2+data3}`;