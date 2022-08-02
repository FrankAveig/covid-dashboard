import { getDefaultInformation, generateInfoDates } from './mis-apis.js';
import {country_1 , country_2, country_3} from './getData.js';

window.addEventListener('load', getDefaultInformation);
getInfoBtn.addEventListener('click', generateInfoDates);

country_1.addEventListener('change', getDefaultInformation)
country_2.addEventListener('change', getDefaultInformation)
country_3.addEventListener('change', getDefaultInformation)