import { STATUS_COLORS } from '../../../utils/constants';
import styles from './StatusBadge.module.css';

const StatusBadge = ({ status }) => {
  const color = STATUS_COLORS[status] || '#757575';
  
  return (
    <span 
      className={styles.badge}
      style={{ 
        backgroundColor: `${color}20`,
        color: color
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;