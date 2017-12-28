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
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
          label: '# of Votes',
          data: [3, 4, 3, 6, 4, 7],
          lineTension: 0,
          backgroundColor: colors['blue'].alpha(0.2),
          borderColor: colors['blue'],
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
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
          label: '# of Votes',
          data: [3, 4, 3, 6, 4, 7],
          lineTension: 0,
          backgroundColor: colors['orange'].alpha(0.2),
          borderColor: colors['orange'],
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

  ]
};
