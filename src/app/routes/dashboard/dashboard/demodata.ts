export const demodata = {
  people: [
    {
      name: 'Kaleb',
      title: 'Chief of Staff',
      photo: '/assets/img/face1.jpeg',
      team: 'Mysteries'
    },
    {
      name: 'Joanna',
      title: 'Minister of Magic',
      photo: '/assets/img/face2.jpeg',
      team: 'Muggle Affairs'
    },
    {
      name: 'Vince',
      title: 'Chief Warlock',
      photo: '/assets/img/face3.jpeg',
      team: 'Justice'
    },
    {
      name: 'Kara',
      title: 'Headmaster',
      photo: '/assets/img/face4.jpeg',
      team: 'Education'
    }
  ],
  charts: [
    {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
          label: '# of Votes',
          data: [6, 7, 3, 5, 2, 3],
          lineTension: 0,
          backgroundColor: 'rgba(138, 117, 242,0.2)',
          borderColor: 'rgb(138, 117, 242)',
          borderWidth: 2,
          pointRadius: 0,
        },
      ]
      },
      options: {
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
            label: 'Revenue this year',
            data: [6, 17, 11, 5, 12, 3],
            lineTension: 0.3,
            backgroundColor: 'rgba(68,151,255,0.9)',
            borderColor: 'rgba(68,151,255,1)',
            borderWidth: 2,
            pointRadius: 1,
          },
          {
          label: 'Revenue last year',
          data: [3, 10, 5, 9, 10, 4],
          lineTension: 0.3,
          backgroundColor: 'rgba(200,200,200,0.9)',
          borderColor: 'rgba(200,200,200,1)',
          borderWidth: 2,
          pointRadius: 1,
        }
        ]
        },
        options: {

          barPercentage: 0.5,
          scales: {
            yAxes: [{
              display: true,
              ticks: {

                beginAtZero: true
              }
            }],
            xAxes: [{
              barPercentage: 0.7,
              categoryPercentage: 0.5,
              display: true,
            }]
          },
          legend: {
            display: false,
          }
        }
      }
  ]
};
