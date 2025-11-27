import { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  Sms as SmsIcon,
  Campaign as CampaignIcon,
  Replay as ReplayIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import StatusBadge from '../StatusBadge/StatusBadge';
import styles from './CampaignTable.module.css';

const CampaignTable = ({ campaigns }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event, campaign) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuAction = (action) => {
    console.log(`${action} campaign`);
    handleMenuClose();
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Campaign Name</th>
            <th>Message</th>
            <th>Recipient's Source</th>
            <th>No. of Recipients</th>
            <th>Status</th>
            <th>Created On</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr 
              key={campaign.id}
            >
              <td>
                <div className={styles.campaignName}>
                  <div className={styles.campaignIcon}>
                    {campaign.type === 'SMS' ? <SmsIcon style={{ fontSize: 20 }} /> : <CampaignIcon style={{ fontSize: 20 }} />}
                  </div>
                  <div>
                    <div className={styles.name}>{campaign.name}</div>
                    <div className={styles.meta}>
                      {campaign.type} | {campaign.campaignType} | Edited {campaign.editedDate}
                    </div>
                  </div>
                </div>
              </td>
              <td>{campaign.message}</td>
              <td>{campaign.recipientSource}</td>
              <td>{campaign.recipientCount}</td>
              <td>
                <StatusBadge status={campaign.status} />
              </td>
              <td>{campaign.createdOn}</td>
              <td>
                <IconButton
                  size="small"
                  onClick={(e) => handleMenuClick(e, campaign)}
                >
                  <MoreVertIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleMenuAction('Rerun')}>
          <ReplayIcon sx={{ mr: 1 }} />
          Rerun campaign
        </MenuItem>
        <MenuItem onClick={() => handleMenuAction('View')}>
          <VisibilityIcon sx={{ mr: 1 }} />
          View details
        </MenuItem>
        <MenuItem onClick={() => handleMenuAction('Edit')}>
          <EditIcon sx={{ mr: 1 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={() => handleMenuAction('Delete')}>
          <DeleteIcon sx={{ mr: 1 }} />
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CampaignTable;