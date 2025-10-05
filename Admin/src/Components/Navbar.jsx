import { ShieldUser, Search } from 'lucide-react';
import { useContext, useState } from 'react';
import { appStore } from '../store/app.store';
import { authStore } from '../store/auth.store';
import logo from "../assets/hotel.png";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const { logOut, user } = useContext(authStore);
  const { sidebar, openSidebar, closeSidebar } = useContext(appStore);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logoBox}>
          <img src={logo} alt="Hotel Logo" className={styles.logo} />
          <h1 className={styles.title}>Admin</h1>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>
            <Search size={18} />
          </button>
        </div>
      </div>

      <div className={styles.right}>
        <ShieldUser className={styles.userIcon} />
        <button onClick={logOut} className={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
