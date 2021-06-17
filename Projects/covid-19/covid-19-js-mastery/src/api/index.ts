import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await axios.get(url);

  return {
    confirmed: confirmed.value,
    recovered: recovered.value,
    deaths: deaths.value,
    lastUpdate: new Date(lastUpdate).toDateString(),
  };
};


// CORS Problems
/* export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(
      'https://api.covidtracking.com/v1/us/daily.json',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          mode: 'cors',
        },
      }
    );

    return data.map(
      ({ positive, recovered, death, dateChecked: date }: DailyData) => ({
        confirmed: positive,
        recovered,
        deaths: death,
        date,
      })
    );
  } catch (error) {
    console.log('ERROR');
    return error;
  }
}; */

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country: any) => country.name);
  } catch (error) {
    return error;
  }
};
