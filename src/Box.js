import React, { Component } from 'react';
import './Box.css'
import { choice } from './helpers'

class Box extends Component {

    constructor(props) {
        super(props);
        this.state = { color: choice(this.props.allColors) };
        this.handleClick = this.handleClick.bind(this);
    }

    setColor() {
        let newColor;
        do {
            newColor = choice(this.props.allColors);
        } while (this.state.color === newColor)
        this.setState({ color: newColor })
    }

    handleClick(e) {
        this.setColor()
    }
    render() {
        return (
            <div className='Box' style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>
            </ div>
        )
    }
}

export default Box;