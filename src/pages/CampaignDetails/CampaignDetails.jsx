import { useParams, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StatusBadge from '../../components/campaign/StatusBadge/StatusBadge';
import { getCampaignById } from '../../services/campaignService';
import styles from './CampaignDetails.module.css';

const CampaignDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const campaign = getCampaignById(id);

  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <IconButton onClick={() => navigate('/campaigns')}>
            <ArrowBackIcon />
          </IconButton>
          <h1 className={styles.title}>{campaign.name}</h1>
          <StatusBadge status={campaign.status} />
        </div>
        <Alert severity="info" className={styles.headerAlert}>
          Out of <strong>{campaign.details.totalRecipients.toLocaleString()}</strong> we have found <strong>{campaign.stats.sent.toLocaleString()}</strong> valid numbers!
        </Alert>
      </div>

      <div className={styles.content}>
        <div className={styles.mainSection}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>To</h3>
            <div className={styles.toSection}>
              <div className={styles.toItem}>
                <span className={styles.toLabel}>Leads</span>
                <span className={styles.toValue}>Contacts</span>
              </div>
              <div className={styles.toItem}>
                <span className={styles.toLabel}>List</span>
                <span className={styles.toValue}>Phone field</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Compliance Setting</h3>
            <p>Send only to Opted-in numbers</p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>When</h3>
            <Alert severity="info" className={styles.dateAlert}>
              The message sent on <strong>{campaign.createdOn}</strong>
            </Alert>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CampaignDetails;