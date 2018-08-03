import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import registerServiceWorker from './registerServiceWorker';
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";

class root extends React.Component{
    state = {
        start: false,
        size: 25,
        speed: 1000/10,
        grid: [],
    };
    render() {
        return (
            <div>
                <Navbar startBtn={this.onStartBtnPress} stopBtn={this.onStopBtnPress}
                        randomizeBtn={this.onRandomizeBtnPress} clearBtn={this.onClearBtnPress}
                            speedBtn={this.onSpeedBtnPress} sizeBtn={this.onSizeBtnPress} />
                <Grid start={this.state.start} size={this.state.size} speed={this.state.speed} grid={this.state.grid} />
            </div>
        );
    }


    onStartBtnPress = () => {
        this.setState({start: true});
    };

    onStopBtnPress = () => {
        this.setState({start: false});
    };

    onRandomizeBtnPress() {
        // to be implemented
    }

    onClearBtnPress() {
        // to be implemented
    }

    onSpeedBtnPress() {
        // to be implemented
    }

    onSizeBtnPress() {
        //to be implemented
    }
}

ReactDOM.render(
    React.createElement(root, null)
    , document.getElementById('root'));

registerServiceWorker();
