import { useState, useMemo, useEffect } from 'react';
import {
  Button
} from '@mui/material';
import {
  Add as AddIcon,
} from '@mui/icons-material';
import styles from './CampaignList.module.css';

const CampaignList = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Campaign</h1>
          <p className={styles.subtitle}>
            Automate your customer journey with pre build receipes
          </p>
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Campaigns
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'activity' ? styles.active : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            Activity log
          </button>
        </div>

        <div className={styles.actions}>
          <Button variant="contained" startIcon={<AddIcon />}>
            Create Campaign
          </Button>
        </div>
      </div>

    </div>
  );
};

export default CampaignList;