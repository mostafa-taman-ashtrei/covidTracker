import React, { useState, useEffect } from 'react';

import { getData } from './api';
import { apiData } from './types/apiData';
import styles from './App.module.css';
import Chart from './components/chart/chart';
import CountryPicker from './components/countryPicker/countryPicker';
import Info from './components/cards/';

const App: React.FC = () => {
  const [data, setData] = useState<apiData | null>(null);
  const [country, setCountry] = useState<string>('');

  const fetchInitialData = async (country: string | null = null): Promise<void> => {
    const results = await getData(country);
    setData(results);
  }

  useEffect(() => { fetchInitialData() }, []);

  const handleCountryChange = async (country: string): Promise<void> => {
    await fetchInitialData(country);
    setCountry(country);
  }

  return (
    <div className={styles.container}>
      <h1>NEO covid  <span>🦠</span> tracker</h1>
      <CountryPicker handleCountryChange={handleCountryChange} />
      { data ?
        <>
          <Info data={data} />
          <Chart data={data} country={country} />
        </>
        : null
      }
    </div>
  );
}

export default App;
