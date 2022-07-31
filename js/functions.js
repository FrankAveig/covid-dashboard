export function generateAxisX(startDate, endDate) {
  let arrayDate = [];
  let currentDate = startDate.addDays(1);
  let lastDay = endDate.addDays(1);

  while (currentDate <= lastDay) {
    arrayDate.push(currentDate.toLocaleDateString("en-US"));
    currentDate = currentDate.addDays(1);
  }
  return arrayDate;
}

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

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
      cdata.country_code === "CRI" ||
      cdata.country_code === "SLV" ||
      cdata.country_code === "GTM" ||
      cdata.country_code === "NIC" ||
      cdata.country_code === "PAN" ||
      cdata.country_code === "HND"
    );
  });

  return depuredData;
}

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