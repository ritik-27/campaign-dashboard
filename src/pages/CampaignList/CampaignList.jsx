import { useState, useMemo, useEffect } from 'react';
import {
  Button,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Add as AddIcon,
  FilterList as FilterListIcon,
} from '@mui/icons-material';
import styles from './CampaignList.module.css';
import CampaignTable from '../../components/campaign/CampaignTable/CampaignTable';
import { CAMPAIGN_STATUS } from '../../utils/constants';
import { campaignsData } from '../../data/campaignsData';


const CampaignList = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [campaigns, setCampaigns] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    setCampaigns(campaignsData);
  }, []);

  const filterCampaigns = (status) => {
    setStatusFilter(status);
    if (status === 'all') {
      setCampaigns(campaignsData);
    } else {
      const filtered = campaignsData.filter(
        (campaign) => campaign.status.toLowerCase() === status.toLowerCase()
      );
      setCampaigns(filtered);
    }
  };

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
      <div className={styles.filters}>
        <Select
          value={statusFilter}
          onChange={(e) => filterCampaigns(e.target.value)}
          size="small"
          displayEmpty
          startAdornment={<FilterListIcon sx={{ mr: 1 }} />}
        >
          <MenuItem value="all">All Status</MenuItem>
          {Object.values(CAMPAIGN_STATUS).map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </div>

      <CampaignTable campaigns={campaigns} />

    </div>
  );
};

export default CampaignList;