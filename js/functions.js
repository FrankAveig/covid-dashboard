export function generateAxisX(startDate, endDate) {
    let arrayDate = [];
    let currentDate = startDate.addDays(1);
    let lastDay = endDate.addDays(1);
    
    while(currentDate <= lastDay) {
        arrayDate.push(currentDate.toLocaleDateString('en-US'));
        currentDate = currentDate.addDays(1);
    } 
    return arrayDate;
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

export const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }