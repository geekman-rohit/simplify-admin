import { Color, colors } from '../../../helpers/colors';
export const demodata = {
  charts: [
    {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
          label: '# of Votes',
          data: [6, 7, 3, 5, 2, 4],
          lineTension: 0,
          backgroundColor: colors['purple'].alpha(0.2),
          borderColor: colors['purple'],
          borderWidth: 2,
          pointRadius: 0,
        },
      ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            display: false,
          }]
        },
        legend: {
          display: false,
        }
      }
    },
    {
        type: 'bar',
        data: {

          labels: ['Jan', 'Feb', 'March', 'June', 'July', 'April'],
          datasets: [

            {
              type: 'bar',
              label: 'Revenue last year',
              data: [3, 6, 5, 9, 4, 9.5],
              lineTension: 0.4,
              backgroundColor: colors['blue'].alpha(0.9),
              borderColor: colors['blue'],
              borderWidth: 2,
              pointRadius: 1,

          },
          {
            type: 'bar',
            label: 'Revenue last year',
            data: [2, 3, 1, 5, 1, 4],
            lineTension: 0.4,
            backgroundColor: colors['purple'].alpha(0.9),
            borderColor: colors['purple'],
            borderWidth: 2,
            pointRadius: 1,

          }
        ]
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              barPercentage: 0.6,
              categoryPercentage: 0.4,
              display: true,
              ticks: {
                beginAtZero: true
              }
            }]
          },
          legend: {
            display: false,
          }
        }
      },
      {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
            label: '# of Votes',
            data: [3, 4, 3, 6, 4, 7],
            lineTension: 0,
            backgroundColor: colors['green'].alpha(0.2),
            borderColor: colors['green'],
            borderWidth: 2,
            pointRadius: 0,
          },
        ]
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              display: false,
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              display: false,
            }]
          },
          legend: {
            display: false,
          }
        }
      },
      {
         columns: [
             ['Fusion', 150],
             ['Fission', 100],
             ['Dark Matter', 50],
             ['Hydrogen', 80],


         ],
         colors: {
             'Fusion': colors['purple'].alpha(0.9),
             'Fission': colors['blue'].alpha(0.9),
             'Dark Matter': colors['orange'].alpha(0.9),
             'Hydrogen': colors['green'].alpha(0.9),

         },
         type: 'donut'
     }
  ]
};
