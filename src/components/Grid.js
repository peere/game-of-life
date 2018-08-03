import React from 'react';
import Square from "./Square";

class Grid extends React.Component {
    state = {
        grid: [],
        body: [],
        intervalStarted: false,
    };

    constructor(props) {
        super(props);
        this.state.grid = this.initGrid();
    }
    render() {
        return (
            <div className="grid">
                {this.parseToBody()}
            </div>
        )
    }

    initGrid() {
        let tempGrid = [];
        let row = Array(this.props.size);
        row.fill(0);
        for (let rowNum = 0; rowNum < this.props.size; rowNum++) {
            tempGrid.push(row);
        }
        return tempGrid;
    }

    parseToBody() {
        let rowNum = 0;
        let tempBody = [];
        for (let row of this.state.grid) {
            let columnNum = 0;
            for (let element of row) {
                tempBody.push( <Square selected={element === 1} onSquareClick={this.onSquareClick}
                                       rowNum={rowNum} columnNum={columnNum}/>);
                columnNum++
            }
            rowNum++;
            tempBody.push(<br/>)
        }
        return tempBody;
    }

    onSquareClick = (rowNum, columnNum) => {
        let tempGrid = Grid.getGridCopy(this.state.grid);
        tempGrid[rowNum][columnNum] = tempGrid[rowNum][columnNum] === 0 ? 1 : 0;
        this.setState({grid: tempGrid});
    };

    static getGridCopy(grid) {
        return JSON.parse(JSON.stringify(grid));
    }

    componentDidUpdate() {
        if (this.props.start && !this.state.intervalStarted) {
            this.setState({intervalStarted: true});
            clearInterval(this.interval);
            this.interval = setInterval(this.startSimulation, this.props.speed);
        }
        if (!this.props.start && this.state.intervalStarted) {
            clearInterval(this.interval);
            this.setState({intervalStarted: false});
        }
    }

    startSimulation = () => {
        let neighboursGrid = this.parseGridToNeighboursCountGrid();
        this.parseNeighboursCountGridToGrid(neighboursGrid);
    };

    parseGridToNeighboursCountGrid = () => {
        let gridCopy = Grid.getGridCopy(this.state.grid);
        let neighboursGrid = this.initGrid();
        for (let rowNum = 0; rowNum < gridCopy.length; rowNum++) {
            for (let columnNum = 0; columnNum < gridCopy[rowNum].length; columnNum++) {
                if (gridCopy[rowNum][columnNum] === 1)
                    neighboursGrid = this.addValueToSquaresAround(rowNum, columnNum, gridCopy, neighboursGrid);
            }
        }
        return neighboursGrid
    };

    addValueToSquaresAround = (rowNum, columnNum, gridCopy, neighboursGrid) => {
        let neighboursGridClone = Grid.getGridCopy(neighboursGrid);
        for (let whichRow = -1; whichRow <= 1; whichRow++) {
            for (let whichColumn = -1; whichColumn <= 1; whichColumn++) {
                if (whichColumn !== 0 || whichRow !== 0) {
                    if (gridCopy[rowNum + whichRow] !== undefined &&
                        gridCopy[rowNum + whichRow][columnNum + whichColumn] !== undefined) {
                        neighboursGridClone[rowNum+whichRow][columnNum+whichColumn] += 1;
                    }
                }
            }
        }
        return neighboursGridClone;
    };

    parseNeighboursCountGridToGrid = (neighboursGrid) => {
        let tempGrid = [];
        for (let rowNum = 0; rowNum < neighboursGrid.length; rowNum++) {
            let gridRow = [];
            for (let columnNum = 0; columnNum < neighboursGrid[rowNum].length; columnNum++) {
                switch (neighboursGrid[rowNum][columnNum]) {
                    case 2:
                        if (this.state.grid[rowNum][columnNum] === 1)
                            gridRow.push(1);
                        else
                            gridRow.push(0);
                        break;
                    case 3:
                        gridRow.push(1);
                        break;
                    default:
                        gridRow.push(0);
                }
            }
            tempGrid.push(gridRow);
        }
        this.setState({grid: tempGrid});
    };

}
export default Grid;
