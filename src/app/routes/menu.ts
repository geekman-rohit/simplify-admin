interface MenuItem {
  label: string;
  path?: string;
  icon?: { class: string, content: string };
  isLabel?: boolean;
  children?: MenuItem[];
}
export const menu: MenuItem[] = [
  {
    label: 'DASHBOARDS',
    isLabel: true
  },
  {
    path: '/dashboard/pro',
    label: 'Dashboard Pro',
    icon: { class: 'material-icons', content: 'home' }
  },

  {
    label: 'Projects',
    icon: { class: 'material-icons', content: 'folder_open' },
    children: [
      { path: '/projects/single', label: 'Project Page' },
      { path: '/projects/all', label: 'All Projects' }
    ]
  },
  {
    label: 'PAGES',
    isLabel: true
  },
  {
    path: '/user/profile',
    label: 'User Profile',
    icon: { class: 'material-icons', content: 'person' }
  },
  {
    label: 'Email',
    icon: { class: 'material-icons', content: 'mail' },
    children: [
      { path: '/project/dashboard', label: 'Email Inbox' },
      { path: '/project/progress', label: 'Chat' },
      { path: '/project/cards', label: 'Email Compose' }
    ]
  },
  {
    path: '/chat',
    label: 'Chat',
    icon: { class: 'material-icons', content: 'chat_bubble_outline' }
  },
  {
    path: '/analytics',
    label: 'Timeline',
    icon: { class: 'material-icons', content: 'timeline' }
  },
  {
    path: '/security',
    label: 'Account',
    icon: { class: 'material-icons', content: 'security' }
  },
  {
    label: 'Login & Signup',
    icon: { class: 'material-icons', content: 'https' },
    children: [
      { path: '/project/dashboard', label: 'Login' },
      { path: '/project/progress', label: 'Signup' },
      { path: '/project/cards', label: 'Lock' }
    ]
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
      { path: '/ui/nav', label: 'Navigation & Tabs' },
      { path: '/ui/dropdown', label: 'Dropdown' },
      { path: '/ui/alert', label: 'Alerts' },
      { path: '/ui/collapse', label: 'Collapse' },
      { path: '/ui/tooltip', label: 'Tooltips' },
      { path: '/ui/accordian', label: 'Accordians' },
      { path: '/ui/pagination', label: 'Pagination' },
      { path: '/ui/carousel', label: 'Carousel' },
      { path: '/ui/modal', label: 'Modals' },

    ]
  },
  {
    label: 'Charts',
    icon: { class: 'material-icons', content: 'multiline_chart' },
    children: [
      { path: '/charts/chartjs', label: 'Chart.js' },
      { path: '/charts/chartist', label: 'Chartist' },
      { path: '/charts/plotly', label: 'Plotly.js' },
      { path: '/charts/cthree', label: 'C3 Charts' }
    ]
  },
  {
    label: 'Tables',
    icon: { class: 'material-icons', content: 'view_column' },
    children: [
      { path: '/tables/basic', label: 'Basic' },
      { path: '/tables/data', label: 'Datatable' },
      { path: '/tables/aggrid', label: 'Advance Grid' }
    ]
  },
  {
    label: 'Forms',
    icon: { class: 'material-icons', content: 'multiline_chart' },
    children: [
      { path: '/forms/basic', label: 'Form Elements' },
      { path: '/forms/custom', label: 'Custom Elements' },
      { path: '/forms/date', label: 'Date & Time Picker' },
      { path: '/forms/typeahead', label: 'Typeahead' },
      { path: '/forms/templates', label: 'Readymade Templates' },
    ]
  },
  {
    path: '/calendar',
    label: 'Calendar',
    icon: { class: 'material-icons', content: 'event' }
  }
];
