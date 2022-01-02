import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        allColors: ['red', 'blue', 'green', 'orange', 'pink', 'purple'],
        nBoxes: 18

    }
    render() {
        const boxes = Array.from({ length: this.props.nBoxes }).map(() => {
            return <Box allColors={this.props.allColors} />
        });
        return <div className='BoxContainer'>{boxes}</div>

    }
}

export default BoxContainer;