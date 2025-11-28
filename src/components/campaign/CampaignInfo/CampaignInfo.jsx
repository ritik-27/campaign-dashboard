import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmsIcon from '@mui/icons-material/Sms';
import styles from './CampaignInfo.module.css';

const CampaignInfo = ({ campaign }) => {
  return (
    <div className={styles.detailsSection}>
      <h3 className={styles.sectionTitle}>Campaign description : {campaign.description}</h3>
      
      <div className={styles.detailsGrid}>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Total recipients</span>
          <span className={styles.detailValue}>{campaign.details.totalRecipients.toLocaleString()}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Campaign Type</span>
          <span className={styles.detailValue}>{campaign.campaignType}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Channel</span>
          <span className={styles.detailValue}>
            {campaign.details.channel === 'WhatsApp' ? 
              <WhatsAppIcon sx={{ fontSize: 18, mr: 0.5 }} /> : 
              <SmsIcon sx={{ fontSize: 18, mr: 0.5 }} />
            }
            {campaign.details.channel}
          </span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Sender ID</span>
          <span className={styles.detailValue}>{campaign.details.senderId}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Total credits consumed</span>
          <span className={styles.detailValue}>{campaign.details.creditsConsumed.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignInfo;
