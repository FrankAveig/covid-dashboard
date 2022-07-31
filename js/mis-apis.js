import { formatDate } from './functions.js'

const url = 'https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range';

//Function gets default days due to the API has a delay over 10 days of real time information.
export const getDefaultInformation = async (e) => {
    const initialDefaultDate = new Date();
    const finalDefaultDate = new Date();

    initialDefaultDate.setDate(initialDefaultDate.getDate() - 13);
    finalDefaultDate.setDate(finalDefaultDate.getDate() - 9);

    const inicio = formatDate(initialDefaultDate).toString();
    const fin = formatDate(finalDefaultDate).toString();

    console.log(`Initial Date: ${formatDate(initialDefaultDate)}`);
    console.log(`Final Date: ${formatDate(finalDefaultDate)}`);

    const {data} = await axios.get(`${url}/${inicio}/${fin}`);
    console.log(data);
}