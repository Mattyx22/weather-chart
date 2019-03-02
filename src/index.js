import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu';
import ChartTag from './components/ChartTag';

class App extends React.Component {
    render(){
        return(
            <div>
                <Menu />
                <ChartTag />
            </div>
        )
    }
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);