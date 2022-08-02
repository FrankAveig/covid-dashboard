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

    let slvData = getInfoConfirmed(data, country_1.value);
    let gtmData = getInfoConfirmed(data, country_2.value);
    let hndData = getInfoConfirmed(data, country_3.value);

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: uniqueDates, //imprime las fechas
            datasets: [
                {
                    label: country_1.value,
                    data: slvData,
                    backgroundColor: 'rgba(182, 238, 189, 0.9)',
                    borderColor: 'rgba(182, 238, 189, 1)',
                    borderWidth: 1
                },
                {
                    label: country_2.value,
                    data: gtmData,
                    backgroundColor: 'rgba(196, 199, 250, 0.9)',
                    borderColor: 'rgba(196, 199, 250, 1)',
                    borderWidth: 1
                },
                {
                    label: country_3.value,
                    data: hndData,
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

    let slvData = getInfoDemise(data, 'SLV');
    let gtmData = getInfoDemise(data, 'GTM');
    let hndData = getInfoDemise(data, 'HND');

    lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: uniqueDates, //imprime las fechas
            datasets: [
                {
                    label: 'El Salvador',
                    data: slvData,
                    fill: false,
                    borderColor: 'rgba(182, 238, 189, 1)',
                    tension: 0.1
                },
                {
                    label: 'Guatemala',
                    data: gtmData,
                    fill: false,
                    borderColor: 'rgba(196, 199, 250, 1)',
                    tension: 0.1
                },
                {
                    label: 'Honduras',
                    data: hndData,
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