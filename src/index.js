import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu';
import ChartTag from './components/ChartTag';
import WeatherData from './components/WeatherData';

class App extends React.Component {
    state = {lat: null, long: '', errorMsg: '' };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
            },
            (err) => this.setState({errorMsg: err.message})
        );
    }

    renderContent() {
        if(this.state.lat && this.state.long && !this.state.errorMsg){
            return(
                <div>
                    <WeatherData lat={this.state.lat} long={this.state.long}/>
                </div>
                
            );
        } else if (!this.state.lat && !this.state.long && this.state.errorMsg) {
            return (
                <ChartTag message={this.state.errorMsg} />
            );
        } else {
            return (
                <ChartTag message="Loading..." />
            );
        }
    };

    onSearchSubmit(localization){
        console.log(localization);
    }

    render(){
        return(
            <div>
                <Menu lat={this.state.lat} long={this.state.long} />
                {this.renderContent()}
                
            </div>
        )
    }
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);