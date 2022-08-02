import { getDefaultInformation, generateInfoDates, defaultInformationChart2 } from './mis-apis.js';
import {country_1 , country_2, country_3} from './getData.js';

window.addEventListener('load', getDefaultInformation);
window.addEventListener('load', defaultInformationChart2 );
getInfoBtn.addEventListener('click', generateInfoDates);

getInfoBtn.addEventListener('click', generateInfoDates);
country_1.addEventListener('change', getDefaultInformation)
country_1.addEventListener('change', defaultInformationChart2)
country_2.addEventListener('change', getDefaultInformation)
country_2.addEventListener('change', defaultInformationChart2)
country_3.addEventListener('change', getDefaultInformation)
country_3.addEventListener('change', defaultInformationChart2)


