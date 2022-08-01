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

    const {data: {data}} = await axios.get(`${url}/${inicio}/${fin}`);
    console.log(data);

    //Get the selected information from de JSON File
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