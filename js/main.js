import { getDefaultInformation, generateInfoDates } from './mis-apis.js';

window.addEventListener('load', getDefaultInformation);
getInfoBtn.addEventListener('click', generateInfoDates);
