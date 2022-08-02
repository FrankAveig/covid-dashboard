import { getInfoConfirmed, getInfoDemise } from './functions.js';
import {country_1 , country_2, country_3} from './getData.js';

let ctx = document.getElementById('myChart').getContext('2d');
let ctxLine = document.getElementById('lineChart').getContext('2d');

let myChart;
let lineChart;

export function chartConfirmed(data) {

    //This method destroy the chart if it was created.
    if(myChart instanceof Chart)
    {
        myChart.destroy();
    }

    // Look for the unique dates from JSON File
    let uniqueDates =  [... new Set(data.map(item => item.date_value))];

    let dataCountry1 = getInfoConfirmed(data, country_1.value);
    let dataCountry2 = getInfoConfirmed(data, country_2.value);
    let dataCountry3 = getInfoConfirmed(data, country_3.value);
  
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: uniqueDates, //imprime las fechas
            datasets: [
                {
                    label: country_1.value,
                    data: dataCountry1,
                    backgroundColor: 'rgba(182, 238, 189, 0.9)',
                    borderColor: 'rgba(182, 238, 189, 1)',
                    borderWidth: 1
                },
                {
                    label: country_2.value,
                    data: dataCountry2,
                    backgroundColor: 'rgba(196, 199, 250, 0.9)',
                    borderColor: 'rgba(196, 199, 250, 1)',
                    borderWidth: 1
                },
                {
                    label: country_3.value,
                    data: dataCountry3,
                    backgroundColor: 'rgba(31, 31, 31, 0.9)',
                    borderColor: 'rgba(31, 31, 31, 1)',
                    borderWidth: 1
                },
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

export function chartDemise(data) {

    //This method destroy the chart if it was created.
    if(lineChart instanceof Chart)
    {
        lineChart.destroy();
    }

    // Look for the unique dates from JSON File 
    const uniqueDates =  [... new Set(data.map(item => item.date_value))];

    let dataCountry1 = getInfoDemise(data, country_1.value);
    let dataCountry2 = getInfoDemise(data, country_2.value);
    let dataCountry3 = getInfoDemise(data, country_3.value);

    lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: uniqueDates, //imprime las fechas
            datasets: [
                {
                    label: 'El Salvador',
                    data: dataCountry1,
                    fill: false,
                    borderColor: 'rgba(182, 238, 189, 1)',
                    tension: 0.1
                },
                {
                    label: 'Guatemala',
                    data: dataCountry2,
                    fill: false,
                    borderColor: 'rgba(196, 199, 250, 1)',
                    tension: 0.1
                },
                {
                    label: 'Honduras',
                    data: dataCountry3,
                    fill: false,
                    borderColor: 'rgba(31, 31, 31, 1)',
                    tension: 0.1
                },
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}