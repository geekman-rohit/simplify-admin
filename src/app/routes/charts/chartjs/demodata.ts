export const demodata = [
  {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
        label: '# of Votes',
        data: [6, 7, 3, 5, 2, 3],
        lineTension: 0,
        backgroundColor: 'rgba(38, 193, 178,0.3)',
        borderColor: 'rgb(38, 193, 178)',
        borderWidth: 2,
        pointRadius: 0,
      },
    ]
    },
    options: {
      scales: {
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          display: true,
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
          label: 'Revenue this year',
          data: [6, 17, 11, 5, 12, 3],
          lineTension: 0.3,
          backgroundColor: 'rgba(51,149,255,1)',
          borderColor: 'rgba(51,149,255,1)',
          borderWidth: 2,
          pointRadius: 1,
        },
        {
        label: 'Revenue last year',
        data: [3, 10, 5, 9, 10, 4],
        lineTension: 0.3,
        backgroundColor: 'rgba(200,200,200,1)',
        borderColor: 'rgba(200,200,200,1)',
        borderWidth: 2,
        pointRadius: 1,
      }
      ]
      },
      options: {
        scales: {
          yAxes: [{
            display: true,
            ticks: {

              beginAtZero: true
            }
          }],
          xAxes: [{
            display: true,
          }]
        },
        legend: {
          display: false,
        }
      }
    }
];
