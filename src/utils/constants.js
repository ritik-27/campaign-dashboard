export const SIDEBAR_ITEMS = [
  { icon: 'home', label: 'Home', path: '/dashboard' },
  { icon: 'people', label: 'Contacts', path: '/contacts' },
  { icon: 'campaign', label: 'Campaign', path: '/campaigns' },
  { icon: 'send', label: 'Broadcast', path: '/broadcast' },
  { icon: 'bar_chart', label: 'Analytics', path: '/analytics' },
  { icon: 'chat', label: 'Messages', path: '/messages' },
  { icon: 'extension', label: 'Integrations', path: '/integrations' },
  { icon: 'settings', label: 'Settings', path: '/settings' },
  { icon: 'security', label: 'Security', path: '/security' },
  { icon: 'lightbulb', label: 'Ideas', path: '/ideas' }
];

export const STATUS_COLORS = {
  [CAMPAIGN_STATUS.DRAFT]: '#757575',
  [CAMPAIGN_STATUS.SCHEDULED]: '#2196F3',
  [CAMPAIGN_STATUS.ONGOING]: '#FF9800',
  [CAMPAIGN_STATUS.COMPLETED]: '#4CAF50',
  [CAMPAIGN_STATUS.ABORTED]: '#F44336',
  [CAMPAIGN_STATUS.APPROVAL_PENDING]: '#FF9800'
};
