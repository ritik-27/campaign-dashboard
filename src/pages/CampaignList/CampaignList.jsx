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
import Pagination from '../../components/campaign/Pagination/Pagination';
import { CAMPAIGN_STATUS } from '../../utils/constants';
import { campaignsData, filterCampaigns as filterCampaignsService } from '../../services/campaignService';

const ROWS_PER_PAGE = 5;

const CampaignList = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCampaigns = useMemo(() => {
    return filterCampaignsService(campaignsData, searchTerm, statusFilter);
  }, [searchTerm, statusFilter]);

  const totalPages = Math.ceil(filteredCampaigns.length / ROWS_PER_PAGE);

  const paginatedCampaigns = useMemo(() => {
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = startIndex + ROWS_PER_PAGE;
    return filteredCampaigns.slice(startIndex, endIndex);
  }, [filteredCampaigns, currentPage]);

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  const handleSearch = (search) => {
    setSearchTerm(search);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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

      {paginatedCampaigns.length > 0 ? (
        <>
          <CampaignTable campaigns={paginatedCampaigns} />
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div className={styles.emptyState}>
          <p>No campaigns to display</p>
        </div>
      )}

    </div>
  );
};

export default CampaignList;