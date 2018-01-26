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
    path: '/ui/cards',
    label: 'Cards',
    icon: { class: 'material-icons', content: 'widgets' }
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
    path: '/email/chat',
    label: 'Chat',
    icon: { class: 'material-icons', content: 'chat_bubble_outline' }
  },
  {
    label: 'Commerce',
    icon: { class: 'material-icons', content: 'attach_money' },
    children: [
      { path: '/shop/pricing', label: 'Pricing' },
      { path: '/shop/invoice', label: 'Invoice' },

    ]
  },
  {
    label: 'Login & Signup',
    icon: { class: 'material-icons', content: 'https' },
    children: [
      { path: '/front/login', label: 'Login' },
      { path: '/front/signup', label: 'Signup' },
      { path: '/front/lock', label: 'Lock' }
    ]
  },
  {
    path: '/404',
    label: '404',
    icon: { class: 'material-icons', content: 'error_outline' }
  },
  {
    path: '/front/website',
    label: 'Landing Page',
    icon: { class: 'material-icons', content: 'public' }
  },
  {
    label: 'Bonus Pages',
    icon: { class: 'material-icons', content: 'pages' },
    children: [
      { path: '/pages/search', label: 'Search Results' },
    ]
  },
  {
    label: 'Email',
    icon: { class: 'material-icons', content: 'mail' },
    children: [
      { path: '/email/inbox', label: 'Email Inbox' },
      { path: '/email/compose', label: 'Email Compose' },
      { path: '/email/full', label: 'View Email' }
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
      { path: '/tables/responsive', label: 'Responsive Tables' },
      { path: '/tables/data', label: 'Datatable' }
    ]
  },
  {
    label: 'Forms',
    icon: { class: 'material-icons', content: 'multiline_chart' },
    children: [
      { path: '/forms/basic', label: 'Form Elements' },
      { path: '/forms/custom', label: 'Custom Elements' },
      { path: '/forms/date', label: 'Date & Time Picker' },
      { path: '/forms/typeahead', label: 'Typeahead' }
    ]
  },
  {
    path: '/calendar/full',
    label: 'Calendar',
    icon: { class: 'material-icons', content: 'event' }
  },
  {
    label: 'Utilities',
    icon: { class: 'material-icons', content: 'code' },
    children: [
      { path: '/utilities/spacing', label: 'Box Model' },
    ]
  },
];
