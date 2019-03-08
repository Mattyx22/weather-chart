import React from 'react';
import axios from 'axios';
import ChartTag from './ChartTag';

let tempList = [];

class WeatherData extends React.Component {
    state = { weatherData: { daily: {data: [] } }, error: null, tempList: [] };
    

    componentDidMount(){
        

        axios.get(`https://api.darksky.net/forecast/f8e57f1fd54716f5fd4f0ce5023df702/${this.props.lat},${this.props.long}?units=si`)
        .then(result => this.setState({
            weatherData: result.data
        }))
        .catch(error => this.setState({
            error: error
        }))

        this.setState({tempList: this.tempList()})
    }

    tempList(){
        this.state.weatherData.daily.data.map((temperature) => {
            return tempList.push(Math.round(temperature.temperatureHigh));
        })

        return tempList;
    }

    render(){
        return(
            <div>
            {/*JSON.stringify(this.state.weatherData)*/}
            <ChartTag lat={this.props.lat} long={this.props.long} tempList={this.state.tempList} />
            <h3>Current weather:</h3>
            Temperatures:
            {this.tempList()}
            {this.state.weatherData.daily.data.map((temperature) => {
            return <div>{temperature.temperatureHigh}</div>
            })}
            </div>
            
        );
    };
};



export default WeatherData;