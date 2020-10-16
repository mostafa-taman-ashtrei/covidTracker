import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

export default function CountryPicker({ handleCountryChange }) {
    const [ countries, setCountries ] = useState([]);
    
    const fetchData = async () => {
        const results = await fetchCountries();
        setCountries(results)
    }

    useEffect(() => {
        fetchData();
    }, [])
 
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">World Wide</option>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
