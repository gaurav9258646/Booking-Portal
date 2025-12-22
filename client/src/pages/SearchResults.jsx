import React from 'react';
import styles from './../styles/SearchResults.mdule.css';

const SearchResults = () => {
  

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h3>Filters</h3>
        <label><input type="checkbox" /> 5 Star</label>
      </aside>

      <main className={styles.mainList}>
        {hotels.map(hotel => (
          <div key={hotel.id} className={styles.hotelCard}>
            <img src={hotel.img} className={styles.hotelImg} alt={hotel.name} />
            <div className={styles.hotelDetails}>
              <h2>{hotel.name}</h2>
              <p className={styles.price}>{hotel.price}</p>
              <button className={styles.searchBtn}>Book Now</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default SearchResults;