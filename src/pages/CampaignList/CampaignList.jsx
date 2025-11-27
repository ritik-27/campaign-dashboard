import { useState, useMemo, useEffect } from 'react';
import {
  Button,
  Select,
  MenuItem,
  InputBase,
} from '@mui/material';
import {
  Add as AddIcon,
  FilterList as FilterListIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import styles from './CampaignList.module.css';
import CampaignTable from '../../components/campaign/CampaignTable/CampaignTable';
import { CAMPAIGN_STATUS } from '../../utils/constants';
import { campaignsData, filterCampaigns as filterCampaignsService } from '../../services/campaignService';


const CampaignList = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [campaigns, setCampaigns] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCampaigns(campaignsData);
  }, []);

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    const filtered = filterCampaignsService(campaignsData, searchTerm, status);
    setCampaigns(filtered);
  };

  const handleSearch = (search) => {
    setSearchTerm(search);
    const filtered = filterCampaignsService(campaignsData, search, statusFilter);
    setCampaigns(filtered);
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
        <div className={styles.searchBar}>
          <SearchIcon className={styles.searchIcon} />
          <InputBase
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <Select
          value={statusFilter}
          onChange={(e) => handleStatusFilter(e.target.value)}
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