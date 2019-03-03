import React from 'react';
import Chart from 'chart.js';



class ChartTag extends React.Component {
    state = { weatherData: [] };
    
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

        fetch(`https://api.darksky.net/forecast/${key}/50,16`, request)
        .then((response => response.json()))
        .then((responseJson => {
            console.log(responseJson.currently);
            this.setState({
                weatherData: responseJson.currently
            })
        }))
        .catch((err) => console.log(err));
            
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1.03", "2.03", "3.0", "4.03", "5.03", "6.03"],
            datasets: [{
                label: '# of Votes',
                data: [4, 6, 12, 17, 9, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    };

    render() {
        return (
            <div className="center" style={{width: '46vw', position: 'relative'}}>
                <span>Your position: {this.props.message} {this.props.lat} {this.props.long} </span>
                <h3>Current weather:</h3>
                <p>{JSON.stringify(this.state.weatherData)}</p>
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
        );
    }
};

export default ChartTag;