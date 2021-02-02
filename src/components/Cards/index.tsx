import React from 'react';
import { Grid } from '@material-ui/core';

import CardComponent from './cardComponent';
import styles from './cards.module.css';
import { apiData } from '../../types/apiData';


interface props {
    data: apiData
}

const Info: React.FC<props> = ({ data: { confirmed, recovered, deaths, lastUpdate } }: props) => {
    return (

        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <CardComponent
                    className={styles.infected}
                    cardTitle="Infected"
                    value={confirmed}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of active cases from COVID-19."
                />
                <CardComponent
                    className={styles.recovered}
                    cardTitle="Recovered"
                    value={recovered}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of recoveries from COVID-19."
                />
                <CardComponent
                    className={styles.deaths}
                    cardTitle="Deaths"
                    value={deaths}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of deaths caused by COVID-19."
                />
            </Grid>
        </div>
    )
}

export default Info;