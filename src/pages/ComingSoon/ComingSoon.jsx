import { useLocation } from 'react-router-dom';
import ConstructionIcon from '@mui/icons-material/Construction';
import styles from './ComingSoon.module.css';

const ComingSoon = () => {
  const location = useLocation();
  const pageName = location.pathname.replace('/', '').charAt(0).toUpperCase() + 
                   location.pathname.replace('/', '').slice(1);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ConstructionIcon className={styles.icon} />
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.message}>
          The {pageName} page is currently under development.
        </p>

      </div>
    </div>
  );
};

export default ComingSoon;
