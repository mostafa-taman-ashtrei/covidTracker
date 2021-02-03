import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getData } from './api';
import { apiData } from './types/apiData';
import styles from './App.module.css';
import Chart from './components/chart/chart';
import CountryPicker from './components/countryPicker/countryPicker';
import Info from './components/cards';

const App: React.FC = () => {
    const [data, setData] = useState<apiData | null>(null);
    const [country, setCountry] = useState<string>('');
    const [loading, setLoading] = useState<Boolean>(true);

    const fetchInitialData = async (Selectedcountry: string | null = null): Promise<void> => {
        const results = await getData(Selectedcountry);
        setData(results);
        setLoading(false);
    };

    useEffect(() => { fetchInitialData(); }, []);

    const handleCountryChange = async (Selectedcountry: string): Promise<void> => {
        setLoading(true);
        await fetchInitialData(Selectedcountry);
        setCountry(Selectedcountry);
    };

    return (
        <div className={styles.container}>
            <h1>
                NEO covid
                <span>🦠</span>
                {' '}
                tracker
            </h1>
            <CountryPicker handleCountryChange={handleCountryChange} />
            {
                loading ? <CircularProgress />
                    : data
                        ? (
                            <>
                                <Info data={data} />
                                <Chart data={data} country={country} />
                            </>
                        )
                        : null
            }
        </div>
    );
};

export default App;
