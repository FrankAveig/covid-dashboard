import { getInfoConfirmed, getInfoDemise,getIndexSelect } from './functions.js';
import {country_1 , country_2, country_3,getDataNamesCountries} from './getDataDom.js';

let ctx = document.getElementById('myChart').getContext('2d');
let ctxLine = document.getElementById('lineChart').getContext('2d');
const ctxVaccinated = document.getElementById('vaccinated').getContext('2d');

let myChart;
let lineChart;
let chartDoughnut;
export function chartConfirmed(data) {

    //this const get the countries selected by function getDataNamesCountry
    const names = getDataNamesCountries(getIndexSelect());


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
                    label: names[0],
                    data: dataCountry1,
                    backgroundColor: 'rgba(182, 238, 189, 0.9)',
                    borderColor: 'rgba(182, 238, 189, 1)',
                    borderWidth: 1
                },
                {
                    label: names[1],
                    data: dataCountry2,
                    backgroundColor: 'rgba(196, 199, 250, 0.9)',
                    borderColor: 'rgba(196, 199, 250, 1)',
                    borderWidth: 1
                },
                {
                    label: names[2],
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
    const names = getDataNamesCountries(getIndexSelect());

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
                    label: names[0],
                    data: dataCountry1,
                    fill: false,
                    borderColor: 'rgba(182, 238, 189, 1)',
                    tension: 0.1
                },
                {
                    label: names[1],
                    data: dataCountry2,
                    fill: false,
                    borderColor: 'rgba(196, 199, 250, 1)',
                    tension: 0.1
                },
                {
                    label: names[2],
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

export const chartVaccinated= (data)=> {

    if(chartDoughnut instanceof Chart)
    {
        chartDoughnut.destroy();
    }
    chartDoughnut = new Chart(ctxVaccinated, {
        type: 'doughnut',
        data: {
            labels: [
                data[0].country,
                data[1].country,
                data[2].country
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [data[0].vaccinated, data[1].vaccinated, data[2].vaccinated],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        }
        
    });
    
}

