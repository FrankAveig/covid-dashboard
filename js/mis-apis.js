import { formatDate, researchData, clearDates, setMaxDays } from './functions.js'
import { chartConfirmed, chartDemise } from './charts.js'

const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');

const url = 'https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range';
let infoCountries = [];

//Function gets default days due to the API has a delay over 10 days of real time information.
export const getDefaultInformation = async () => {
    setMaxDays();

    const initialDefaultDate = new Date();
    const finalDefaultDate = new Date();

    initialDefaultDate.setDate(initialDefaultDate.getDate() - 18);
    finalDefaultDate.setDate(finalDefaultDate.getDate() - 13);

    const inicio = formatDate(initialDefaultDate).toString();
    const fin = formatDate(finalDefaultDate).toString();

    //Esto extrae la data original del API, es una data
    //Pero se esa data se manda para la funcion researchData
    //donde extrae solo la informacion que necesitamos
    const {data: {data}} = await axios.get(`${url}/${inicio}/${fin}`);
    console.log('Esta es la data original del API');
    console.log(data);

    //Get the selected information from de JSON File
    console.log('Esta es la data depurada que se usa para el dashboard');
    console.log(researchData(data));

    //We call the function for the barChartConfirmed
    chartConfirmed(researchData(data));

    //We call the function for the lineChartDemised
    chartDemise(researchData(data));
}

export const generateInfoDates = async () => {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    const {data: {data}} = await axios.get(`${url}/${startDateInput.value}/${endDateInput.value}`);
    console.log(researchData(data));

    //We call the function for the barChartConfirmed
    chartConfirmed(researchData(data));

    //We call the function for the lineChartDemised
    chartDemise(researchData(data));

    clearDates();    
}