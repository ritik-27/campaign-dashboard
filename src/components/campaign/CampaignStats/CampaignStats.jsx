import styles from './CampaignStats.module.css';

const CampaignStats = ({ stats }) => {
  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          <div className={styles.statLabel}>{stat.label}</div>
          <div className={styles.statValue}>{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

export default CampaignStats;
