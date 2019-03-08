import React from 'react';
import Chart from 'chart.js';

let days = []

class ChartTag extends React.Component {
    
    days() {
        let d = new Date();
        
        days = [d.getDate(), d.getDate()+1, d.getDate()+2, d.getDate()+3, d.getDate()+4, d.getDate()+5]

        return days;
    }
    
    componentDidUpdate(){   
        
        let temperatures = this.props.tempList;

        var ctx = document.getElementById("myChart");
        new Chart(ctx, {
        type: 'line',
        data: {
            labels: this.days(),
            datasets: [{
                label: 'Celsius degrees',
                data: temperatures,
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
            <div className="center" style={{width: '36vw', position: 'relative'}}>
                <span>Your position: {this.props.message} {this.props.lat} {this.props.long} </span>
                <h3>Current weather:</h3>
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
        );
    }
};

export default ChartTag;