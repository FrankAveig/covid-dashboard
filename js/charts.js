import { getInfoConfirmed } from './functions.js';

const ctx = document.getElementById('myChart').getContext('2d');

export function chartConfirmed(data) {

    const uniqueDates =  [... new Set(data.map(item => item.date_value))];
    console.log(uniqueDates);

    let slvData = getInfoConfirmed(data, 'SLV');
    let gtmData = getInfoConfirmed(data, 'GTM');
    let hndData = getInfoConfirmed(data, 'HND');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: uniqueDates, //imprime las fechas
            datasets: [
                {
                    label: 'El Salvador',
                    data: slvData,
                    backgroundColor: 'rgba(182, 238, 189, 0.9)',
                    borderColor: 'rgba(182, 238, 189, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Guatemala',
                    data: gtmData,
                    backgroundColor: 'rgba(196, 199, 250, 0.9)',
                    borderColor: 'rgba(196, 199, 250, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Honduras',
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

