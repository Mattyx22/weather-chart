import React from 'react';
import ChartTag from './ChartTag';

class WeatherData extends React.Component {
    state = {weatherData: {}};

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

        /*fetch(`https://api.darksky.net/forecast/${key}/50,16`, request)
            .then((response) => {
                response.json().then(respData => {
                    console.log(respData.daily.data[0]);
                })
            }) 
            .catch((err) => {
                console.log(err);
            });
            */
        fetch(`https://api.darksky.net/forecast/${key}/50,16`, request)
        .then((response => response.json()))
        .then((responseJson => {
            this.setState({
                weatherData: {responseJson}
            })
        }))
    }

    render(){
        return(
            <div>elo</div>
        );
    };
};

export default WeatherData;