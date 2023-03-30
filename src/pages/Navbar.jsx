import styles from "../styles/Navbar.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [city, setCity] = useState("");
  const [hotel, setHotel] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://failteireland.azure-api.net/opendata-api/v1/accommodation?$filter=address/addressLocality eq '${city}'`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      setHotel(data.results[0]);
    } else {
      setHotel(null);
    }

    setCity("");
  };

  const [cities, setCities] = useState([]);
  useEffect(() => {
    async function fetchCities() {
      const response = await fetch(
        "https://failteireland.azure-api.net/opendata-api/v1/accommodation"
      );
      const data = await response.json();

      const cityList = data.results.map(
        (hotel) => hotel.address.addressLocality
      );
      const uniqueCities = [...new Set(cityList)];

      setCities(uniqueCities);
    }

    fetchCities();
  }, []);

  const handleCityClick = (e) => {
    e.preventDefault();
    setCity(e.target.textContent);
  };

  const handleMyLocationClick = async () => {
    const response = await fetch(
      `https://failteireland.azure-api.net/opendata-api/v1/accommodation?$filter=address/addressLocality eq '${city}'`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const { latitude, longitude } = data.results[0].geo;

      // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      window.open(url, "_blank");
    } else {
      console.log("Hotel not found");
    }
  };

  return (
    <div className={styles.Navbar}>
      Welcome in Ireland !🍀
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cerca hotel per città"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Cerca</button>
        <button type="button" onClick={handleMyLocationClick}>
          guardami su google maps
        </button>
      </form>
      {hotel && (
        <div>
          <Link to={`/products/${encodeURIComponent(hotel.name)}`}>
            {hotel.name}
          </Link>
          <p>
            {hotel.address.addressLocality}, {hotel.address.addressCountry}
          </p>
        </div>
      )}
      <div className={styles.containrlistofcities}>
        <div className={styles.listofcities}>
          {cities.map((city) => (
            <p key={city} onClick={handleCityClick}>
              {city}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
