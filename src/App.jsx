import React from 'react';

import { Cards, Chart, CountryPicker } from "./components";
import styles from './App.module.scss';
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
  
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <section className={styles.background}>
        <div className={styles.App}>
          <h1>COVID-19 Tracker</h1>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country}/>
        </div>
      </section>
    );
  }
}

export default App;
