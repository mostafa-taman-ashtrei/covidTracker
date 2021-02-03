import axios from 'axios';
import { apiData } from '../types/apiData';
import { dailyData } from '../types/dailyData';

const api = 'https://covid19.mathdro.id/api';

export const getData = async (country: string | null = null): Promise<apiData> => {
    let apiUrl: string;
    if (country) apiUrl = `${api}/countries/${country}`;
    else apiUrl = api;

    try {
        const { data } = await axios.get(apiUrl);
        const {
            confirmed, recovered, deaths, lastUpdate,
        } = data;
        const apidata = {
            confirmed: confirmed.value,
            recovered: recovered.value,
            deaths: deaths.value,
            lastUpdate,
        };

        return apidata;
    } catch (e) {
        console.log(e);
        throw new Error('Request Failed ):');
    }
};

export const getDailyData = async (): Promise<dailyData[]> => {
    try {
        const { data } = await axios.get(`${api}/daily`);
        const dailyApiData: dailyData[] = data.map(
            ({ confirmed, deaths, reportDate }: any) => (
                { confirmed: confirmed.total, deaths: deaths.total, reportDate }),
        );
        return dailyApiData;
    } catch (e) {
        console.log(e);
        throw new Error('Request Failed ):');
    }
};

export const getCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${api}/countries`);
        const countriyData = countries.map((country: any) => country.name);
        return countriyData;
    } catch (e) {
        console.log(e);
        throw new Error('Request Failed ):');
    }
};
