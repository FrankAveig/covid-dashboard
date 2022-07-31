import { formatDate, researchData } from './functions.js'
import { chartConfirmed } from './charts.js'

const url = 'https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range';
let infoCountries = [];

//Function gets default days due to the API has a delay over 10 days of real time information.
export const getDefaultInformation = async () => {
    const initialDefaultDate = new Date();
    const finalDefaultDate = new Date();

    initialDefaultDate.setDate(initialDefaultDate.getDate() - 18);
    finalDefaultDate.setDate(finalDefaultDate.getDate() - 13);

    const inicio = formatDate(initialDefaultDate).toString();
    const fin = formatDate(finalDefaultDate).toString();

    console.log(`Initial Date: ${formatDate(initialDefaultDate)}`);
    console.log(`Final Date: ${formatDate(finalDefaultDate)}`);

    const {data: {data}} = await axios.get(`${url}/${inicio}/${fin}`);
    console.log(data);

    //Get the selected information from de JSON File
    console.log(researchData(data));

    //We call the function for the barChartConfirmed
    chartConfirmed(researchData(data));
}