import React, { useEffect, useState } from "react";
import { Calendar, Search, User, MapPin } from "lucide-react";
import styles from "../styles/home.module.css";

const Home = () => {
  const text = "Welcome Modern Hotel Booking";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchQuery.trim()) {
        setSearchResults([]);
        return;
      }

      try {
         const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/search?query=${searchQuery}`
);
       const data = await res.json();
        if (data.success) {
          setSearchResults(data.data);
        }
      } catch (error) {
        console.error("Live search error:", error);
      }
    };

    const debounce = setTimeout(fetchResults, 300);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.typing}>
          {displayText}
          <span className={styles.cursor}>|</span>
        </h1>
        <p>Discover modern stays and luxurious rooms</p>
        <button className={styles.bookBtn}>Book Now</button>
      </div>

      <div className={styles.searchBar}>
        <div className={styles.searchField}>
          <MapPin size={18} />
          <div>
            <span>Where to?</span>
            <input
              type="text"
              placeholder="Search destination"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {searchResults.length > 0 && (
              <ul className={styles.searchResults}>
                {searchResults.map((hotel) => (
                  <li key={hotel._id}>
                    <strong>{hotel.name}</strong> – {hotel.city}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className={styles.searchField}>
          <Calendar size={18} />
          <input type="date" />
        </div>

        <div className={styles.searchField}>
          <User size={18} />
          <input type="text" placeholder="2 travellers, 1 room" />
        </div>

        <button className={styles.searchBtn}>
          <Search size={18} /> Search
        </button>
      </div>
    </section>
  );
};

export default Home;
