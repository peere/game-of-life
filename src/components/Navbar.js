import React from 'react';


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <span className="navbar-brand">Game of Life</span>
                <div className="custom-control-inline">
                    <span className="dropdown-divider"/>
                    <span className="btn btn-primary" onClick={this.props.startBtn}>Start</span>
                    <span className="btn btn-primary" onClick={this.props.stopBtn}>Stop</span>
                    <span className="btn btn-primary" onClick={this.props.randomizeBtn}>Randomize</span>
                    <span className="btn btn-primary" onClick={this.props.clearBtn}>Clear</span>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Speed
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item">Slow</a>
                            <a className="dropdown-item">Normal</a>
                            <a className="dropdown-item">Fast</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Size
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item">10x10</a>
                            <a className="dropdown-item">25x25</a>
                            <a className="dropdown-item">50x50</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;