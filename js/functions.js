const startDateCld = document.getElementById('start-date');
const endDateCld = document.getElementById('end-date');

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
      cdata.country_code === "SLV" ||
      cdata.country_code === "GTM" ||
      cdata.country_code === "HND"
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