import React from 'react';
import axios from 'axios';



class Menu extends React.Component {
    state = {search: '', localization: [] };

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.search);
    
        
        axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.search}&key=31f2985b4a544bbc9e42b559da344419`)
        .then(result => this.setState({
            localization: [result.data.results[0].geometry.lat, 
            result.data.results[0].geometry.lng]
        }))
        .catch(error => this.setState({
            error: error
        }))

        

        
    }

    render(){
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Weather Charts</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">Features</a>
                <a className="nav-item nav-link" href="#">Pricing</a>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.onFormSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="City" aria-label="Search" 
                    onChange={(e) => this.setState({
                        search: e.target.value
                    })} value={this.state.search} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
                }
};

export default Menu;