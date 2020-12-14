import React from 'react';
import { Grid } from "@material-ui/core";
import {Cards, Chart, CountryPicker ,Weather} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import Footer from './components/Footer'


class App extends React.Component {

    state ={
        data:{},
        country:'',
    }

async componentDidMount() {
const fetchedData = await fetchData();
this.setState({data:fetchedData});
}



handleCountryChange =  async (country) => {
    const fetchedData = await fetchData(country);    
    this.setState({data:fetchedData, country:country});
}


render(){
 const {data,country} = this.state;
        return (
            <>
            <Weather/>
             <Grid container className={styles.container}>
             <h1 className={styles.head}>Covid Tracker</h1>
             <Cards data = {data} />
             <CountryPicker handleCountryChange={this.handleCountryChange} />
             <Chart data = {data} country={country} />
            </Grid>
          <Grid>
          <Footer/>
          </Grid>
           </>
        )
    }
}

export default App;