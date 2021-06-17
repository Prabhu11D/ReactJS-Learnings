import React, { Component } from 'react';
import { fetchData } from './api';
import './styles/App.css';
import { Card, Chart } from './components';
import CountryPicker from './components/CountryPicker';
import logo from './img/logo.png';

export interface State {
  data: {
    confirmed: number;
    recovered: number;
    deaths: number;
    lastUpdate: string;
  };
  country: string;
}

class App extends Component {
  state: State = {
    data: {
      confirmed: -1,
      deaths: -1,
      recovered: -1,
      lastUpdate: '',
    },
    country: '',
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountry = (country: string) => {
    this.setState({
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <div className='img'>
          <img src={logo} alt="Covid 19 logo" />
        </div>
        <Card data={data} />
        <CountryPicker
          handleCountry={(country: string) => this.handleCountry(country)}
        />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
