export const demodata = {
  header: {
    left: 'title',
    right: 'today prev,next month,agendaWeek,agendaDay'
  },
  editable: true,
  droppable: true,
  events: [
    {
      title: 'Jacb\'s Birthday',
      start: '2017-12-15',
      color: '#1E88E5',
    },
    {
      title: 'Team Meeting',
      start: '2017-12-15',
      color: '#1E88E5',
    },
    {
      title: 'Jacob\'s Birthday',
      start: '2018-01-15',
      color: '#1E88E5',
    },
    {
      title: 'Team Meeting',
      start: '2018-01-23',
      color: '#1E88E5',
    },
    {
      title: 'Jacob\'s Birthday',
      start: '2018-02-15',
      color: '#1E88E5',
    },
    {
      title: 'Team Meeting',
      start: '2018-02-23',
      color: '#1E88E5',
    }
  ]
}

const date = new Date();
var d = date.toISOString();
demodata.events.push({
  title: "Holiday!",
  start: d,
  color: '#1E88E5'
})
