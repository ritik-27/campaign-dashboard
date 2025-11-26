import { NavLink } from 'react-router-dom';
import {
  Home as HomeIcon,
  People as PeopleIcon,
  Campaign as CampaignIcon,
  Send as SendIcon,
  BarChart as BarChartIcon,
  Chat as ChatIcon,
  Extension as ExtensionIcon,
  Settings as SettingsIcon,
  Security as SecurityIcon,
  Lightbulb as LightbulbIcon,
  ChatBubble as ChatBubbleIcon,
} from '@mui/icons-material';
import { SIDEBAR_ITEMS } from '../../../utils/constants';
import styles from './Sidebar.module.css';


const iconMap = {
  home: HomeIcon,
  people: PeopleIcon,
  campaign: CampaignIcon,
  send: SendIcon,
  bar_chart: BarChartIcon,
  chat: ChatIcon,
  extension: ExtensionIcon,
  settings: SettingsIcon,
  security: SecurityIcon,
  lightbulb: LightbulbIcon,
};

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <ChatBubbleIcon />
        </div>
      </div>
      
      <nav className={styles.nav}>
        {SIDEBAR_ITEMS.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
              title={item.label}
            >
              {IconComponent && <IconComponent />}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;