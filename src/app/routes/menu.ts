export const menu = [
  {
    label: 'DASHBOARDS',
    isLabel: true
  },
  {
    path: '/dashboard',
    label: 'Dashboard Pro',
    icon: { class: 'material-icons', content: 'home' }
  },

  {
    label: 'Project',
    icon: { class: 'material-icons', content: 'folder_open' },
    children: [
      { path: '/project/dashboard', label: 'Buttons' },
      { path: '/project/progress', label: 'Progress Bars' },
      { path: '/project/cards', label: 'Cards' },
      { path: '/project/badges', label: 'Badges' },
    ]
  },
  {
    path: '/analytics',
    label: 'Analytics',
    icon: { class: 'material-icons', content: 'timeline' }
  },
  {
    label: 'COMPONENTS',
    isLabel: true
  },
  {
    label: 'UI Components',
    icon: { class: 'material-icons', content: 'toys' },
    children: [
      { path: '/ui/buttons', label: 'Buttons' },
      { path: '/ui/progress', label: 'Progress Bars' },
      { path: '/ui/cards', label: 'Cards' },
      { path: '/ui/badges', label: 'Badges' },
    ]
  },
  {
    label: 'Charts',
    icon: { class: 'material-icons', content: 'multiline_chart' },
    children: [
      { path: '/charts/chartjs', label: 'Chart.js' },
      { path: '/charts/chartist', label: 'Chartist' },
      { path: '/charts/plotly', label: 'Plotly.js' },
      { path: '/charts/cthree', label: 'C3 Charts' },
    ]
  },
  {
    label: 'Tables',
    icon: { class: 'material-icons', content: 'view_column' },
    children: [
      { path: '/project/dashboard', label: 'Email Inbox' },
      { path: '/project/progress', label: 'Chat' },
      { path: '/project/cards', label: 'Email Compose' },
    ]
  },
  {
    label: 'Forms',
    icon: { class: 'material-icons', content: 'multiline_chart' },
    children: [
      { path: '/project/dashboard', label: 'Email Inbox' },
      { path: '/project/progress', label: 'Chat' },
      { path: '/project/cards', label: 'Email Compose' },
    ]
  },
  {
    label: 'PAGES',
    isLabel: true
  },
  {
    label: 'Messaging',
    icon: { class: 'material-icons', content: 'chat_bubble_outline' },
    children: [
      { path: '/project/dashboard', label: 'Email Inbox' },
      { path: '/project/progress', label: 'Chat' },
      { path: '/project/cards', label: 'Email Compose' },
    ]
  },
  {
    label: 'ACCOUNT',
    isLabel: true
  },
  {
    path: '/analytics',
    label: 'User Profile',
    icon: { class: 'material-icons', content: 'person' }
  },
  {
    path: '/analytics',
    label: 'Timeline & Feed',
    icon: { class: 'material-icons', content: 'timeline' }
  },
  {
    path: '/security',
    label: 'Account Settings',
    icon: { class: 'material-icons', content: 'security' }
  },
  {
    label: 'Login & Signup',
    icon: { class: 'material-icons', content: 'https' },
    children: [
      { path: '/project/dashboard', label: 'Login' },
      { path: '/project/progress', label: 'Signup' },
      { path: '/project/cards', label: 'Lock' },
    ]
  },
]
