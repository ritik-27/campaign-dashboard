import BarChartIcon from '@mui/icons-material/BarChart';
import CampaignIcon from '@mui/icons-material/Campaign';
import PeopleIcon from '@mui/icons-material/People';
import styles from './Dashboard.module.css';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeCard}>
        <h1 className={styles.title}>Welcome to Campaign Dashboard</h1>
        <p className={styles.subtitle}>
          Manage your campaigns, track performance, and engage with your audience.
        </p>
        <div className={styles.quickLinks}>
          <NavLink to="/analytics" className={styles.link}>
            <div className={styles.linkCard}>
              <BarChartIcon className={styles.linkIcon} />
              <h3>Analytics</h3>
              <p>View campaign performance metrics</p>
            </div>
          </NavLink>
          <NavLink to="/campaigns" className={styles.link}>
            <div className={styles.linkCard}>
              <CampaignIcon className={styles.linkIcon} />
              <h3>Campaigns</h3>
              <p>Manage your active campaigns</p>
            </div>
          </NavLink>
          <NavLink to="/contacts" className={styles.link}>
            <div className={styles.linkCard}>
                <PeopleIcon className={styles.linkIcon} />
                <h3>Contacts</h3>
                <p>Organize your contact lists</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
