import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowNum: this.props.rowNum,
            columnNum: this.props.columnNum,
        }
    }

    render() {
        return <div onClick={() => this.props.onSquareClick(this.state.rowNum, this.state.columnNum)}
                                  className={this.props.selected ? "selected" : ""} id="square"/>
    }


}
export default Square;