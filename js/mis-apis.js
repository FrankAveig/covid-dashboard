import { formatDate, researchData, clearDates, setMaxDays,getVaccinated,setContagios,setDecesos } from './functions.js'

import { chartConfirmed, chartDemise,chartVaccinated } from './charts.js'
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const url = 'https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range';
let infoCountries = [];


//Function gets default days due to the API has a delay over 10 days of real time information.
export const getDefaultInformation = async () => {
    setMaxDays()
    const initialDefaultDate = new Date();
    const finalDefaultDate = new Date();

    initialDefaultDate.setDate(initialDefaultDate.getDate() - 25);
    finalDefaultDate.setDate(finalDefaultDate.getDate() - 18);

    const inicio = formatDate(initialDefaultDate).toString();
    const fin = formatDate(finalDefaultDate).toString();

    startDateInput.value = inicio;
    endDateInput.value=fin;

    //Esto extrae la data original del API, es una data
    //Pero se esa data se manda para la funcion researchData
    //donde extrae solo la informacion que necesitamos
    const {data: {data}} = await axios.get(`${url}/${inicio}/${fin}`);
    const dataDepurated = researchData(data);

    const index = [dataDepurated.length-1,dataDepurated.length-2,dataDepurated.length-3]

    const contagios1 =dataDepurated[index[0]].confirmed;
    const contagios2 =dataDepurated[index[1]].confirmed;
    const contagios3 =dataDepurated[index[2]].confirmed;
    const desceso1 =dataDepurated[index[0]].deaths;
    const desceso2 =dataDepurated[index[1]].deaths;
    const desceso3 =dataDepurated[index[2]].deaths;
    

   //Draw General info into DOM 
    setContagios(contagios1,contagios2,contagios3);
    setDecesos(desceso1,desceso2,desceso3);

    //We call the function for the barChartConfirmed
    chartConfirmed(dataDepurated);
    //We call the function for the lineChartDemised
    chartDemise(dataDepurated);
    //We call the function getVaccinated that contains the ejecution of chartVaccinated
    getVaccinated();
    
}

export const generateInfoDates = async () => {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    const {data: {data}} = await axios.get(`${url}/${startDateInput.value}/${endDateInput.value}`);
    console.log('data original');
    console.log(data);
    //We call the function for the barChartConfirmed
    chartConfirmed(researchData(data));
    console.log('data depurada');
    console.log(researchData(data));
    //We call the function for the lineChartDemised
    chartDemise(researchData(data));

    clearDates();    
}


