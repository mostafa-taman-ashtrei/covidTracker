import React, { useState, useEffect } from 'react';

import styles from './App.module.css';
import image from './images/image.png';
import { fetchData } from './api';
import { Cards, Chart, CountryPicker } from './components'


function App() {
  const [ data, setData ] = useState({});
  const [ country, setCountry ] = useState('');

  // Get params for links
  
  const GetData = async () => {
    const results = await fetchData()
    setData(results);
  }

  const handleCountryChange = async (country) => {
    // handle loading
    const results = await fetchData(country);
    setCountry(country);
    setData(results);
   
  }

  useEffect(() => {
    GetData()
  }, []);


  return (
    <div className={styles.container}>
      <h1>Welcome to NEO covid tracker ...</h1>
      <img src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} /> 
    </div>
  );
}

export default App;