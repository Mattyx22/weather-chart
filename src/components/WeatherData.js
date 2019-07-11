import React from 'react';
import axios from 'axios';
import ChartTag from './ChartTag';


let tempList = [];

class WeatherData extends React.Component {
    state = { weatherData: { daily: {data: [] } }, error: null, tempList: [], address: { data: { result: [] } } };
    componentDidMount(){
        
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f8e57f1fd54716f5fd4f0ce5023df702/${this.props.lat},${this.props.long}?units=si`)
        .then(result => this.setState({
            weatherData: result.data
        }))
        .catch(error => this.setState({
            error: error
        }))

        this.setState({tempList: this.tempList()})

        axios.get(`https://cors-anywhere.herokuapp.com/https://api.opencagedata.com/geocode/v1/json?q=${this.props.lat}+${this.props.long}&key=31f2985b4a544bbc9e42b559da344419`)
        .then(result => this.setState({
            address: result.data.results[0].components.city
        }))
        .catch(error => this.setState({
            error: error
        }))
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
            <h4>You are here:</h4>
            {JSON.stringify(this.state.address)}
            <br /><br />
            <h4>Temperatures:</h4>
            {this.tempList()}
            {this.state.weatherData.daily.data.map((temperature) => {
            return <div>{temperature.temperatureHigh}</div>
            })}
            </div>
            
        );
    };
};



export default WeatherData;