import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { getCountries } from '../../api';

interface props {
    // eslint-disable-next-line no-unused-vars
    handleCountryChange: (country: string) => Promise<void>,
}

const CountryPicker: React.FC<props> = ({ handleCountryChange }: props) => {
    const [countries, setCountries] = useState([]);

    const fetchData = async () => {
        const results = await getCountries();
        setCountries(results);
    };

    useEffect(() => { fetchData(); }, []);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleCountryChange(e.target.value)}>
                <option value="">World Wide</option>
                {
                    countries.map(
                        (country: string, i) => <option key={i} value={country}>{country}</option>,
                    )
                }
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;
