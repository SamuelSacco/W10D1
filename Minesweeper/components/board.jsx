import Tile from './tile';
import React from 'react';
import * as Minesweeper from '../minesweeper';


class Board extends React.Component{
    constructor(props){
        super(props);   
    }

    render(){
        const board = this.props.board

        return (
            <Tile/>
        )
    }
}

export default Board ;