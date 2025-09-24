import { PanelRightClose, PanelRightOpen, ShieldUser } from 'lucide-react';
import { useContext } from 'react';
import { appStore } from '../store/app.store';
import { authStore } from '../store/auth.store';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const { logOut, user } = useContext(authStore);
  const { sidebar, openSidebar, closeSidebar } = useContext(appStore);

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.toggle}>
          {/* {sidebar ? (
            <PanelRightOpen onClick={closeSidebar} />
          ) : (
            <PanelRightClose onClick={openSidebar} />
          )} */}
        </div>
        <h1 className={styles.title}>Admin</h1>
      </div>

      <div className={styles.right}>
        <ShieldUser />
        <button onClick={logOut} className={styles.logoutBtn}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;
