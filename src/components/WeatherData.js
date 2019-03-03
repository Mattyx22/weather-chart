import React from 'react';
import TemperaturesList from './TemperaturesList';

class WeatherData extends React.Component {
    state = { weatherData: {} };

    componentDidMount(){
        const headers = new Headers({
            'Content-Type': 'text/plain',
            'key': 'f8e57f1fd54716f5fd4f0ce5023df702' 
        });
        const key = 'f8e57f1fd54716f5fd4f0ce5023df702';
        const request = new Request({
            method: 'GET',
            mode: 'cors',
            headers: headers
        });

        fetch(`https://api.darksky.net/forecast/${key}/${this.props.lat},${this.props.long}?units=si`, request)
        .then((response => response.json()))
        .then((responseJson => {
            console.log(responseJson.daily);
            this.setState({
                weatherData: responseJson
            })
        }))
        .catch((err) => console.log(err));
    }



    render(){
        return(
            <div>
            {JSON.stringify(this.state.weatherData.daily)}
            <h3>Current weather:</h3>
            <TemperaturesList temps = {this.state.weatherData.daily} />
            </div>
            
        );
    };
};

export default WeatherData;