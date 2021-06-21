import Tile from './tile';
import React from 'react';
import * as Minesweeper from '../minesweeper';


class Board extends React.Component{
    constructor(props){
        super(props);   
    }

    render(){
        const {board,updateGame} = this.props
        // debugger
       
        board.grid.map((row,idx) => {

            return (
                <div classname='row' key={idx}>
                    { row.map((tile, idx2)=>{
            return (
                <Tile key={idx * board.gridsize + idx2} tile={tile} updateGame={updateGame}/>
            )
        })}
                </div>
           
        )
        })

        
    }
}

export default Board ;