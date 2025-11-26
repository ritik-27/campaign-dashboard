import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
      
      <div className={styles.rightSection}>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        
        <IconButton>
          <CalendarTodayIcon />
        </IconButton>
        
        <div className={styles.userInfo}>
          <div className={styles.userDetails}>
            <span className={styles.userLabel}>Admin</span>
            <span className={styles.userName}>Ritik</span>
          </div>
          <Avatar sx={{ width: 36, height: 36, bgcolor: '#757575' }}>
            R
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;