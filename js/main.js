import { generateAxisX, formatDate } from './functions.js';
import { getDefaultInformation } from './mis-apis.js';

const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');

const getInitialDate = document.getElementById('start-date');

getInfoBtn.addEventListener('click', generateInfoDates);


function generateInfoDates() {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    
    //Function returns an array of dates.
    const arrayDate = generateAxisX(startDate, endDate);
    //solo para comprobar
    console.log(arrayDate);
}

window.addEventListener('load', getDefaultInformation);

