import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplayIcon from '@mui/icons-material/Replay';
import styles from './WhatsAppPreview.module.css';

const WhatsAppPreview = () => {
  return (
    <div className={styles.whatsappPreview}>
      <div className={styles.previewHeader}>
        <IconButton size="small">
          <ArrowBackIcon />
        </IconButton>
        <div className={styles.companyInfo}>
          <div className={styles.companyAvatar}>C</div>
          <span>Company name</span>
        </div>
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </div>

      <div className={styles.previewContent}>
        <div className={styles.dateLabel}>Today</div>
        
        <div className={styles.messageCard}>
          <div className={styles.carrierLogos}>
            <div className={styles.logoPlaceholder}>Jio</div>
            <div className={styles.logoPlaceholder}>VI</div>
            <div className={styles.logoPlaceholder}>Airtel</div>
            <div className={styles.logoPlaceholder}>BSNL</div>
          </div>
          
          <p className={styles.messageText}>
            Recharge with 349 Rs. and get best value for 28 days, 2GB/day + Unlimited 5G
          </p>
          
          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>
              <ReplayIcon />
              Recharge with 349 Rs.
            </button>
            <button className={styles.actionButton}>
              <ReplayIcon />
              More Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPreview;
